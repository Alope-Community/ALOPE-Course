import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import HorizontalModuleCardComponent from '@/Components/Cards/HorizontalModule';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar/Navbar';
import Pagination from '@/Components/Pagination';
import { Module } from '@/models/Module';
import { PaginatedResponse } from '@/types/PaginateResponse';
import { Inertia, Method } from '@inertiajs/inertia';
import { Head, router, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { IconChevronLeft, IconChevronRight } from 'justd-icons';
import { useEffect, useState } from 'react';

export default function ModuleIndexPage({
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

            <main className="container relative z-20 mx-auto mb-20 mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="col-span-4 pt-10 lg:col-span-3">
                    <BannerHorizontalComponent />
                    <section>
                        {modules.data.map((module, index) => (
                            <HorizontalModuleCardComponent
                                key={index}
                                props={module}
                            />
                        ))}
                    </section>

                    {/* PAGINATION */}
                    <Pagination
                        currentPage={modules.current_page}
                        lastPage={modules.last_page}
                        nextPageUrl={modules.next_page_url}
                        prevPageUrl={modules.prev_page_url}
                        path={modules.path}
                    />

                </section>
                {/* <SideModulesSection modules={modules.data} /> */}
            </main>

            <FooterComponent />
        </>
    );
}
