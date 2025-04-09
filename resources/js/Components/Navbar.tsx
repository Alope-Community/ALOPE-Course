import { Link, useForm, usePage } from '@inertiajs/react';
import { IconCirclePersonFill, IconHamburger } from 'justd-icons';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function NavbarComponent() {
    const { url, props } = usePage();
    const { auth } = props;

    const { post } = useForm();

    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Course', href: '/courses' },
        { name: 'Article', href: '/articles' },
        // { name: 'Video', href: '/coming-soon' },
    ];

    const handleLogout = () => {
        toast((t) => (
            <div className="flex flex-col gap-4">
                <p>Apakah yakin ingin logout?</p>
                <div className="flex justify-end gap-2">
                    <button
                        className="rounded bg-gray-200 px-3 py-1 text-sm"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Batal
                    </button>
                    <button
                        className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                        onClick={() => {
                            post(route('logout'), {
                                onSuccess: () => {
                                    toast.success('Logged out successfully');
                                },
                                onError: () => {
                                    toast.error('Failed to logout');
                                },
                            });
                            toast.dismiss(t.id);
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        ));
    };

    return (
        <>
            <nav className="max-w-screen fixed left-0 right-0 top-0 z-50 px-3 py-3 shadow backdrop-blur-lg md:px-10 md:py-5 xl:px-5 2xl:px-2">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/">
                        <p className="text-xl font-bold md:text-2xl">ALOPE</p>
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex"
                        >
                            <IconHamburger />
                        </button>
                    </div>
                    <ul className="hidden items-center gap-5 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${
                                        link.href === '/'
                                            ? url === '/'
                                                ? 'font-semibold text-[#2276f0]'
                                                : ''
                                            : url.startsWith(link.href)
                                              ? 'font-semibold text-[#2276f0]'
                                              : ''
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="mx-6 text-gray-700">|</li>
                        {auth.user ? (
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    className={`flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-[#2276f0] hover:text-white ${isDropdownOpen && 'bg-[#2276f0] text-white'}`}
                                >
                                    <IconCirclePersonFill className="size-5" />
                                    <span>{auth.user.name}</span>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                                        {/* <Link
                                            href="/dashboard"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Dashboard
                                        </Link> */}
                                        <Link
                                            href="/profile/history"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            History
                                        </Link>
                                        {/* <hr className="my-2" /> */}
                                        <button
                                            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                            onClick={() => handleLogout()}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li>
                                <Link
                                    href="/login"
                                    className="rounded-full bg-[#2276f0] px-5 py-1.5 text-white hover:bg-[#2276f0]/80"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            {/* Sidebar Menu untuk Mobile */}
            <aside
                className={`fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-lg backdrop-blur-lg transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 text-gray-600"
                >
                    ✕
                </button>
                <ul className="mt-16 flex flex-col gap-5 p-5">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 text-lg ${
                                    link.href === '/'
                                        ? url === '/'
                                            ? 'font-semibold text-[#2276f0]'
                                            : ''
                                        : url.startsWith(link.href)
                                          ? 'font-semibold text-[#2276f0]'
                                          : ''
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {auth.user ? (
                        <>
                            <li>
                                <Link
                                    href={'/profile/history'}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 text-lg ${
                                        url.startsWith('/profile/history')
                                            ? 'font-semibold text-[#2276f0]'
                                            : ''
                                    }`}
                                >
                                    History
                                </Link>
                            </li>
                            <li>
                                <button
                                    className="text-red-600"
                                    onClick={() => handleLogout()}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </aside>

            {/* Overlay untuk menutup menu saat diklik di luar */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Add click outside handler for dropdown */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                ></div>
            )}
        </>
    );
}
