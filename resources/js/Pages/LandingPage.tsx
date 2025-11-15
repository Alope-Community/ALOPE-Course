import AccordionComponent from '@/Components/Accordion';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import ModuleCardComponent from '@/Components/Cards/Module';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';
import 'glider-js/glider.min.css';
import { IconChevronRight, IconCircleCheckFill } from 'justd-icons';
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

            <header className="relative min-h-[800px] overflow-hidden bg-gradient-to-tr from-white to-yellow-50 pt-16">
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-4 py-10 md:px-10 lg:flex-row">
                    <div className="order-2 lg:order-1 lg:w-1/2">
                        <h1 className="mb-4 text-center text-3xl font-bold leading-snug text-black md:text-4xl lg:text-left xl:text-6xl">
                            Tingkatkan{' '}
                            <span className="text-primary">Skill Coding</span>{' '}
                            <br className="hidden lg:block" />
                            dari Nol hingga Mahir!
                        </h1>

                        <p className="mx-auto mb-6 mt-3 w-full text-center text-sm text-grey md:mx-0 md:mb-10 md:w-[90%] md:text-base lg:text-left xl:w-[85%] xl:text-xl">
                            Belajar coding dari nol hingga mahir dengan panduan
                            lengkap, materi terstruktur, dan artikel mendalam
                            yang membantumu meningkatkan skill programming
                            secara efektif.
                        </p>

                        <div className="mt-2 flex justify-center gap-5 lg:justify-start xl:mt-14">
                            <NewPrimaryButton
                                text="Mulai Belajar Sekarang"
                                circleIcon
                                showIcon
                            />
                        </div>
                    </div>
                    <div className="relative order-1 mt-10 flex justify-center lg:order-2 lg:mt-0 lg:w-1/2">
                        <div className="absolute right-[12%] top-4 h-[380px] w-[340px] rotate-[25deg] rounded-3xl bg-primary blur-[1px] md:h-[460px] md:w-[420px] lg:right-[16%]" />
                        <div className="absolute right-[5%] top-0 h-[400px] w-[360px] rounded-3xl bg-blue-200/100 md:h-[467px] md:w-[440px] lg:right-[10%]" />
                        <img
                            src="/images/header.png"
                            alt="Belajar coding"
                            className="relative z-10 w-[80%] max-w-[400px] object-contain md:w-[70%] lg:w-[85%]"
                            loading="lazy"
                        />
                        <div className="absolute left-[10%] top-10 z-20 flex translate-x-6 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[12%] md:translate-x-8 lg:left-[14%] lg:translate-x-10">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-yellow-400 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3"
                                >
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey">
                                Effective Learning
                            </span>
                        </div>
                        <div className="absolute bottom-20 left-[8%] z-20 flex translate-x-8 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[10%] md:translate-x-10 lg:left-[12%] lg:translate-x-12">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3"
                                >
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey">
                                Upgrade Skill
                            </span>
                        </div>
                        <div className="absolute bottom-8 right-6 flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:right-8 lg:right-10">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3"
                                >
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey">
                                Learn by Doing
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section belajar coding */}
            <section className="relative bg-white py-20">
                <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-4 md:flex-row md:items-center md:px-10 xl:px-20">
                    <div className="flex w-full justify-center md:w-1/2">
                        <div className="relative">
                            <img
                                src="/images/header.png"
                                alt="student"
                                className="relative z-10 w-[400px] rounded-3xl"
                            />
                            <div className="absolute bottom-0 left-8 right-0 top-8 z-0 rounded-3xl bg-blue-400" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Why Choose Us
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                            Belajar Coding dengan <br /> Pendekatan yang Tepat
                        </h2>

                        <ul className="mt-6 space-y-3 text-grey">
                            {[
                                'Materi Terarah & Terstruktur',
                                'Fokus pada Konsep Dasar',
                                'Fleksibel & Ramah Pemula',
                                'Komunitas yang Mendukung',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <IconCircleCheckFill className="size-5 text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <NewPrimaryButton
                                text="Mulai Belajar Sekarang"
                                circleIcon
                                showIcon
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section semuua module */}
            <section className="bg-white py-10">
                <div className="mx-auto px-4 md:px-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Choose Your Path
                    </p>

                    <h2 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl">
                        Pilih Jalur Pembelajaran
                    </h2>
                    <h2 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl">
                        Sesuai Minatmu
                    </h2>
                </div>

                <div className="container mx-auto mt-8 px-4">
                    <div className="grid grid-cols-1 gap-6 md:ml-4 md:grid-cols-2 lg:ml-6 lg:grid-cols-3">
                        {courses.slice(0, 3).map((course, index) => (
                            <CourseCardComponent key={index} course={course} />
                        ))}
                    </div>
                </div>
            </section>

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

            <section className="relative mb-20 gap-10 bg-white px-3 md:px-10 xl:px-5 2xl:px-2">
                <div className="container mx-auto px-4">
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
                                    slidesToShow={3.5}
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
                        <div className="container mx-auto px-4 py-4">
                            <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                        Popular Courses
                                    </p>

                                    <div className="mt-1">
                                        <h2 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl">
                                            Materi Pembelajaran
                                        </h2>
                                        <h2 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-3xl">
                                            Terpopuler Saat Ini
                                        </h2>
                                    </div>
                                </div>
                                <Link
                                    href="/modules"
                                    className="flex items-center gap-1 rounded px-5 py-2 text-sm font-bold text-gray-800 duration-300 hover:gap-2 active:scale-95"
                                >
                                    {' '}
                                    Lihat Semua Modul{' '}
                                    <IconChevronRight className="size-7 text-primary" />{' '}
                                </Link>
                            </div>
                            {modules.length <= 4 ? (
                                <div className="flex flex-wrap gap-5">
                                    {modules.map((module, index) => (
                                        <div
                                            key={index}
                                            className="w-full max-w-sm"
                                        >
                                            <ModuleCardComponent
                                                props={module}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative">
                                    <Glider
                                        draggable
                                        slidesToShow={3.5}
                                        slidesToScroll={1}
                                        dragVelocity={1.5}
                                        responsive={[
                                            {
                                                breakpoint: 1536,
                                                settings: { slidesToShow: 4.5 },
                                            },
                                            {
                                                breakpoint: 1280,
                                                settings: { slidesToShow: 3.5 },
                                            },
                                            {
                                                breakpoint: 1024,
                                                settings: { slidesToShow: 2.8 },
                                            },
                                            {
                                                breakpoint: 768,
                                                settings: { slidesToShow: 1.5 },
                                            },
                                            {
                                                breakpoint: 480,
                                                settings: { slidesToShow: 1 },
                                            },
                                        ]}
                                    >
                                        {modules.map((module, index) => (
                                            <div
                                                key={index}
                                                className="w-full max-w-lg sm:w-[350px]"
                                            >
                                                <ModuleCardComponent
                                                    props={module}
                                                />
                                            </div>
                                        ))}
                                    </Glider>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
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
