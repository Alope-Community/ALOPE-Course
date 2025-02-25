import { Link, usePage } from '@inertiajs/react';

export default function NavbarComponent() {
    const { url } = usePage();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Article', href: '/articles' },
        { name: 'Video', href: '/videos' },
    ];

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-3 shadow backdrop-blur-lg md:px-10 md:py-5 xl:px-0">
            <div className="container mx-auto flex justify-between">
                <div>
                    <p className="text-xl font-bold md:text-2xl">ALOPE</p>
                </div>
                <div>
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
                    <button className="flex md:hidden">
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
            </div>
        </nav>
    );
}
