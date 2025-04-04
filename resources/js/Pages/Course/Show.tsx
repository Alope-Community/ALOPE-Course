import BreadcrumbComponent from '@/Components/Breadcrumb';
import HorizontalArticleCardComponent from '@/Components/Cards/HorizontalArticle';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import SideCoursesSection from '@/Sections/SideCourses';
import { Head } from '@inertiajs/react';

export default function CourseShowPage({
    course,
    courses,
}: {
    course: Course;
    courses: Course[];
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
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold">{course.title}</h1>
                        <p className="mt-4 text-gray-800">
                            {course.description}
                        </p>
                    </div>

                    <section>
                        <div className="mb-7 mt-16">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span>{' '}
                                Artikel Pelajaran
                            </h2>
                        </div>
                        {course.articles.map((article, index) => (
                            <HorizontalArticleCardComponent
                                key={index}
                                props={article}
                            />
                        ))}
                    </section>
                </div>
                <SideCoursesSection courses={courses} />
            </main>

            <FooterComponent />
        </>
    );
}
