import { IconMail, IconMap, IconPilone } from 'justd-icons';

export default function FooterComponent() {
    return (
        <footer className="bg-primary pb-10 pt-16 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-10 px-4 md:px-10">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/Alope.png"
                                alt="Alope Logo"
                                className="h-10 w-10 object-contain"
                            />
                            <h3 className="text-2xl font-semibold">
                                Alope Course
                            </h3>
                        </div>
                        <p className="mt-3 text-lg leading-relaxed text-white/90">
                            Tempat belajar koding yang
                            <br />
                            menyenangkan!
                        </p>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <h4 className="mb-3 text-lg font-semibold">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/courses" className="hover:underline">
                                    Kursus
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Video
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <h4 className="mb-3 text-lg font-semibold">Kursus</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:underline">
                                    Kursus
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Video
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-2">
                        <h4 className="mb-3 text-lg font-semibold">Kontak</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <IconPilone className="w-4" /> 089123456789
                            </li>
                            <li className="flex items-center gap-2">
                                <IconMap className="w-4" /> Darma, Kuningan,
                                Jawa Barat
                            </li>
                            <li className="flex items-center gap-2">
                                <IconMail className="w-4" /> contact@alope.id
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 md:px-10">
                    <hr className="my-10 border border-white/30" />
                </div>

                <div className="px-4 md:px-10">
                    <p className="text-sm text-white/90">
                        Copyright 2025 by Alope. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
