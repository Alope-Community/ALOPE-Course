import CourseCardComponent from '@/Components/Cards/CourseCard';
import { Container } from '@/Components/Container';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar/Navbar';
import { SubText } from '@/Components/SubText';
import { TitleText } from '@/Components/TitleText';
import { Course } from '@/models/Course';
import { Module } from '@/models/Module';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CourseIndexPage({
    courses,
    modules,
}: {
    courses: Course[];
    modules: Module[];
}) {
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return (
        <>
            <Head title="Courses" />

            <NavbarComponent />

            <Container>
                <div className="flex flex-col gap-5">
                    <SubText text="Choose Your Path" />

                    <TitleText text="Pilih jalur belajar sesuai dengan minatmu" />
                </div>

                <section className="my-10 min-h-[calc(100vh-600px)]">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {courses.map((course) => (
                            <CourseCardComponent
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </div>
                </section>
            </Container>
            <FooterComponent />
        </>
    );
}
