import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import BreadcrumbComponent from '@/Components/Breadcrumb';
import HorizontalModuleCardComponent from '@/Components/Cards/HorizontalModule';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Module } from '@/models/Module';
import SideModulesSection from '@/Sections/SideModules';
import { PaginatedResponse } from '@/types/PaginateResponse';
import { Inertia, Method } from '@inertiajs/inertia';
import { Head, router, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { IconChevronLeft, IconChevronRight } from 'justd-icons';
import { useEffect, useState } from 'react';

export default function ArticleIndexPage({
    modules,
}: {
    modules: PaginatedResponse<Module>;
}) {
    const { props } = usePage();
    const searchQuery = (props as any).search || ''; // Ambil search dari props
    const [query, setQuery] = useState(searchQuery);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            Inertia.visit(route('modules.index'), {
                method: Method.GET,
                data: { q: query },
                preserveState: true,
                preserveScroll: true,
                replace: true,
                only: ['modules'], // Pastikan ini sesuai dengan nama di backend
            });
        }
    };

    useEffect(() => {
        setQuery(searchQuery); // Pastikan query tetap sinkron
        console.log('search q', searchQuery);
    }, [searchQuery]);

    //
    const goToPage = (url: string | null) => {
        if (url) {
            router.visit(url);
        }
    };

    const goToPageNumber = (page: number) => {
        router.visit(`${modules.path}?page=${page}`);
    };

    return (
        <>
            <Head title="modules" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur2.svg"
                alt="blueBlur"
                className="absolute right-0 top-0 hidden xl:block"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt="purpleBlur"
                className="absolute -top-52 left-0 hidden xl:block"
                loading="lazy"
            />

            <BreadcrumbComponent
                links={[{ title: 'Modules', url: '/modules', active: true }]}
            />

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="col-span-4 lg:col-span-3">
                    <BannerHorizontalComponent />
                    <section>
                        {modules.data.map((module, index) => (
                            <HorizontalModuleCardComponent
                                key={index}
                                props={module}
                            />
                        ))}
                    </section>

                    {/*  */}
                    <div className="mt-10 flex items-center justify-center gap-2">
                        {/* Tombol Previous */}
                        <button
                            onClick={() => goToPage(modules.prev_page_url)}
                            disabled={!modules.prev_page_url}
                            className="flex items-center rounded border bg-white/50 px-3 py-1 disabled:opacity-50"
                        >
                            <IconChevronLeft className="size-5" /> Prev
                        </button>

                        {/* Tombol Angka Halaman */}
                        {Array.from(
                            { length: modules.last_page },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPageNumber(page)}
                                className={`rounded border px-3 py-1 ${
                                    page === modules.current_page
                                        ? 'bg-[#4a86ef] text-white'
                                        : 'bg-white/50 text-gray-800 backdrop-blur-md'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Tombol Next */}
                        <button
                            onClick={() => goToPage(modules.next_page_url)}
                            disabled={!modules.next_page_url}
                            className="flex items-center rounded border bg-white/50 px-3 py-1 disabled:opacity-50"
                        >
                            Next <IconChevronRight className="size-5" />
                        </button>
                    </div>
                </section>
                <SideModulesSection modules={modules.data} />
            </main>

            <FooterComponent />
        </>
    );
}
