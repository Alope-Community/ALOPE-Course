import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import HorizontalModuleCardComponent from '@/Components/Cards/HorizontalModule';
import { Container } from '@/Components/Container';
import { EmptyStateBox } from '@/Components/EmptyStateBox';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar/Navbar';
import Pagination from '@/Components/Pagination';
import { Module } from '@/models/Module';
import { PaginatedResponse } from '@/types/PaginateResponse';
import { Inertia, Method } from '@inertiajs/inertia';
import { Head, router, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
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

            <Container>

                <main className="relative z-20 w-full">

                    {/* <section className="col-span-4 pt-10 lg:col-span-3"> */}

                    <BannerHorizontalComponent />

                    <section className="my-10 min-h-[calc(100vh-600px)]">
                        {
                            modules.data.length > 0
                                ?
                                modules.data.map((module, index) => (
                                    <HorizontalModuleCardComponent
                                        key={index}
                                        props={module}
                                    />
                                ))
                                :
                                <EmptyStateBox
                                    title='Belum ada modul terbaru'
                                    description='Saat ini belum ada modul yang tersedia. Silahkan kembali lagi lagi nanti untuk melihat modul terbaru yang akan datang.'
                                />
                        }
                    </section>

                    {/* PAGINATION */}
                    <Pagination
                        currentPage={modules.current_page}
                        lastPage={modules.last_page}
                        nextPageUrl={modules.next_page_url}
                        prevPageUrl={modules.prev_page_url}
                        path={modules.path}
                    />

                    {/* </section */}

                    {/* <SideModulesSection modules={modules.data} /> */}

                </main>

            </Container>

            <FooterComponent />
        </>
    );
}
