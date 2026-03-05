import VideoCardComponent from '@/Components/Cards/Video';
import { Container } from '@/Components/Container';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { SubText } from '@/Components/SubText';
import { TitleText } from '@/Components/TitleText';
import { Video } from '@/models/Video';
import { PaginatedResponse } from '@/types/PaginateResponse';
import { Inertia, Method } from '@inertiajs/inertia';
import { Head, router, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { IconChevronLeft, IconChevronRight } from 'justd-icons';
import { useEffect, useState } from 'react';

export default function ModuleIndexPage({
    videos,
}: {
    videos: PaginatedResponse<Video>;
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
        router.visit(`${videos.path}?page=${page}`);
    };

    return (
        <>
            <Head title="modules" />

            <NavbarComponent />

            <Container>
                <div className="flex flex-col gap-5">
                    <SubText text="Watch and Learn" />
                    <TitleText text="Belajar Dengan Menonton" />
                </div>

                <section className="col-span-4 pt-10">
                    {/* <BannerHorizontalComponent /> */}
                    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {videos.data.map((video, index) => (
                            <VideoCardComponent
                                key={index}
                                course_name={video.course.title}
                                title={video.title}
                                video_duration={video.duration}
                                video_link={video.link}
                                category_name={video.course.category.name}
                                video_slug={video.slug}
                            />
                        ))}
                    </section>

                    {/*  */}

                    {/*  */}
                    <div className="mt-10 flex items-center justify-center gap-2">
                        {/* Tombol Previous */}
                        <button
                            onClick={() => goToPage(videos.prev_page_url)}
                            disabled={!videos.prev_page_url}
                            className="flex items-center rounded border bg-white/50 px-3 py-1 disabled:opacity-50"
                        >
                            <IconChevronLeft className="size-5" /> Prev
                        </button>

                        {/* Tombol Angka Halaman */}
                        {Array.from(
                            { length: videos.last_page },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPageNumber(page)}
                                className={`rounded border px-3 py-1 ${
                                    page === videos.current_page
                                        ? 'bg-[#4a86ef] text-white'
                                        : 'bg-white/50 text-gray-800 backdrop-blur-md'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Tombol Next */}
                        <button
                            onClick={() => goToPage(videos.next_page_url)}
                            disabled={!videos.next_page_url}
                            className="flex items-center rounded border bg-white/50 px-3 py-1 disabled:opacity-50"
                        >
                            Next <IconChevronRight className="size-5" />
                        </button>
                    </div>
                </section>
            </Container>

            <FooterComponent />
        </>
    );
}
