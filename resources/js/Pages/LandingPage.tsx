import AccordionComponent from '@/Components/Accordion';
import BodySecondaryText from '@/Components/BodySecondaryText';
import SimpleBlogCardComponent from '@/Components/Cards/Blog';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import ModuleCardComponent from '@/Components/Cards/Module';
import TestimonialCardComponent from '@/Components/Cards/Testimonial';
import { EmptyStateBox } from '@/Components/EmptyStateBox';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar/Navbar';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import LoginPopupComponent from '@/Components/PopUp/LoginPopup';
import { SubText } from '@/Components/SubText';
import { TitleText } from '@/Components/TitleText';
import { Blog } from '@/models/Blog';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Testimonial } from '@/models/Testimonial';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';
import 'glider-js/glider.min.css';
import { IconBookOpen, IconCircleCheckFill, IconSend3 } from 'justd-icons';
import { useState } from 'react';

export default function LandingPage({
    courses,
    videos,
    modules,
    latestModule,
    blogs = [],
    testimonials = [],
}: {
    courses: Course[];
    videos: Video[];
    modules: Module[];
    latestModule: Module;
    blogs: Blog[];
    testimonials: Testimonial[];
}) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className="bg-white">
            <Head title="Welcome" />

            <NavbarComponent onLoginClick={() => setIsLoginOpen(true)} />

            <LoginPopupComponent
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />

            <header className="relative min-h-[800px] overflow-hidden bg-gradient-to-tr from-white to-yellow-50 pt-20 md:pt-16">
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-4 py-10 text-center md:px-10 lg:px-14 lg:text-left xl:flex-row xl:px-0">
                    <div className="order-2 flex w-full flex-col gap-10 px-3 text-center sm:w-3/4 sm:px-0 xl:order-1 xl:w-1/2 xl:text-left">
                        <h1 className="font-spartan text-[40px] font-medium leading-tight md:text-5xl xl:text-6xl">
                            Tingkatkan Skill Coding dari Nol hingga Mahir!
                        </h1>

                        <BodySecondaryText
                            text="Belajar coding dari nol hingga mahir dengan panduan
                            lengkap, materi terstruktur, dan artikel mendalam
                            yang membantumu meningkatkan skill programming
                            secara efektif."
                        />

                        <div className="flex justify-center xl:justify-start">
                            <Link href="/courses">
                                <NewPrimaryButton
                                    text="Mulai Belajar Sekarang"
                                    circleIcon
                                    showIcon
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="relative order-1 mt-10 hidden w-[70%] justify-center lg:mt-0 lg:flex xl:order-2 xl:w-1/2">
                        <img
                            src="/images/header.png"
                            alt="Belajar coding"
                            className="relative z-10 object-cover md:w-[70%] md:object-contain lg:object-cover xl:h-auto xl:w-[85%] xl:max-w-[600px] xl:object-contain"
                            loading="lazy"
                        />
                        <div className="absolute left-[10%] top-10 z-20 flex translate-x-6 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[12%] md:translate-x-8 lg:left-[10%] lg:top-8 lg:translate-x-6 lg:gap-1 lg:px-2 lg:py-1 xl:left-[4%] xl:top-36 xl:translate-x-10 xl:gap-2 xl:px-3 xl:py-1.5 2xl:left-[14%]">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-yellow-400 text-white lg:h-4 lg:w-4 xl:h-5 xl:w-5">
                                <IconSend3 className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3 xl:w-3" />
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey lg:text-[10px] xl:text-xs">
                                Effective Learning
                            </span>
                        </div>
                        <div className="absolute bottom-20 left-[8%] z-20 flex translate-x-8 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[10%] md:translate-x-10 lg:bottom-20 lg:left-[5%] lg:translate-x-6 lg:gap-1 lg:px-2 lg:py-1 xl:bottom-28 xl:left-[12%] xl:translate-x-12 xl:gap-2 xl:px-3 xl:py-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600 text-white lg:h-4 lg:w-4 xl:h-5 xl:w-5">
                                <IconSend3 className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3 xl:w-3" />
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey lg:text-[10px] xl:text-xs">
                                Upgrade Skill
                            </span>
                        </div>
                        <div className="absolute bottom-12 right-6 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:right-8 lg:bottom-8 lg:right-6 lg:gap-1 lg:px-2 lg:py-1 xl:bottom-24 xl:right-10 xl:gap-2 xl:px-3 xl:py-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-white lg:h-4 lg:w-4 xl:h-5 xl:w-5">
                                <IconBookOpen className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3 xl:w-3" />
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey lg:text-[10px] xl:text-xs">
                                Learn by Doing
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section belajar coding */}
            <section className="py-10">
                <div className="container mx-auto px-4 py-4 md:px-10 xl:px-20">
                    <div className="hidden w-[90%] sm:block lg:hidden">
                        <SubText text="Why Choose Us" />
                        <TitleText text="Belajar Coding dengan Pendekatan yang Tepat" />
                    </div>
                    <div className="flex flex-col items-center gap-12 md:flex-row md:items-center">
                        <div className="flex w-full justify-center md:w-1/2">
                            <div className="">
                                <img
                                    src="/images/why-choose-us.png"
                                    alt="student"
                                    className="w-full max-w-sm object-contain md:max-w-md"
                                />
                            </div>
                        </div>

                        {/* Kontainer teks */}
                        <div className="flex w-full flex-col items-center gap-5 text-center md:w-1/2 md:items-start md:text-left">
                            <div className="block sm:hidden lg:block">
                                <SubText text="Why Choose Us" />
                                <TitleText text="Belajar Coding dengan Pendekatan yang Tepat" />
                            </div>

                            <ul className="space-y-3 text-grey">
                                {[
                                    'Materi Terarah & Terstruktur',
                                    'Fokus pada Konsep Dasar',
                                    'Fleksibel & Ramah Pemula',
                                    'Komunitas yang Mendukung',
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <IconCircleCheckFill className="size-5 text-green-500" />
                                        <BodySecondaryText text={item} />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-3">
                                <Link href="/courses">
                                    <NewPrimaryButton
                                        text="Mulai Belajar Sekarang"
                                        circleIcon
                                        showIcon
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section semuua module */}
            <section className="py-10">
                <div className="container mx-auto flex flex-col gap-5 px-6 py-8 md:px-10 lg:px-14 xl:px-0">
                    <SubText text="Choose Your Path" />

                    <TitleText text="Pilih Jalur Pembelajaran Sesuai Minatmu" />
                    <div className="mt-5 w-full">
                        <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {courses.slice(0, 3).map((course, index) => (
                                <CourseCardComponent
                                    key={index}
                                    course={course}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section popular modules */}
            <section className="py-10">
                <div className="container mx-auto px-6 py-8 md:px-10 lg:px-14 xl:px-0">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-start lg:justify-between">
                        <div className="flex flex-col gap-5">
                            <SubText text="POPULAR MODULES" />

                            <TitleText text="Materi Pembelajaran Terpopuler Saat Ini" />
                        </div>

                        <Link
                            href="/modules"
                            className="hidden min-w-fit gap-2 text-sm font-medium text-primary hover:underline md:flex"
                        >
                            Lihat Semua
                        </Link>
                    </div>

                    <div className="mt-5">
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
                </div>
            </section>
            {/* Section Blog */}
            <section className="py-10">
                <div className="container mx-auto px-6 py-8 md:px-10 lg:px-14 xl:px-0">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center lg:justify-between">
                        <div className="flex flex-col gap-5">
                            <SubText text="From Our Blog" />
                            <TitleText text="Cerita, Tren & Insight Seputar Dunia Teknologi" />
                        </div>
                    </div>
                    <div className="mt-5">
                        {blogs.length > 0 ? (
                            <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
                                {blogs.slice(0, 3).map((blog, index) => (
                                    <div
                                        key={index}
                                        className={
                                            index >= 2
                                                ? 'md:hidden lg:block'
                                                : ''
                                        }
                                    >
                                        <SimpleBlogCardComponent props={blog} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyStateBox
                                title="Belum ada artikel terbaru"
                                description="Saat ini belum ada artikel yang tersedia. Nantikan cerita, tren, dan insight menarik seputar dunia teknologi segera!"
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Sextion What They Say */}
            <section className="my-10 bg-[#F9FAFB] py-10">
                <div className="container mx-auto px-6 py-8 md:px-10 lg:px-14 xl:px-0">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col gap-5">
                            <SubText text="What They Say" />
                            <TitleText text="Apa Kata Mereka yang Sudah Belajar" />
                        </div>

                        {/* <Link
                            href="/blogs"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Lihat Semua
                        </Link> */}
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {testimonials.length > 0 ? (
                            testimonials.map((item, i) => (
                                <div
                                    key={i}
                                    className={
                                        i >= 2 ? 'md:hidden lg:block' : ''
                                    }
                                >
                                    <TestimonialCardComponent
                                        testimonial={item}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-1 flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3 py-16 text-center text-gray-500 sm:col-span-2 lg:col-span-3">
                                <p className="text-lg font-semibold text-gray-900">
                                    Belum ada testimoni
                                </p>
                                <p className="max-w-md text-sm text-gray-500">
                                    Jadilah yang pertama memberikan testimoni
                                    setelah menyelesaikan kursus
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Section FAQ */}
            <section className="py-10">
                <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-8 md:px-10 lg:grid-cols-2 lg:px-14 xl:px-0">
                    <div className="flex flex-col gap-5">
                        <SubText text="Frequently Asked Questions" />

                        <TitleText text="Hal-hal yang Sering Kamu Tanyakan" />
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
        </div>
    );
}
