import AccordionComponent from '@/Components/Accordion';
import BodySecondaryText from '@/Components/BodySecondaryText';
import SimpleBlogCardComponent from '@/Components/Cards/Blog';
import CourseCardComponent from '@/Components/Cards/CourseCard';
import ModuleCardComponent from '@/Components/Cards/Module';
import TestimonialCard, {
    TestimonialCardProps,
} from '@/Components/Cards/Testimonial';
import { EmptyStateBox } from '@/Components/EmptyStateBox';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import { SubText } from '@/Components/SubText';
import { TitleText } from '@/Components/TitleText';
import { Blog } from '@/models/Blog';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Video } from '@/models/Video';
import { Head, Link } from '@inertiajs/react';
import 'glider-js/glider.min.css';
import { IconArrowRight, IconBookOpen, IconCircleCheckFill, IconSend3 } from 'justd-icons';

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
        <div className='bg-white'>
            <Head title="Welcome" />

            <NavbarComponent />

            <header className="relative min-h-[800px] overflow-hidden bg-gradient-to-tr from-white to-yellow-50 pt-20 md:pt-16">
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-4 py-10 md:px-20 lg:flex-row lg:text-left text-center">
                    <div className="flex flex-col gap-10 lg:w-1/2">
                        <h1 className="leading-tight font-medium text-[40px] md:text-[48px] lg:text-[64px] font-spartan">
                            Tingkatkan Skill Coding dari Nol hingga Mahir!
                        </h1>

                        <BodySecondaryText text='Belajar coding dari nol hingga mahir dengan panduan
                            lengkap, materi terstruktur, dan artikel mendalam
                            yang membantumu meningkatkan skill programming
                            secara efektif.' />

                        <div className="flex justify-center lg:justify-start">
                            <Link href='/courses'>
                                <NewPrimaryButton
                                    text="Mulai Belajar Sekarang"
                                    circleIcon
                                    showIcon
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="relative order-1 mt-10 hidden justify-center lg:order-2 lg:mt-0 lg:flex lg:w-1/2">
                        <div className="absolute right-[12%] top-4 h-[380px] w-[340px] rotate-[25deg] rounded-3xl bg-primary blur-[1px] md:h-[460px] md:w-[420px] lg:right-[20%] lg:top-0 lg:h-[380px] lg:w-[290px] xl:right-[16%] xl:top-4 xl:h-[460px] xl:w-[420px]" />
                        <div className="absolute right-[5%] top-0 h-[400px] w-[360px] rounded-3xl bg-[#51a2ff] md:h-[467px] md:w-[440px] lg:right-[14%] lg:top-0 lg:h-[400px] lg:w-[310px] xl:right-[10%] xl:top-0 xl:h-[467px] xl:w-[440px]" />
                        <img
                            src="/images/header1.png"
                            alt="Belajar coding"
                            className="relative z-10 w-[80%] max-w-[400px] object-cover md:w-[70%] md:object-contain lg:h-[400px] lg:w-[60%] lg:max-w-[300px] lg:object-cover xl:h-auto xl:w-[85%] xl:max-w-[400px] xl:object-contain"
                            loading="lazy"
                        />
                        <div className="absolute left-[10%] top-10 z-20 flex translate-x-6 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[12%] md:translate-x-8 lg:left-[8%] lg:top-8 lg:translate-x-6 lg:gap-1 lg:px-2 lg:py-1 xl:left-[14%] xl:top-10 xl:translate-x-10 xl:gap-2 xl:px-3 xl:py-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-yellow-400 text-white lg:h-4 lg:w-4 xl:h-5 xl:w-5">
                                <IconSend3 className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3 xl:w-3" />
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey lg:text-[10px] xl:text-xs">
                                Effective Learning
                            </span>
                        </div>
                        <div className="absolute bottom-20 left-[8%] z-20 flex translate-x-8 items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:left-[10%] md:translate-x-10 lg:bottom-20 lg:left-[5%] lg:translate-x-6 lg:gap-1 lg:px-2 lg:py-1 xl:bottom-20 xl:left-[12%] xl:translate-x-12 xl:gap-2 xl:px-3 xl:py-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600 text-white lg:h-4 lg:w-4 xl:h-5 xl:w-5">
                                <IconSend3 className="h-3 w-3 lg:h-2 lg:w-2 xl:h-3 xl:w-3" />
                            </div>
                            <span className="whitespace-nowrap text-xs font-semibold text-grey lg:text-[10px] xl:text-xs">
                                Upgrade Skill
                            </span>
                        </div>
                        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-lg md:right-8 lg:bottom-8 lg:right-6 lg:gap-1 lg:px-2 lg:py-1 xl:bottom-8 xl:right-10 xl:gap-2 xl:px-3 xl:py-1.5">
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
                <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-4 md:flex-row md:items-center md:px-10 xl:px-20">
                    <div className="flex w-full justify-center md:w-1/2">
                        <div className="">
                            <img
                                src="/images/header.png"
                                alt="student"
                                className="w-full max-w-sm object-contain md:max-w-md"
                            />
                        </div>
                    </div>

                    {/* Kontainer teks */}
                    <div className="flex gap-5 w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <SubText text='Why Choose Us' />

                        <TitleText text='Belajar Coding dengan Pendekatan yang Tepat' />

                        <ul className="space-y-3 text-grey">
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
                                    <BodySecondaryText text={item} />
                                </li>
                            ))}
                        </ul>

                        <div className="mt-3">
                            <Link href='/courses'>
                                <NewPrimaryButton
                                    text="Mulai Belajar Sekarang"
                                    circleIcon
                                    showIcon
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section semuua module */}
            <section className="py-10">
                <div className="flex gap-5 flex-col container mx-auto px-6 md:px-10 lg:px-20 py-8">
                    <SubText text='Choose Your Path' />

                    <TitleText text='Pilih Jalur Pembelajaran Sesuai Minatmu' />
                    <div className="mt-5 w-full">
                        <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {courses.slice(0, 3).map((course, index) => (
                                <CourseCardComponent key={index} course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section popular modules */}
            <section className="py-10">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 py-8">
                    <div className="flex flex-col gap-10 md:flex-row md:justify-start md:items-center lg:justify-between">
                        <div className='flex flex-col gap-5'>
                            <SubText text='Course Populer' />

                            <TitleText text='Materi Pembelajaran Terpopuler Saat Ini' />
                        </div>

                        <Link
                            href="/modules"
                            className="gap-2 text-sm font-medium text-primary hover:underline min-w-fit hidden md:flex"
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

            <section className="py-10">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 py-8">
                    <div className="flex flex-col gap-5 text-white bg-primary p-10 md:p-20 rounded-2xl ">
                        <TitleText text='Gabung "Bootcamp Bersama PBK", Perkuat Fundamental Skill Web Programming' />
                        <Link
                            href="/blogs"
                            className="flex gap-2 items-center font-medium hover:underline"
                        >
                            Belajar Sekarang

                            <IconArrowRight className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section Blog */}
            <section className="py-10">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 py-8">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center lg:justify-between">
                        <div className='flex flex-col gap-5'>
                            <SubText text='From Our Blog' />
                            <TitleText text='Cerita, Tren & Insight Seputar Dunia Teknologi' />
                        </div>

                        <Link
                            href="/modules"
                            className=" gap-2 text-sm font-medium text-primary hover:underline min-w-fit hidden md:flex"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="mt-5">
                        {blogs.length > 0 ? (
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
                        ) : (
                            <EmptyStateBox
                                title='Belum ada artikel terbaru'
                                description='Saat ini belum ada artikel yang tersedia. Nantikan cerita, tren, dan insight menarik seputar dunia teknologi segera!'
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Sextion What They Say */}
            <section className="bg-[#F9FAFB] py-10 my-10">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 py-8">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                        <div className='flex flex-col gap-5'>
                            <SubText text='What They Say' />
                            <TitleText text='Apa Kata Mereka yang Sudah Belajar' />
                        </div>

                        {/* <Link
                            href="/blogs"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Lihat Semua
                        </Link> */}
                    </div>
                    <div className="mt-5">
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
                </div>
            </section>

            {/* Section FAQ */}
            <section className="py-10">
                <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:px-10 lg:px-20 py-8 lg:grid-cols-2">
                    <div className='flex flex-col gap-5'>
                        <SubText text='Frequently Asked Questions' />

                        <TitleText text='Hal-hal yang Sering Kamu Tanyakan' />
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
