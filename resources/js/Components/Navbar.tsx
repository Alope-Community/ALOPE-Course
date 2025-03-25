import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function NavbarComponent() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Course', href: '/courses' },
        { name: 'Article', href: '/articles' },
        { name: 'Video', href: '/coming-soon' },
    ];

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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden gap-5 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${
                                        link.href === '/'
                                            ? url === '/' // Hanya aktif jika benar-benar di "/"
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
                </ul>
            </aside>

            {/* Overlay untuk menutup menu saat diklik di luar */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
