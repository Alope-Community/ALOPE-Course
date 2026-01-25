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
        { name: 'Home', href: '/' },
        { name: 'Kursus', href: '/courses' },
        // { name: 'Modul', href: '/modules' },
        { name: 'Video', href: '/videos/kickstart-ml-persiapan' },
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
                <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-10 md:py-5 lg:px-14 xl:px-0">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo/alope-blue.png"
                            alt="Alope Course Logo"
                            className="size-8 object-contain sm:size-10"
                        />
                        <div className="leading-tight">
                            <h1 className="font-semibold text-primary sm:text-lg">
                                Alope Course
                            </h1>
                            <p className="-mt-1 text-xs text-gray-500 sm:text-sm">
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
                                {/* <Link href="/register">
                                    <NewPrimaryButton
                                        text="Daftar"
                                        variant="outline"
                                    />
                                </Link> */}
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
                        <IconHamburger className="size-6" />
                    </button>
                </div>
                <div className="overflow-hidden bg-amber-500 py-4 text-white">
                    <p className="animate-marquee whitespace-nowrap text-center text-sm xl:animate-none xl:whitespace-normal xl:text-center">
                        Saat ini website sedang dalam tahap maintenance guna
                        meningkatkan kualitas layanan. Kami mohon maaf apabila
                        masih terdapat bug atau ketidaknyamanan. Terima kasih
                        atas pengertian Anda.
                    </p>
                </div>
            </nav>
            <div className="h-[76px] bg-gradient-to-tr from-white to-yellow-50 md:h-[80px]" />

            {/* Drawer mobile */}
            <aside
                className={`fixed left-0 top-24 z-40 h-full w-72 transform bg-white shadow-lg transition-transform md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* User header */}
                <div className="flex items-center gap-3 border-b px-6 py-6">
                    <IconCirclePersonFill className="size-10 text-primary" />
                    <div>
                        <p className="text-sm text-gray-500">Selamat datang</p>
                        <p className="font-semibold text-gray-800">
                            {auth.user ? auth.user.name : 'Guest'}
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <ul className="mt-6 flex flex-col gap-2 px-6 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block rounded-lg px-4 py-2 transition ${
                                    isActive(link.href)
                                        ? 'bg-primary/10 font-semibold text-primary'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Auth actions */}
                <div className="px-6">
                    {auth.user ? (
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/profile"
                                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>

                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    handleLogout();
                                }}
                                className="rounded-lg bg-red-50 px-4 py-2 text-left text-red-600 hover:bg-red-100"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <NewPrimaryButton
                                variant="primary"
                                showIcon={false}
                                className="w-full !rounded-xl !py-2"
                            >
                                Masuk
                            </NewPrimaryButton>
                        </Link>
                    )}
                </div>
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
