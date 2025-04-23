import AccordionComponent from '@/Components/Accordion';
import ArticleCardComponent from '@/Components/Cards/Article';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import { Course } from '@/models/Course';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import Glider from 'react-glider';

export default function LandingPage({
    courses,
    videos,
    articles,
}: {
    courses: Course[];
    videos: Video[];
    articles: Article[];
}) {
    return (
        <>
            <Head title="Welcome" />

            <NavbarComponent />

            <header className="relative min-h-[800px] pt-16">
                <img
                    src="/images/shapes/blueBlur1.svg"
                    alt="blue blur"
                    className="absolute left-0 top-0"
                    loading="lazy"
                />
                <img
                    src="/images/shapes/yellowBlur1.svg"
                    alt="blue blur"
                    className="absolute right-0 top-0"
                    loading="lazy"
                />
                <img
                    src="/images/shapes/purpleBlur1.svg"
                    alt="blue blur"
                    className="absolute -bottom-[400px] left-0"
                    loading="lazy"
                />
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-3 md:px-10 lg:flex-row xl:px-5 2xl:px-2">
                    <div className="order-2 lg:order-1 lg:w-1/2">
                        <h1 className="mb-4 text-center text-3xl font-medium leading-snug md:text-4xl lg:text-left xl:text-6xl">
                            Upgrade <br className="hidden lg:block" />
                            <span className="mt-3 block">
                                <span className="font-bold text-[#2276f0]">
                                    Skill Koding{' '}
                                </span>
                                disini!
                            </span>
                        </h1>
                        <p className="mx-auto mb-6 mt-3 w-full text-center text-sm text-gray-800 md:mx-0 md:mb-10 md:w-[90%] md:text-base lg:text-left xl:w-[85%] xl:text-xl">
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
                            alt="purple text"
                            className="absolute bottom-24 left-2 w-[120px] md:bottom-1/3 md:left-32 md:w-[170px] lg:hidden xl:left-24 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/shapes/yellowText.svg"
                            alt="yellow text"
                            className="absolute right-3 top-24 w-[110px] md:right-32 md:top-24 md:w-[150px] lg:hidden xl:right-20 xl:top-40 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/shapes/blueText.svg"
                            alt="blue text"
                            className="absolute bottom-[40%] right-4 w-[110px] md:bottom-28 md:right-36 md:w-[150px] lg:hidden xl:bottom-[40%] xl:right-32 xl:block xl:w-auto"
                            loading="lazy"
                        />
                        <img
                            src="/images/header.png"
                            alt="alope mascot"
                            className="mx-auto w-full md:w-[60%] lg:w-full"
                            width={760}
                            height={760}
                        />
                    </div>
                </div>
            </header>

            <section className="relative mb-20 gap-10 px-3 md:px-10 xl:px-5 2xl:px-2">
                <div className="container mx-auto">
                    {/* <div className="mb-20">
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
                        </div>
                    </div> */}

                    <div className="mb-10">
                        <div className="mb-5">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span> Lihat
                                Pelajaran-pelajaran untuk Upgrade Skill
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
                                {courses.map((course, index) => (
                                    <CourseCardComponent
                                        key={index}
                                        course={course}
                                    />
                                ))}
                            </Glider>
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
                                {articles.map((article, index) => (
                                    <ArticleCardComponent
                                        key={index}
                                        props={article}
                                    />
                                ))}
                            </Glider>
                            {/* <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100/0 to-gray-100 md:w-36"></div> */}
                        </div>
                    </div>
                </div>
                <img
                    src="/images/shapes/blueBlur2.svg"
                    className="absolute -bottom-96 right-0 -z-10"
                    loading="lazy"
                    alt="blue blur"
                />
                <img
                    src="/images/shapes/yellowBlur2.svg"
                    className="absolute -bottom-96 left-0 -z-10"
                    loading="lazy"
                    alt="yellow blur"
                />
            </section>

            <section className="container mx-auto my-20 px-3 md:px-10 xl:px-5 2xl:px-2">
                <section className="relative flex items-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#040924] to-gray-900 px-6 py-16 text-gray-100 after:absolute after:inset-0 after:z-10 after:bg-[#040924]/80 after:content-[''] md:px-10 lg:overflow-visible lg:after:hidden xl:px-14">
                    <div className="relative z-20 flex-1 text-center md:text-left">
                        <h3 className="mb-5 text-xl font-bold md:text-2xl xl:text-3xl">
                            Gabung "Bootcamp Bersama PBK", Perkuat Fundamental
                            Skill Web Programming
                        </h3>
                        <p className="mb-14 text-xs text-gray-200 md:text-sm xl:text-base">
                            Belajar dari Dasar hingga Mahir! Bergabunglah dengan
                            Bootcamp PBK untuk Memperkuat Fundamental Skill Web
                            Programming dan Siapkan Diri Menjadi Developer
                            Profesional!
                        </p>

                        <Link
                            href="/courses/lwd-pbk"
                            className="rounded-full bg-[#2276f0] px-5 py-2 text-sm font-bold text-white shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                        >
                            Mulai Belajar
                        </Link>
                    </div>
                    <div className="lg:flex-1">
                        <img
                            src="/images/rocket.svg"
                            alt="rocket"
                            className="absolute right-0 top-0 z-[1] size-[400px] md:-top-12 lg:top-0 lg:size-[450px] xl:-top-14"
                        />
                    </div>
                </section>
            </section>

            <section className="relative px-3 md:px-10 xl:px-5 2xl:px-2">
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
                    alt="purple blur"
                />
            </section>

            <FooterComponent />
        </>
    );
}
