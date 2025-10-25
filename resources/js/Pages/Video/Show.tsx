import AccordionComponent from '@/Components/Accordion';
import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import BreadcrumbComponent from '@/Components/Breadcrumb';
import ModuleCardComponent from '@/Components/Cards/Module';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Module } from '@/models/Module';
import { Video } from '@/models/Video';
import strLimit from '@/tools/strLimit';
import { Head, Link } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import Glider from 'react-glider';

export default function ShowVideoPage({
    video,
    videos,
    modules,
}: {
    video: Video;
    videos: Video[];
    modules: Module[];
}) {
    console.log(video);

    return (
        <>
            <Head title="Courses" />

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
                links={[
                    { title: 'Course', url: '/courses' },
                    {
                        title: strLimit(video.course.title, 7),
                        url: `/courses/${video.course.slug}`,
                    },
                    { title: 'Video', url: '/courses' },
                    {
                        title: strLimit(video.title, 5),
                        url: `/videos/${video.slug}`,
                        active: true,
                    },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-10 px-3 md:px-10 xl:px-5 2xl:px-2">
                <section className="relative grid gap-8 lg:grid-cols-7 xl:gap-10">
                    <div className="relative lg:col-span-2">
                        <div className="sticky top-24">
                            <div className="rounded bg-gradient-to-r from-[#5b8df3] to-[#307de9] p-5 text-white">
                                <h2 className="text-xl font-medium">
                                    {video.course.title}
                                </h2>
                                <div className="mt-3 flex justify-between text-xs text-gray-100">
                                    <p>{videos.length} Video</p>
                                    <p>Web Programming</p>
                                </div>
                            </div>
                            <div className="mt-5 hidden flex-col gap-1 overflow-hidden rounded bg-white/30 backdrop-blur lg:flex">
                                {videos.map((vid, index) => (
                                    <Link
                                        key={index}
                                        href={`/videos/${vid.slug}`}
                                        className={`${vid.slug == video.slug && 'border-l-2 border-[#5b8df3] bg-white/40'} px-3 py-2`}
                                    >
                                        <div className="flex cursor-pointer justify-between">
                                            <p>{`${index + 1}. ${vid.title}`}</p>
                                            <p>{vid.duration}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="overflow-hidden rounded border bg-white/30 p-1 shadow">
                            <iframe
                                width="560"
                                src={video.link}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="min-h-[230px] w-full sm:h-[400px] lg:h-[400px] 2xl:h-[600px]"
                            ></iframe>
                        </div>
                        <div className="mt-5 flex flex-col gap-1 overflow-hidden rounded bg-white/30 backdrop-blur lg:hidden">
                            {videos.map((vid, index) => (
                                <Link
                                    key={index}
                                    href={`/videos/${vid.slug}`}
                                    className={`${vid.slug == video.slug && 'border-l-2 border-[#5b8df3] bg-white/40'} px-3 py-2`}
                                >
                                    <div className="flex cursor-pointer justify-between">
                                        <p>{`${index + 1}. ${vid.title}`}</p>
                                        <p>{vid.duration}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-5 overflow-hidden rounded border bg-white/30 p-2 shadow">
                            <AccordionComponent
                                defaultActive={0}
                                data={[
                                    {
                                        title: 'Deskripsi Video',
                                        content: video.description,
                                    },
                                    {
                                        title: video.course.title,
                                        content: video.course.description,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <hr className="my-10 border border-gray-300" />

                <section>
                    {modules.length ? (
                        <>
                            <h2 className="mb-5 text-2xl font-bold">
                                Modul Terkait
                            </h2>
                            <Glider
                                draggable
                                slidesToShow={4.5}
                                slidesToScroll={1}
                                // hasArrows
                                dragVelocity={1.5}
                                responsive={[
                                    {
                                        breakpoint: 1536,
                                        settings: { slidesToShow: 4.5 },
                                    }, // Desktop
                                    {
                                        breakpoint: 1280,
                                        settings: { slidesToShow: 3.6 },
                                    }, // Desktop
                                    {
                                        breakpoint: 1024,
                                        settings: { slidesToShow: 2.8 },
                                    }, // Desktop
                                    {
                                        breakpoint: 768,
                                        settings: { slidesToShow: 2.3 },
                                    }, // Tablet
                                    {
                                        breakpoint: 375,
                                        settings: { slidesToShow: 1.3 },
                                    }, // Mobile
                                    {
                                        breakpoint: 100,
                                        settings: { slidesToShow: 1.1 },
                                    }, // Mobile
                                ]}
                            >
                                {modules.map((module, index) => (
                                    <ModuleCardComponent
                                        key={index}
                                        props={module}
                                    />
                                ))}
                            </Glider>
                        </>
                    ) : (
                        ''
                    )}

                    <div className="lg:col-span-7">
                        <BannerHorizontalComponent />
                    </div>
                </section>
            </main>

            <FooterComponent />
        </>
    );
}
