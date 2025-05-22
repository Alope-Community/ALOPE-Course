import BreadcrumbComponent from '@/Components/Breadcrumb';
import HorizontalArticleCardComponent from '@/Components/Cards/HorizontalArticle';
import HorizontalQuizCardComponent from '@/Components/Cards/HorizontalQuiz';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import SideCoursesSection from '@/Sections/SideCourses';
import { Head, Link } from '@inertiajs/react';
import { IconCircleInfoFill } from 'justd-icons';
import { useState } from 'react';

export default function CourseShowPage({
    course,
    courses,
}: {
    course: Course;
    courses: Course[];
}) {
    const [activeTab, setActiveTab] = useState('article');

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

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <div className="col-span-4 mt-5 lg:col-span-3">
                    <img
                        src={course.cover}
                        alt="cover course"
                        className="max-h-[800px] w-full rounded"
                    />

                    {course.visibility == 'private' && (
                        <div className="mt-6 flex items-center gap-2 rounded-md bg-gradient-to-r from-[#f0c322] to-[#f0c322]/50 px-5 py-4 text-gray-800">
                            <IconCircleInfoFill className="size-5" />
                            <p>
                                Kamu harus bergabung kelas untuk membaca
                                mengikuti Kelas ini
                            </p>
                        </div>
                    )}

                    <div className="mt-5">
                        <h1 className="text-3xl font-bold">{course.title}</h1>
                        <p className="mt-4 text-gray-800">
                            {course.description}
                        </p>
                    </div>

                    <section className="mt-16">
                        <div className="mb-10">
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setActiveTab('article')}
                                    className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200 md:px-6 md:py-2 md:text-base ${
                                        activeTab === 'article'
                                            ? 'border border-[#2276f0] bg-[#2276f0] text-white shadow-lg'
                                            : 'border border-gray-300 bg-gray-200/90 text-gray-600'
                                    }`}
                                >
                                    Artikel
                                </button>
                                <button
                                    onClick={() => setActiveTab('quiz')}
                                    className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200 md:px-6 md:py-2 md:text-base ${
                                        activeTab === 'quiz'
                                            ? 'border border-[#2276f0] bg-[#2276f0] text-white shadow-lg'
                                            : 'border border-gray-300 bg-gray-200/90 text-gray-600'
                                    }`}
                                >
                                    Quiz
                                </button>
                                {course.videos.length ? (
                                    <Link
                                        href={`/videos/${course.videos[0].slug}`}
                                        className={`rounded-md border border-gray-300 bg-gray-200/90 px-4 py-1.5 text-sm font-medium text-gray-600 transition-all duration-200 md:px-6 md:py-2 md:text-base`}
                                    >
                                        Video
                                    </Link>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                        {activeTab === 'article' && (
                            <>
                                <div className="mb-7 mt-7">
                                    <h2 className="text-xl font-semibold md:text-2xl">
                                        <span className="text-gray-400">
                                            //
                                        </span>{' '}
                                        Artikel Pelajaran
                                    </h2>
                                </div>
                                {course.articles.length ? (
                                    course.articles.map((article, index) => (
                                        <HorizontalArticleCardComponent
                                            key={index}
                                            props={article}
                                        />
                                    ))
                                ) : (
                                    <p className="italic text-gray-700">
                                        Belum ada Artikel untuk kelas ini!
                                    </p>
                                )}
                            </>
                        )}
                        {activeTab === 'quiz' && (
                            <>
                                <div className="mb-7 mt-7">
                                    <h2 className="text-xl font-semibold md:text-2xl">
                                        <span className="text-gray-400">
                                            //
                                        </span>{' '}
                                        Quiz
                                    </h2>
                                </div>
                                {course.quizzes.length ? (
                                    course.quizzes.map((quiz, index) => (
                                        <HorizontalQuizCardComponent
                                            key={index}
                                            props={quiz}
                                        />
                                    ))
                                ) : (
                                    <p className="italic text-gray-700">
                                        Belum ada Quiz untuk kelas ini!
                                    </p>
                                )}
                            </>
                        )}
                    </section>
                </div>
                <SideCoursesSection courses={courses} />
            </main>

            <FooterComponent />
        </>
    );
}
