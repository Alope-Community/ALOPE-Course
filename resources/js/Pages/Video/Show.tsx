import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import { Video } from '@/models/Video';
import { Head } from '@inertiajs/react';

export default function ShowVideoPage({
    course,
    videos,
}: {
    course: Course;
    videos: Video[];
}) {
    console.log(videos);

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
            {/* 
            <BreadcrumbComponent
                links={[
                    { title: 'Course', url: '/courses' },
                    {
                        title: course.title,
                        url: `/courses/${course.slug}`,
                        active: true,
                    },
                ]}
            /> */}

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                {/*  */}
            </main>

            <FooterComponent />
        </>
    );
}
