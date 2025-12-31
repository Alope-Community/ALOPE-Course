import AccordionComponent from '@/Components/Accordion';
import SimpleBlogCardComponent from '@/Components/Cards/Blog';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import ModuleCardComponent from '@/Components/Cards/Module';
import TestimonialCard, {
    TestimonialCardProps,
} from '@/Components/Cards/Testimonial';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import { Blog } from '@/models/Blog';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';
import 'glider-js/glider.min.css';
import { IconChevronRight, IconCircleCheckFill } from 'justd-icons';

export default function LandingPage({
    courses,
    videos,
    modules,
    latestModule,
    blogs = [],
}: {
    courses: Course[];
    videos: Video[];
    modules: Module[];
    latestModule: Module;
    blogs: Blog[];
}) {
    const data: TestimonialCardProps[] = [
        {
            quote: 'Materinya runtut dan gampang dipahami. Sekarang aku jadi ngerti dasar Machine Learning.',
            name: 'Wahyu',
            role: 'Mahasiswa',
            avatar: '/images/ilham.jpg',
            rating: 5,
        },
        {
            quote: 'Awalnya belum pernah ngoding, tapi lewat modul web dev, aku bisa bikin web pertamaku!',
            name: 'Rina',
            role: 'Mahasiswa',
            avatar: '/images/ilham.jpg',
            rating: 5,
        },
        {
            quote: 'Belajarnya step by step, jadi konsep yang rumit terasa lebih mudah dipahami.',
            name: 'Tono',
            role: 'Mahasiswa',
            avatar: '/images/ilham.jpg',
            rating: 5,
        },
    ];
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
                    <div className="relative order-1 mt-10 hidden justify-center lg:order-2 lg:mt-0 lg:flex lg:w-1/2">
                        <div className="absolute right-[12%] top-4 h-[380px] w-[340px] rotate-[25deg] rounded-3xl bg-primary blur-[1px] md:h-[460px] md:w-[420px] lg:right-[16%]" />
                        <div className="absolute right-[5%] top-0 h-[400px] w-[360px] rounded-3xl bg-[#51a2ff] md:h-[467px] md:w-[440px] lg:right-[10%]" />
                        <img
                            src="/images/header1.png"
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
            <section className="relative bg-white py-10">
                <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-4 md:flex-row md:items-center md:px-10 xl:px-20">
                    <div className="flex w-full justify-center md:w-1/2">
                        <div className="relative">
                            <img
                                src="/images/header.png"
                                alt="student"
                                className="w-full max-w-sm object-contain md:max-w-md"
                            />
                        </div>
                    </div>

                    {/* Kontainer teks */}
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
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
                                <li
                                    key={i}
                                    className="flex items-center justify-center gap-3 md:justify-start"
                                >
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
                <div className="container mx-auto px-8 py-8">
                    <div className="mb-8">
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
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {courses.slice(0, 3).map((course, index) => (
                            <CourseCardComponent key={index} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section popular modules */}
            <section className="bg-white">
                <div className="container mx-auto px-8 py-8">
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
                            href="/blogs"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Lihat Semua
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className={
                                    index >= 2 ? 'md:hidden lg:block' : ''
                                }
                            >
                                <ModuleCardComponent props={module} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Blog */}
            <section className="bg-white">
                <div className="container mx-auto px-8 py-8">
                    <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-primary">
                                FROM OUR BLOG
                            </p>
                            <h2 className="mt-1 text-4xl font-bold leading-tight text-gray-900">
                                Cerita, Tren, dan Insight <br />
                                Seputar Dunia Tech
                            </h2>
                        </div>

                        <Link
                            href="/blogs"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.slice(0, 3).map((blog, index) => (
                            <div
                                key={index}
                                className={
                                    index >= 2 ? 'md:hidden lg:block' : ''
                                }
                            >
                                <SimpleBlogCardComponent props={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sextion What They Say */}
            <section className="bg-white">
                <div className="container mx-auto px-8 py-8">
                    <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-primary">
                                WHAT THEY SAY
                            </p>
                            <h2 className="mt-1 text-4xl font-bold leading-tight text-gray-900">
                                Apa Kata Mereka yang <br />
                                Sudah Belajar
                            </h2>
                        </div>

                        <Link
                            href="/blogs"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className={i >= 2 ? 'md:hidden lg:block' : ''}
                            >
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section FAQ */}
            <section className="bg-white">
                <div className="container mx-auto grid grid-cols-1 gap-10 px-8 py-8 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Frequently Asked Questions
                        </p>

                        <h2 className="mt-2 text-4xl font-bold leading-snug text-gray-900">
                            Hal-hal yang Sering Kamu
                            <br />
                            Tanyakan
                        </h2>
                    </div>

                    <div className="w-full">
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
            </section>

            <FooterComponent />
        </>
    );
}
