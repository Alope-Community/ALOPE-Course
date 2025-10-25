import AccordionComponent from '@/Components/Accordion';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import ModuleCardComponent from '@/Components/Cards/Module';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { IconChevronRight } from 'justd-icons';
import Glider from 'react-glider';

export default function LandingPage({
    courses,
    videos,
    modules,
    latestModule,
}: {
    courses: Course[];
    videos: Video[];
    modules: Module[];
    latestModule: Module;
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
                                href="/modules"
                                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#2276f0] shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Explore
                            </Link> */}
                            <Link
                                href="/modules"
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

            {/* <section className="mb-20 px-3 md:px-10 xl:px-5 2xl:px-2">
                <div className="container relative mx-auto overflow-hidden p-1">
                    <span className="absolute -right-[70px] top-4 inline-block w-[200px] rotate-45 bg-red-500 p-2 text-center text-xs font-semibold text-gray-100 sm:-right-[50px] sm:top-7 sm:p-3 sm:text-sm lg:-left-[50px] lg:right-auto lg:-rotate-45 lg:text-base xl:top-6">
                        Artikel Baru
                    </span>
                    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden rounded-xl">
                        <div className="h-full w-full animate-scale-pulse bg-purple-300 blur-xl"></div>
                    </div>
                    <div className="grid grid-cols-1 items-center gap-5 rounded-lg border border-[#673ef0] bg-white/90 p-5 lg:grid-cols-2 xl:gap-10">
                        <div className="hidden h-full lg:block">
                            <img
                                src={latestArticle.cover}
                                alt="cover latest article"
                                className="h-full rounded-md"
                            />
                        </div>
                        <div className="text-gray-900">
                            <p className="mb-1 text-sm font-bold text-[#663399] lg:mt-7 xl:text-base">
                                {latestArticle.course.title}
                            </p>
                            <h4 className="text-xl font-bold xl:text-3xl">
                                {latestArticle.title}
                            </h4>
                            <div className="mb-5 mt-2 flex gap-5 text-gray-600">
                                <p className="flex items-center gap-1 text-xs xl:text-base">
                                    <IconCalendar2Fill />
                                    {diffForHumans(
                                        latestArticle.created_at || '',
                                    )}
                                </p>
                                <p className="flex items-center gap-1 text-xs xl:text-base">
                                    <IconEyeFill />
                                    {latestArticle.reads.length}
                                </p>
                            </div>
                            <p className="mb-5 hidden text-sm text-gray-700 sm:mb-3 sm:block xl:mb-7 xl:text-base">
                                {latestArticle.description}
                            </p>
                            <p className="mb-5 block text-sm text-gray-700 sm:mb-3 sm:hidden xl:mb-7 xl:text-base">
                                {strLimit(latestArticle.description, 150)}
                            </p>

                            <div className="items-center justify-between sm:flex lg:mb-7">
                                <div className="mb-5 flex items-center gap-3 sm:mb-0">
                                    <div>
                                        <img
                                            src={latestArticle.writer.profile}
                                            alt="writer article"
                                            className="w-[50px] rounded-full border p-1 xl:w-[60px]"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            {latestArticle.writer.name}
                                        </p>
                                        <small className="-mt-1 block text-xs text-gray-700 sm:text-base">
                                            {latestArticle.writer.as}
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        href={`/modules/${latestArticle.slug}`}
                                        className="flex items-center justify-center gap-2 rounded bg-[#663399] px-4 py-2 text-sm text-gray-100 shadow hover:bg-[#663399]/80 active:scale-95 sm:inline-flex xl:px-8 xl:py-2.5 xl:text-base"
                                    >
                                        Lihat Artikel
                                        <IconChevronRight className="size-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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

                    {courses.length > 1 ? (
                        <div className="mb-10">
                            <div className="mb-5">
                                <h2 className="text-xl font-semibold md:text-2xl">
                                    <span className="text-gray-400">//</span>{' '}
                                    Lihat Pelajaran-pelajaran untuk Upgrade
                                    Skill
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
                    ) : (
                        ''
                    )}

                    <div className="mb-10">
                        <div className="mb-5 lg:flex lg:items-center lg:justify-between">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span>
                                Modul Terpopuler
                            </h2>
                            <Link
                                href="/modules"
                                className="flex items-center gap-1 rounded px-5 py-2 text-sm font-bold text-gray-800 duration-300 hover:gap-2 hover:shadow-[#673ef0] active:scale-95"
                            >
                                Lihat Semua Modul
                                <IconChevronRight className="size-7 text-[#2276f0]" />
                            </Link>
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
                                {modules.map((module, index) => (
                                    <ModuleCardComponent
                                        key={index}
                                        props={module}
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

            {/* <section className="container mx-auto my-20 px-3 md:px-10 xl:px-5 2xl:px-2">
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
            </section> */}

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
                        <AccordionComponent
                            data={[
                                {
                                    title: 'Apa itu ALOPE?',
                                    content:
                                        'ALOPE adalah sebuah komunitas programming yang memiliki visi untuk berbagi ilmu dan pengalaman seputar coding, dengan tujuan menciptakan lingkungan belajar yang inklusif dan mendukung bagi siapa saja yang ingin mengembangkan keterampilan di bidang pemrograman khususnya bagi pemula.',
                                },
                                {
                                    title: 'Apa keunggulan belajar di ALOPE?',
                                    content:
                                        'Keunggulan belajar di ALOPE adalah tersedianya berbagai artikel tutorial yang dilengkapi dengan video pembelajaran interaktif serta soal berbasis studi kasus untuk mengasah pemahaman secara langsung. Selain itu, ALOPE juga memiliki komunitas aktif di Discord, di mana para anggota dapat berdiskusi, berbagi ilmu, dan saling membantu dalam perjalanan belajar coding mereka.',
                                },
                                {
                                    title: 'Apa saja bahasa pemrograman yang diajarkan?',
                                    content:
                                        'Saat ini, ALOPE fokus mengajarkan web programming, termasuk HTML, CSS, JavaScript, serta framework seperti React dan Laravel. Namun, kami terbuka untuk berkembang ke bidang lain seperti IoT atau mobile development. Jika Anda memiliki keahlian di bidang tersebut dan tertarik untuk berbagi ilmu, kami mengundang Anda untuk bergabung sebagai mentor dan membantu lebih banyak orang belajar!',
                                },
                                {
                                    title: 'Apakah saya perlu memiliki pengalaman sebelumnya untuk mulai belajar?',
                                    content:
                                        'Tidak perlu! Kami menyediakan materi yang dirancang untuk pemula dari nol, tetapi juga tersedia materi lanjutan bagi yang sudah memiliki pengalaman.',
                                },
                            ]}
                        />
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
