import SimpleModuleCardComponent from '@/Components/Cards/SimpleModule';
import { Module } from '@/models/Module';
import { formatDateWithTime } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';

export default function SideModulesSection({ modules }: { modules: Module[] }) {
    return (
        <aside className="relative hidden lg:block">
            <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                <span className="text-gray-500">// </span> Modul Terbaru
            </h3>
            {modules.map(
                (module, index) =>
                    index < 5 && (
                        <div
                            key={index}
                            className="mb-5 pl-4 text-sm xl:text-base"
                        >
                            <div className="flex gap-2 text-sm">
                                <p
                                    className="font-semibold text-[#2276f0]"
                                    title={module.course.title}
                                >
                                    {strLimit(module.course.title, 15)}
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    {formatDateWithTime(
                                        module.created_at || '',
                                    )}
                                </p>
                            </div>
                            <Link
                                href={`/modules/${module.slug}`}
                                className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2"
                            >
                                {module.title}
                            </Link>
                        </div>
                    ),
            )}

            {/*  */}

            <section className="sticky top-24">
                <h3 className="my-7 text-xl font-bold">
                    <span className="text-gray-500">// </span> Sorotan
                </h3>
                {modules.map(
                    (module, index) =>
                        index < 2 && (
                            <SimpleModuleCardComponent
                                key={index}
                                props={module}
                            />
                        ),
                )}
            </section>
        </aside>
    );
}
