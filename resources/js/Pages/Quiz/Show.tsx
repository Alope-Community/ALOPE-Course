import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Quiz } from '@/models/Quiz';
import { Head } from '@inertiajs/react';

export default function QuizShowPage({ quiz }: { quiz: Quiz }) {
    console.log(quiz);

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
                    { title: 'Quiz', url: '/courses' },
                    {
                        title: quiz.title,
                        url: `/quizzes/${quiz.slug}`,
                        active: true,
                    },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <div className="col-span-4 mt-5 lg:col-span-3">
                    <form action="">
                        {quiz.questions?.length &&
                            quiz.questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="mb-5 rounded-xl border-l-2 border-[#2c7cf1] bg-white/70 p-5 shadow backdrop-blur-sm"
                                >
                                    <p className="font-bold">
                                        Soal No. {index + 1}
                                    </p>
                                    <p className="mb-3 mt-5">
                                        {question.question}
                                    </p>
                                    <div className="flex flex-wrap gap-5 md:gap-10">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                id={`${index}A`}
                                            />
                                            <label
                                                htmlFor={`${index}A`}
                                                className="text-sm md:text-base"
                                            >
                                                {question.option1}
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                id={`${index}B`}
                                            />
                                            <label
                                                htmlFor={`${index}B`}
                                                className="text-sm md:text-base"
                                            >
                                                {question.option2}
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                id={`${index}C`}
                                            />
                                            <label
                                                htmlFor={`${index}C`}
                                                className="text-sm md:text-base"
                                            >
                                                {question.option3}
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name={`question${index}`}
                                                id={`${index}D`}
                                            />
                                            <label
                                                htmlFor={`${index}D`}
                                                className="text-sm md:text-base"
                                            >
                                                {question.option4}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex items-center gap-2">
                                <button className="rounded bg-gray-400 px-5 py-2 text-gray-200 hover:bg-gray-400/80">
                                    Keluar
                                </button>
                                <button className="rounded bg-[#2c7cf1] px-5 py-2 text-white hover:bg-[#2c7cf1]/80">
                                    Submit
                                </button>
                            </div>
                            <p className="flex items-center gap-1 text-gray-700">
                                <span className="block size-3 rounded-full bg-[#2c7cf1]"></span>
                                16 menit Waktu tersisa
                            </p>
                        </div>
                    </form>
                </div>
                {/* <SideCoursesSection courses={courses} /> */}
            </main>

            <FooterComponent />
        </>
    );
}
