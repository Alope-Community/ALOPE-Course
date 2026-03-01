import HorizontalQuizCardComponent from '@/Components/Cards/HorizontalQuiz';
import ModuleCardComponent from '@/Components/Cards/Module';
import TestimonialCardComponent from '@/Components/Cards/Testimonial';
import ConfirmationDialog from '@/Components/ConfirmationDialog';
import { Container } from '@/Components/Container';
import FooterComponent from '@/Components/Footer';
import { HeaderText } from '@/Components/HeaderText';
import NavbarComponent from '@/Components/Navbar';
import { SubText } from '@/Components/SubText';
import Tooltip from '@/Components/Tooltip';
import { Course } from '@/models/Course';
import { Testimonial } from '@/models/Testimonial';
import GlosariumSection from '@/Pages/Glosarium/Show';
import { Head, Link, router, usePage } from '@inertiajs/react';
import {
    IconCartFill,
    IconCircleInfoFill,
    IconLayersFill,
    IconStarFill,
} from 'justd-icons';
import { useState } from 'react';
import toast from 'react-hot-toast';

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
    testimonials,
    isJoined = false,
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
    testimonials: Testimonial[];
    isJoined?: boolean;
}) {
    const [activeTab, setActiveTab] = useState<'module' | 'quiz' | 'glosarium'>(
        'module',
    );
    const { auth } = usePage().props as any;
    const [isJoining, setIsJoining] = useState(false);
    const [showJoinConfirm, setShowJoinConfirm] = useState(false);

    const handleJoinCourse = () => {
        if (!auth.user) {
            setShowJoinConfirm(false);
            router.visit('/login');
            return;
        }

        setIsJoining(true);
        router.post(
            `/courses/${course.slug}/join`,
            {},
            {
                onSuccess: () => {
                    toast.success('Berhasil bergabung dengan kelas!');
                    setShowJoinConfirm(false);
                },
                onError: () => {
                    toast.error('Gagal bergabung dengan kelas');
                },
                onFinish: () => {
                    setIsJoining(false);
                },
            },
        );
    };
    return (
        <>
            <Head title="Courses" />

            <NavbarComponent />

            <ConfirmationDialog
                isOpen={showJoinConfirm}
                title="Konfirmasi Bergabung"
                message={
                    <>
                        Apakah kamu yakin ingin bergabung ke kelas{' '}
                        <b>{course.title}</b>?
                    </>
                }
                confirmLabel="Ya, Gabung"
                cancelLabel="Batal"
                onConfirm={handleJoinCourse}
                onCancel={() => setShowJoinConfirm(false)}
                isLoading={isJoining}
            />

            <Container>
                <main className="relative z-20 w-full">
                    <img
                        src={
                            course?.cover ||
                            'https://placehold.co/600x400?text=No+Image'
                        }
                        alt="cover course"
                        className="max-h-[500px] w-full rounded-lg object-cover"
                    />

                    {course.visibility === 'private' && !isJoined && (
                        <div className="mt-6 flex items-center gap-3 bg-amber-500 px-5 py-4 text-sm text-white md:text-base">
                            <IconCircleInfoFill className="size-5 shrink-0" />
                            <p>
                                Kamu harus bergabung kelas untuk mengikuti kelas
                                ini
                            </p>
                        </div>
                    )}

                    {/* ================== HEADER ================== */}
                    <div className="mt-8 flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-4">
                            <HeaderText text={course.title} />
                            {course.visibility === 'private' && !isJoined && (
                                <button
                                    onClick={() => setShowJoinConfirm(true)}
                                    disabled={isJoining}
                                    className="rounded-md bg-[#2276f0] px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-[#1a5ec9] disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
                                >
                                    {isJoining
                                        ? 'Bergabung...'
                                        : 'Gabung Kelas'}
                                </button>
                            )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 font-medium text-gray-700">
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
                                    className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${
                                        activeTab === 'module'
                                            ? 'bg-[#2276f0] text-white shadow'
                                            : 'bg-gray-200 text-gray-600'
                                    }`}
                                >
                                    Modul
                                </button>

                                {course.quizzes.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('quiz')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${
                                            activeTab === 'quiz'
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
                                    className={`rounded-md px-4 py-2 text-sm font-medium transition md:text-base ${
                                        activeTab === 'glosarium'
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
                                    {course.modules.length ? (
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                            {course.modules.map(
                                                (module, index) => (
                                                    <div
                                                        key={index}
                                                        className={
                                                            index >= 2
                                                                ? 'md:hidden lg:block'
                                                                : ''
                                                        }
                                                    >
                                                        <ModuleCardComponent
                                                            props={module}
                                                        />
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    ) : (
                                        <p className="italic text-gray-600">
                                            Belum ada Modul untuk kelas ini!
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {activeTab === 'quiz' && (
                            <>
                                <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                                    <span className="text-gray-400">//</span>{' '}
                                    Quiz
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
                <section className="my-20">
                    <div className="mb-6">
                        <SubText text="WHAT THEY SAY" />
                        <HeaderText text="Apa Kata Mereka yang Sudah Belajar" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                                    setelah menyelesaikan kursus ini
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </Container>

            <FooterComponent />
        </>
    );
}
