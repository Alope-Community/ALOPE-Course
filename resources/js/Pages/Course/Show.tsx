import BreadcrumbComponent from '@/Components/Breadcrumb';
import HorizontalModuleCardComponent from '@/Components/Cards/HorizontalModule';
import HorizontalQuizCardComponent from '@/Components/Cards/HorizontalQuiz';
import ModuleCardComponent from '@/Components/Cards/Module';
import TestimonialCard, { TestimonialCardProps } from '@/Components/Cards/Testimonial';
import { Container } from '@/Components/Container';
import FooterComponent from '@/Components/Footer';
import { HeaderText } from '@/Components/HeaderText';
import NavbarComponent from '@/Components/Navbar';
import { SubText } from '@/Components/SubText';
import Tooltip from '@/Components/Tooltip';
import { Course } from '@/models/Course';
import GlosariumSection from '@/Pages/Glosarium/Show';
import SideCoursesSection from '@/Sections/SideCourses';
import { Head, Link } from '@inertiajs/react';
import { IconCartFill, IconCircleInfoFill, IconLayersFill, IconStarFill } from 'justd-icons';
import { useEffect, useState } from 'react';

// 👉 helper highlight glossary
function highlightGlossary(
    text: string,
    glosaries: {
        title: string;
        description: string;
        slug: string;
        body: string;
    }[],
) {
    let result: (string | JSX.Element)[] = [text];

    glosaries.forEach((glossary, glossaryIndex) => {
        result = result.flatMap((chunk, chunkIndex) => {
            if (typeof chunk !== 'string') return chunk;

            const regex = new RegExp(`\\b(${glossary.title})\\b`, 'gi');
            const parts = chunk.split(regex);

            return parts.map((part, index) => {
                if (part.toLowerCase() === glossary.title.toLowerCase()) {
                    return (
                        <Tooltip
                            key={`tooltip-${glossary.slug}-${glossaryIndex}-${chunkIndex}-${index}-${Math.random().toString(36).slice(2)}`}
                            content={glossary.description}
                            slug={glossary.slug}
                        >
                            <span className="cursor-pointer font-medium text-blue-600">
                                {part}
                            </span>
                        </Tooltip>
                    );
                }
                return part;
            });
        });
    });

    return result;
}

export default function CourseShowPage({
    course,
    courses,
    glossaries,
    allGlossary,
}: {
    course: Course;
    courses: Course[];
    glossaries: {
        title: string;
        description: string;
        slug: string;
        body: string;
    }[];
    allGlossary: { title: string; description: string; course_id: string }[];
}) {
    const [activeTab, setActiveTab] = useState<'module' | 'quiz' | 'glosarium'>(
        'module',
    );

    const testimonials: TestimonialCardProps[] = [
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
                        title: course.title,
                        url: `/courses/${course.slug}`,
                        active: true,
                    },
                ]}
            />

            <Container>
                <main className="relative z-20 w-full">

                    <img
                        src={course?.cover || 'https://placehold.co/600x400?text=No+Image'}
                        alt="cover course"
                        className="max-h-[500px] w-full rounded-lg object-cover"
                    />

                    {course.visibility === 'private' && (
                        <div className="mt-6 flex items-center gap-3 rounded-md bg-gradient-to-r from-[#f0c322] to-[#f0c322]/60 px-5 py-4 text-sm text-gray-800 md:text-base">
                            <IconCircleInfoFill className="size-5 shrink-0" />
                            <p>
                                Kamu harus bergabung kelas untuk mengikuti kelas ini
                            </p>
                        </div>
                    )}

                    {/* ================== HEADER ================== */}
                    <div className="mt-8 flex flex-col gap-3">
                        <HeaderText text={course.title} />

                        <div className="flex flex-wrap items-center gap-4 text-gray-700 font-medium">
                            <div className="flex items-center gap-1">
                                <IconStarFill className="size-4 text-yellow-500" />
                                <span>4.8 (230)</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <IconLayersFill className="size-4 text-orange-500" />
                                <span>{course.modules.length} Modul</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <IconCartFill className="size-4 text-green-500" />
                                <span>Pemula</span>
                            </div>
                        </div>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            {highlightGlossary(course.description, glossaries)}
                        </p>
                    </div>

                    {/* ================== TABS ================== */}
                    <section className="mt-14">
                        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setActiveTab('module')}
                                    className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${activeTab === 'module'
                                        ? 'bg-[#2276f0] text-white shadow'
                                        : 'bg-gray-200 text-gray-600'
                                        }`}
                                >
                                    Modul
                                </button>

                                {course.quizzes.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('quiz')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${activeTab === 'quiz'
                                            ? 'bg-[#2276f0] text-white shadow'
                                            : 'bg-gray-200 text-gray-600'
                                            }`}
                                    >
                                        Quiz
                                    </button>
                                )}

                                {course.videos.length > 0 && (
                                    <Link
                                        href={`/videos/${course.videos[0].slug}`}
                                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-300 md:text-base"
                                    >
                                        Video
                                    </Link>
                                )}
                            </div>

                            {allGlossary.length > 0 && (
                                <button
                                    onClick={() => setActiveTab('glosarium')}
                                    className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${activeTab === 'glosarium'
                                        ? 'bg-[#2276f0] text-white shadow'
                                        : 'bg-gray-200 text-gray-600'
                                        }`}
                                >
                                    Glosarium
                                </button>
                            )}
                        </div>

                        {/* ================== CONTENT ================== */}
                        {activeTab === 'module' && (
                            <>
                                {/* <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                                    <span className="text-gray-400">//</span> Modul Pembelajaran
                                </h2> */}

                                <div className="space-y-4">
                                    {course.modules.length ?
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                            {course.modules.map((module, index) => (
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
                                        :
                                        <p className="italic text-gray-600">
                                            Belum ada Modul untuk kelas ini!
                                        </p>
                                    }
                                </div>
                            </>
                        )}

                        {activeTab === 'quiz' && (
                            <>
                                <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                                    <span className="text-gray-400">//</span> Quiz
                                </h2>

                                <div className="space-y-4">
                                    {course.quizzes.length ? (
                                        course.quizzes.map((quiz) => (
                                            <HorizontalQuizCardComponent
                                                key={quiz.id}
                                                props={quiz}
                                            />
                                        ))
                                    ) : (
                                        <p className="italic text-gray-600">
                                            Belum ada Quiz untuk kelas ini!
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {activeTab === 'glosarium' && (
                            <div className="mt-6">
                                <GlosariumSection glosaries={allGlossary} />
                            </div>
                        )}
                    </section>
                </main>

                <section className='my-20'>
                    <div className="mb-6">
                        <SubText text='WHAT THEY SAY' />
                        <HeaderText text='Apa Kata Mereka yang Sudah Belajar' />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {testimonials.map((item, i) => (
                            <div key={i} className={
                                i >= 2 ? 'md:hidden lg:block' : ''
                            }>
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>

            <FooterComponent />
        </>
    );
}
