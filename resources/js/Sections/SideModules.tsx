import { Module } from '@/models/Module';
import { formatDate } from '@/tools/formatDate';
import { Link } from '@inertiajs/react';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';

export default function SideModulesSection({ modules }: { modules: Module[] }) {
    return (
        <aside className="relative hidden lg:block">
            <h3 className="mb-7 font-bold sm:text-xl md:text-2xl">
                Materi Terkait
            </h3>

            {modules.slice(0, 5).map((module, index) => (
                <Link href={`/modules/${module.slug}`}>
                    <div
                        key={index}
                        className="
                        p-4 mb-5 rounded-2xl border border-gray-300
                        flex flex-col gap-3
                    "
                    >
                        {/* META INFO */}
                        <div
                            className="
                            flex flex-wrap gap-x-5 gap-y-2
                            text-xs
                        "
                        >
                            <p className="flex items-center gap-1">
                                <IconCalendar />
                                <span className="text-gray-700 font-semibold">
                                    {formatDate(module.created_at || '')}
                                </span>
                            </p>

                            <p className="flex items-center gap-1">
                                <IconClock />
                                <span className="text-gray-700 font-semibold">
                                    3 Menit
                                </span>
                            </p>

                            <p className="flex items-center gap-1">
                                <IconEye />
                                <span className="text-gray-700 font-semibold">
                                    200 Views
                                </span>
                            </p>
                        </div>

                        {/* TITLE */}
                        <div
                            className="
                            font-semibold
                            text-base
                        "
                        >
                            <p>{module.title}</p>
                        </div>

                        {/* DESCRIPTION */}
                        <div
                            className="
                            text-gray-500 text-sm line-clamp-2
                        "
                        >
                            <p>{module.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </aside>
    );
}
