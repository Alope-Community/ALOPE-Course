import SimpleModuleCardComponent from '@/Components/Cards/SimpleModule';
import { Module } from '@/models/Module';
import { formatDate, formatDateWithTime } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';

export default function SideModulesSection({ modules }: { modules: Module[] }) {
    return (
        <aside className="relative hidden lg:block">
            <h3 className="mb-7 font-bold sm:text-xl md:text-2xl">
                Materi Terkait
            </h3>
            {modules.map(
                (module, index) =>
                    index < 5 && (
                        <div
                            key={index}
                            className="p-4 mb-5 rounded-2xl border border-gray-300 flex flex-col gap-3"
                        >
                            <div className="flex gap-5">
                                <p className="flex items-center gap-1 text-xs text-[#2276f0]">
                                    {/* <span className="italic underline">
                                                                alope.id/articles/{article.slug}
                                                                </span> */}
                                    <IconCalendar />
                                    <span className="text-gray-700 font-semibold">
                                        {formatDate(
                                            module.created_at || '',
                                        )}
                                    </span>
                                </p>
                                <p className="flex items-center gap-1 text-xs">
                                    <IconClock />
                                    <span className="text-gray-700 font-semibold">
                                        {/* STATIC */}
                                        3 Menit
                                    </span>
                                </p>
                                <p className="flex items-center gap-1 text-xs">
                                    <IconEye />
                                    <span className="text-gray-700 font-semibold">
                                        {/* STATIC */}
                                        200 Views
                                    </span>
                                </p>
                            </div>
                            
                            <div className="font-semibold">
                                <p>{module.title}</p>
                            </div>

                            <div className="text-gray-500 line-clamp-2 text-ellipsis text-sm">
                                <p>{module.description}</p>
                            </div>
                        </div>
                        // <div className="flex gap-2 text-sm">
                        //     <p
                        //         className="font-semibold text-[#2276f0]"
                        //         title={module.course.title}
                        //     >
                        //         {strLimit(module.course.title, 15)}
                        //     </p>
                        //     <p>&#128900;</p>
                        //     <p className="text-gray-500">
                        //         {formatDateWithTime(
                        //             module.created_at || '',
                        //         )}
                        //     </p>
                        // </div>
                        // <Link
                        //     href={`/modules/${module.slug}`}
                        //     className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2"
                        // >
                        //     {module.title}
                        // </Link>
                    ),
            )}

            {/*  */}

            {/* <section className="sticky top-24">
                <h3 className="my-7 sm:text-xl md:text-2xl font-bold">
                    Sorotan
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
            </section> */}
        </aside>
    );
}
