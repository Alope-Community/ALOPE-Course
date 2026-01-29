import { Course } from '@/models/Course';
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Link, usePage } from '@inertiajs/react';
import { IconDevicePhone, IconLocation, IconMail } from 'justd-icons';

type PageProps = InertiaPageProps & {
    courses?: Course[];
};
export default function FooterComponent() {
    const { courses } = usePage<PageProps>().props;

    return (
        <footer className="overflow-x-hidden bg-primary pb-10 pt-16 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-10 px-4 text-center md:grid-cols-12 md:px-10 md:text-left lg:px-14 xl:px-0">
                    <div className="flex flex-col items-center md:col-span-5 md:items-start">
                        <div className="flex items-center justify-center gap-2 md:justify-start">
                            <img
                                src="/images/logo/alope-white.png"
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
                    <div className="flex flex-col items-center md:col-span-2 md:items-start">
                        <h4 className="mb-3 text-lg font-semibold">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/courses"
                                    className="hover:underline"
                                >
                                    Kursus
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/modules"
                                    className="hover:underline"
                                >
                                    Modul
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/videos"
                                    className="hover:underline"
                                >
                                    Video
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:col-span-2 md:items-start">
                        <h4 className="mb-3 text-lg font-semibold">Kursus</h4>
                        <ul className="space-y-2 text-sm">
                            {courses?.map((course) => (
                                <li key={course.id}>
                                    <Link
                                        href={`/courses/${course.slug}`}
                                        className="hover:underline"
                                    >
                                        {course.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:col-span-3 md:items-start">
                        <h4 className="mb-3 text-lg font-semibold">Kontak</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-center gap-2 md:justify-start">
                                <IconDevicePhone className="w-4" /> 083816934293
                            </li>
                            <li className="flex items-center justify-center gap-2 md:justify-start">
                                <IconLocation className="w-4" /> Darma,
                                Kuningan, Jawa Barat
                            </li>
                            <li className="flex items-center justify-center gap-2 md:justify-start">
                                <IconMail className="w-4" /> cs@alope.id
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 md:px-10 lg:px-14 xl:px-0">
                    <hr className="my-10 border border-white/30" />
                </div>

                <div className="px-4 text-center md:px-10 md:text-left lg:px-14 xl:px-0">
                    <p className="text-sm text-white/90">
                        Copyright 2025 by Alope. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
