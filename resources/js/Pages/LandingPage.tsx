import AccordionComponent from '@/Components/Accordion';
import CardComponent from '@/Components/Card';
import VideoCardComponent from '@/Components/Cards/Video';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import Glider from 'react-glider';

export default function LandingPage({ videos }: { videos: Video[] }) {
    return (
        <>
            <Head title="Welcome" />

            <NavbarComponent />

            <header className="relative min-h-[800px] pt-16">
                <img
                    src="/images/shapes/blueBlur1.svg"
                    alt=""
                    className="absolute left-0 top-0"
                    loading="lazy"
                />
                <img
                    src="/images/shapes/yellowBlur1.svg"
                    alt=""
                    className="absolute right-0 top-0"
                    loading="lazy"
                />
                <img
                    src="/images/shapes/purpleBlur1.svg"
                    alt=""
                    className="absolute -bottom-[400px] left-0"
                    loading="lazy"
                />
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-3 md:px-10 lg:flex-row xl:px-0">
                    <div className="order-2 lg:order-1 lg:w-1/2">
                        <h1 className="mb-4 text-center text-3xl font-semibold leading-snug md:text-4xl lg:text-left xl:text-6xl">
                            Upgrade <br className="hidden lg:block" />
                            <span className="font-bold text-[#2276f0]">
                                Skill Koding{' '}
                            </span>
                            disini!
                        </h1>
                        <p className="mx-auto mb-6 mt-3 w-full text-center text-sm md:mx-0 md:mb-10 md:w-[90%] md:text-base lg:text-left xl:w-[85%] xl:text-xl">
                            Belajar coding dari nol hingga mahir dengan panduan
                            lengkap, materi terstruktur, dan artikel mendalam
                            yang membantumu meningkatkan skill programming
                            secara efektif.
                        </p>
                        <div className="mt-2 flex justify-center gap-5 lg:justify-start xl:mt-14">
                            {/* <a
                                href=""
                                className="rounded-full bg-[#2276f0] px-5 py-2 text-sm font-bold text-white shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Subscribe Gratis
                            </a>
                            <Link
                                href="/articles"
                                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#2276f0] shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Explore
                            </Link> */}
                            <Link
                                href="/articles"
                                className="rounded-full bg-[#2276f0] px-5 py-2 text-sm font-bold text-white shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Explore Gratis
                            </Link>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 lg:w-1/2">
                        <img
                            src="/images/shapes/purpleText.svg"
                            alt=""
                            className="absolute bottom-24 left-2 w-[120px] md:bottom-1/3 md:left-32 md:w-[170px] lg:hidden xl:left-24 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/shapes/yellowText.svg"
                            alt=""
                            className="absolute right-3 top-24 w-[110px] md:right-32 md:top-24 md:w-[150px] lg:hidden xl:right-20 xl:top-40 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/shapes/blueText.svg"
                            alt=""
                            className="absolute bottom-[40%] right-4 w-[110px] md:bottom-28 md:right-36 md:w-[150px] lg:hidden xl:bottom-[40%] xl:right-32 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/header.png"
                            alt=""
                            className="mx-auto w-full md:w-[60%] lg:w-full"
                        />
                    </div>
                </div>
            </header>

            <section className="relative mb-20 gap-10 px-3 md:px-10 xl:px-0">
                <div className="container mx-auto">
                    <div className="mb-20">
                        <div className="mb-5">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span> Tonton
                                Video Tutorial Seputar Programming
                            </h2>
                        </div>
                        <div className="relative">
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
                                        settings: { slidesToShow: 4.2 },
                                    }, // Desktop
                                    {
                                        breakpoint: 1024,
                                        settings: { slidesToShow: 3.3 },
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
                                {videos.map((video, index) => (
                                    <div key={index}>
                                        <VideoCardComponent
                                            title={video.title}
                                            video_link={video.link}
                                            course_name={video.course.title}
                                            total_video_course={
                                                video.course.videos.length
                                            }
                                        />
                                    </div>
                                ))}
                            </Glider>
                            {/* <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-r from-gray-100/0 to-white/90 md:w-36"></div> */}
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="mb-5">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span>{' '}
                                Temukan Artikel Menarik Seputar Programming
                            </h2>
                        </div>
                        <div className="relative">
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
                                        settings: { slidesToShow: 4.2 },
                                    }, // Desktop
                                    {
                                        breakpoint: 1024,
                                        settings: { slidesToShow: 3.3 },
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
                                {/* <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                />
                                <CardComponent
                                    type="article"
                                    addedClass="mr-5"
                                /> */}
                                <CardComponent type="article" />
                            </Glider>
                            {/* <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100/0 to-gray-100 md:w-36"></div> */}
                        </div>
                    </div>
                </div>
                <img
                    src="/images/shapes/blueBlur2.svg"
                    className="absolute -bottom-96 right-0 -z-10"
                    loading="lazy"
                />
                <img
                    src="/images/shapes/yellowBlur2.svg"
                    className="absolute -bottom-96 left-0 -z-10"
                    loading="lazy"
                />
            </section>

            <section className="relative px-3 md:px-10 xl:px-0">
                <div className="container mx-auto flex flex-col items-center lg:flex-row">
                    <div className="hidden flex-1 lg:block">
                        <img
                            src="/images/about.svg"
                            alt="About 3D"
                            loading="eager"
                        />
                    </div>
                    <div className="w-full lg:flex-1">
                        <h3 className="mb-5 px-2 text-3xl font-bold">FAQs</h3>
                        <AccordionComponent />
                    </div>
                </div>

                <img
                    src="/images/shapes/purpleBlur2.svg"
                    className="absolute -bottom-64 left-0 -z-10 md:-bottom-96"
                    loading="lazy"
                />
            </section>

            <FooterComponent />
        </>
    );
}
