import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Answer, Quiz } from '@/models/Quiz';
import { Head, Link, useForm } from '@inertiajs/react';
import { IconCircleCheckFill, IconLoader2 } from 'justd-icons';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';

export default function QuizShowPage({
    quiz,
    answers,
    done,
}: {
    quiz: Quiz;
    answers: Answer[];
    done: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        answers: [{}],
    });

    const submitAnswer = (e: FormEvent) => {
        e.preventDefault();

        if (data.answers.length == quiz.questions?.length) {
            toast((t) => (
                <div className="flex flex-col gap-4">
                    <p>Apakah yakin jawaban sudah benar?</p>
                    <div className="flex justify-end gap-2">
                        <button
                            className="rounded bg-gray-200 px-3 py-1 text-sm"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Batal
                        </button>
                        <button
                            className="rounded bg-[#2c7cf1] px-3 py-1 text-sm text-white"
                            onClick={() => {
                                post(route('answers.store'), {
                                    onSuccess: () => {
                                        toast.success('Yeay, kamu berhasil!');
                                        reset();
                                    },
                                    onError: () => {
                                        toast.error(
                                            'Sepertinya terjadi kesalahan, silahkan submit ulang!',
                                        );
                                    },
                                });
                                toast.dismiss(t.id);
                            }}
                        >
                            Yakin
                        </button>
                    </div>
                </div>
            ));
        } else {
            toast.error('Jangan lupa jawab semua soal!');
        }
    };

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

            {!done ? (
                <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                    <div className="col-span-4 mt-5 lg:col-span-3">
                        <form action="" onSubmit={(e) => submitAnswer(e)}>
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
                                                    value={question.option1}
                                                    onChange={(e) => {
                                                        const newAnswers = [
                                                            ...data.answers,
                                                        ];

                                                        const obj = {
                                                            answer: e.target
                                                                .value as string,
                                                            question_id:
                                                                question.id,
                                                        };

                                                        newAnswers[index] = obj;
                                                        e.target.value;
                                                        setData(
                                                            'answers',
                                                            newAnswers,
                                                        );
                                                    }}
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
                                                    value={question.option2}
                                                    onChange={(e) => {
                                                        const newAnswers = [
                                                            ...data.answers,
                                                        ];

                                                        const obj = {
                                                            answer: e.target
                                                                .value as string,
                                                            question_id:
                                                                question.id,
                                                        };

                                                        newAnswers[index] = obj;
                                                        e.target.value;
                                                        setData(
                                                            'answers',
                                                            newAnswers,
                                                        );
                                                    }}
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
                                                    value={question.option3}
                                                    onChange={(e) => {
                                                        const newAnswers = [
                                                            ...data.answers,
                                                        ];

                                                        const obj = {
                                                            answer: e.target
                                                                .value as string,
                                                            question_id:
                                                                question.id,
                                                        };

                                                        newAnswers[index] = obj;
                                                        e.target.value;
                                                        setData(
                                                            'answers',
                                                            newAnswers,
                                                        );
                                                    }}
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
                                                    value={question.option4}
                                                    onChange={(e) => {
                                                        const newAnswers = [
                                                            ...data.answers,
                                                        ];

                                                        const obj = {
                                                            answer: e.target
                                                                .value as string,
                                                            question_id:
                                                                question.id,
                                                        };

                                                        newAnswers[index] = obj;
                                                        e.target.value;
                                                        setData(
                                                            'answers',
                                                            newAnswers,
                                                        );
                                                    }}
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
                                    <button
                                        type="button"
                                        onClick={() => {
                                            toast((t) => (
                                                <div className="flex flex-col gap-4">
                                                    <p>
                                                        Apakah yakin ingin
                                                        keluar quiz?
                                                    </p>
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            className="rounded bg-gray-200 px-3 py-1 text-sm"
                                                            onClick={() =>
                                                                toast.dismiss(
                                                                    t.id,
                                                                )
                                                            }
                                                        >
                                                            Batal
                                                        </button>
                                                        <Link
                                                            className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                                                            onClick={() => {
                                                                toast.dismiss(
                                                                    t.id,
                                                                );
                                                            }}
                                                            href="/courses"
                                                        >
                                                            Yakin
                                                        </Link>
                                                    </div>
                                                </div>
                                            ));
                                        }}
                                        className="rounded bg-gray-400 px-5 py-2 text-gray-200 hover:bg-gray-400/80"
                                    >
                                        Keluar
                                    </button>
                                    <button className="inline-flex items-center gap-2 rounded bg-[#2c7cf1] px-5 py-2 text-white hover:bg-[#2c7cf1]/80">
                                        {processing && <IconLoader2 />}
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
            ) : (
                <main className="container relative z-20 mx-auto mt-5 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                    <div className="flex w-full flex-col items-center justify-center gap-2 rounded border border-emerald-500 bg-emerald-500/20 py-4 text-center text-emerald-500 md:flex-row">
                        <IconCircleCheckFill className="size-6 text-emerald-500" />
                        <p className="font-semibold">
                            Kamu sudah mengerjakan quiz ini!
                        </p>
                    </div>
                </main>
            )}

            <FooterComponent />
        </>
    );
}
