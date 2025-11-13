import NewPrimaryButton from '@/Components/NewPrimaryButton';
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
        { name: 'Beranda', href: '/' },
        { name: 'Kursus', href: '/courses' },
        { name: 'Modul', href: '/modules' },
        { name: 'Tentang Kami', href: '#' },
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
                                onSuccess: () =>
                                    toast.success('Berhasil logout'),
                                onError: () => toast.error('Gagal logout'),
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

    const isActive = (path: string) => url === path;

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-50 bg-white">
                 <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-10 md:py-5">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/Alope.png"
                            alt="Alope Course Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <div className="leading-tight">
                            <h1 className="text-lg font-semibold text-primary">
                                Alope Course
                            </h1>
                            <p className="-mt-1 text-sm text-gray-500">
                                Upgrade Your Skills
                            </p>
                        </div>
                    </Link>
                    <ul className="hidden items-center gap-8 font-medium md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`transition hover:text-primary ${
                                        isActive(link.href)
                                            ? 'font-semibold text-primary'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden items-center gap-4 md:flex">
                        {auth.user ? (
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 transition ${
                                        isDropdownOpen
                                            ? 'bg-primary text-white'
                                            : 'hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    <IconCirclePersonFill className="size-5" />
                                    <span>{auth.user.name}</span>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/register">
                                    <NewPrimaryButton
                                        text="Daftar"
                                        variant="outline"
                                    />
                                </Link>
                                <Link href="/login">
                                    <NewPrimaryButton
                                        text="Masuk"
                                        variant="primary"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 md:hidden"
                    >
                        <IconHamburger />
                    </button>
                </div>
            </nav>
            <div className="h-[76px] md:h-[80px]" />

            {/* Drawer mobile */}
            <aside
                className={`fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-lg transition-transform md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 text-2xl text-gray-600"
                >
                    ✕
                </button>

                <ul className="mt-16 flex flex-col gap-4 px-6 font-medium text-gray-600">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block py-2 transition hover:text-primary ${
                                    isActive(link.href)
                                        ? 'font-semibold text-primary'
                                        : 'text-gray-600'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    {auth.user ? (
                        <>
                            <li>
                                <Link
                                    href="/profile"
                                    className="block py-2 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleLogout();
                                    }}
                                    className="block w-full py-2 text-left text-red-600 hover:text-red-700"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    href="/register"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <NewPrimaryButton
                                        variant="outline"
                                        showIcon={false}
                                        className="w-full !rounded-xl !py-2"
                                    >
                                        Daftar
                                    </NewPrimaryButton>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <NewPrimaryButton
                                        variant="primary"
                                        showIcon={false}
                                        className="w-full !rounded-xl !py-2"
                                    >
                                        Masuk
                                    </NewPrimaryButton>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </aside>
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
        </>
    );
}
