import BadgeComponent from '@/Components/Badge';
import BreadcrumbComponent from '@/Components/Breadcrumb';
import QuizCardComponent from '@/Components/Cards/Quiz';
import SimpleArticleCardComponent from '@/Components/Cards/SimpleArticle';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import { Course } from '@/models/Course';
import SideArticlesSection from '@/Sections/SideArticles';
import { Head, Link } from '@inertiajs/react';
import Glider from 'react-glider';

export default function CourseIndexPage({
    courses,
    articles,
}: {
    courses: Course[];
    articles: Article[];
}) {
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
                links={[{ title: 'Course', url: '/courses', active: true }]}
            />

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="col-span-4 lg:col-span-3">
                    {courses.map((course, index) => (
                        <div key={index} className="relative mb-6">
                            <img
                                src={course.cover}
                                alt={`Banner ${course.title}`}
                                className="h-[250px] w-full rounded object-cover object-center sm:h-[450px] xl:h-[600px]"
                            />
                            <div className="-mt-1 overflow-hidden rounded-b border border-t-0 border-[#2276f0] p-5">
                                <div className="my-4 flex gap-3 xl:my-7">
                                    {course.hashtags.map((hashtag, index) => (
                                        <BadgeComponent
                                            key={index}
                                            text={hashtag.name}
                                        />
                                    ))}
                                </div>
                                <Link href={`/courses/${course.slug}`}>
                                    <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl">
                                        {course.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-700 sm:text-sm xl:text-base">
                                        {course.description}
                                    </p>
                                </Link>

                                <h3 className="mb-7 mt-6 font-bold sm:text-xl">
                                    <span className="text-gray-500">// </span>{' '}
                                    Modul Pembelajaran
                                </h3>
                                <Glider
                                    draggable
                                    slidesToShow={4.5}
                                    slidesToScroll={1}
                                    // hasArrows
                                    dragVelocity={1.5}
                                    responsive={[
                                        {
                                            breakpoint: 1536,
                                            settings: { slidesToShow: 3.6 },
                                        }, // Desktop
                                        {
                                            breakpoint: 1280,
                                            settings: { slidesToShow: 3.3 },
                                        }, // Desktop
                                        {
                                            breakpoint: 1024,
                                            settings: { slidesToShow: 2.5 },
                                        }, // Desktop
                                        {
                                            breakpoint: 769,
                                            settings: { slidesToShow: 2.8 },
                                        }, // Tablet
                                        {
                                            breakpoint: 450,
                                            settings: { slidesToShow: 2.5 },
                                        }, // Mobile
                                        {
                                            breakpoint: 375,
                                            settings: { slidesToShow: 1.5 },
                                        }, // Mobile
                                        {
                                            breakpoint: 100,
                                            settings: { slidesToShow: 1.2 },
                                        }, // Mobile
                                    ]}
                                >
                                    {course.articles.length ? (
                                        course.articles.map(
                                            (article, index) => (
                                                <SimpleArticleCardComponent
                                                    key={index}
                                                    props={article}
                                                    withoutBorder
                                                />
                                            ),
                                        )
                                    ) : (
                                        <p className="italic text-gray-700">
                                            Belum ada artikel terkait
                                        </p>
                                    )}
                                </Glider>

                                {course.quizzes.length ? (
                                    <>
                                        <h3 className="mb-7 mt-6 font-bold sm:text-xl">
                                            <span className="text-gray-500">
                                                //{' '}
                                            </span>{' '}
                                            Quiz
                                        </h3>
                                        <Glider
                                            draggable
                                            slidesToShow={4.5}
                                            slidesToScroll={1}
                                            // hasArrows
                                            dragVelocity={1.5}
                                            responsive={[
                                                {
                                                    breakpoint: 1536,
                                                    settings: {
                                                        slidesToShow: 3.6,
                                                    },
                                                }, // Desktop
                                                {
                                                    breakpoint: 1280,
                                                    settings: {
                                                        slidesToShow: 3.3,
                                                    },
                                                }, // Desktop
                                                {
                                                    breakpoint: 1024,
                                                    settings: {
                                                        slidesToShow: 2.5,
                                                    },
                                                }, // Desktop
                                                {
                                                    breakpoint: 769,
                                                    settings: {
                                                        slidesToShow: 2.8,
                                                    },
                                                }, // Tablet
                                                {
                                                    breakpoint: 450,
                                                    settings: {
                                                        slidesToShow: 2.5,
                                                    },
                                                }, // Mobile
                                                {
                                                    breakpoint: 375,
                                                    settings: {
                                                        slidesToShow: 1.5,
                                                    },
                                                }, // Mobile
                                                {
                                                    breakpoint: 100,
                                                    settings: {
                                                        slidesToShow: 1.2,
                                                    },
                                                }, // Mobile
                                            ]}
                                        >
                                            {course.quizzes.length ? (
                                                course.quizzes.map(
                                                    (quiz, index) => (
                                                        <QuizCardComponent
                                                            key={index}
                                                            props={quiz}
                                                        />
                                                    ),
                                                )
                                            ) : (
                                                <p className="italic text-gray-700">
                                                    Belum ada Quiz terkait
                                                </p>
                                            )}
                                        </Glider>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    ))}
                </section>
                <SideArticlesSection articles={articles} />
            </main>

            <FooterComponent />
        </>
    );
}
