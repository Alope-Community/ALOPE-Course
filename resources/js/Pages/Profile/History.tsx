import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import { History } from '@/models/History';
import { calculateCorrectPercentage } from '@/tools/calculateQuizPoint';
import { formatDateWithTime } from '@/tools/formatDate';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    IconBookOpenFill,
    IconCirclePersonFill,
    IconPuzzleFill,
    IconRocketFill,
} from 'justd-icons';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';

export default function HistoryPage({
    histories,
    courses,
}: {
    histories: History[];
    courses: Course[];
}) {
    const { props } = usePage();
    const { auth } = props;

    const countMyHistory = (courseId: string) => {
        let count = 0;
        histories.forEach((history) => {
            if (history.logs[0].article?.course_id == courseId) {
                count++;
            }
        });

        return count;
    };

    const counter = (a: number, b: number) => {
        return a + b;
    };

    return (
        <>
            <Head title="History" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur2.svg"
                alt="blueBlur"
                className="absolute -top-72 right-0 hidden xl:block"
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
                    {
                        title: 'Profile',
                        url: '/profile',
                        active: true,
                    },
                    // { title: 'History', url: '/profile/history', active: true },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-10 grid gap-5 px-3 md:px-10 lg:grid-cols-3 xl:grid-cols-2 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="relative">
                    <div className="sticky top-24">
                        <div className="mb-5 rounded-lg bg-white/50 p-5 shadow backdrop-blur lg:col-span-2 xl:col-span-1">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span className="text-gray-400">//</span>{' '}
                                Profile
                            </h2>
                            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
                                <div>
                                    <IconCirclePersonFill className="size-16" />
                                </div>

                                <div>
                                    <p className="font-medium md:text-xl">
                                        {auth.user.name}
                                    </p>
                                    <p className="text-xs text-gray-500 md:text-sm">
                                        {auth.user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white/50 p-5 shadow backdrop-blur lg:col-span-2 xl:col-span-1">
                            <h2 className="text-xl font-semibold">
                                <span className="text-gray-400">//</span> Update
                                Password
                            </h2>
                            <UpdatePasswordForm />
                        </div>
                    </div>
                </section>
                <section className="lg:col-span-2 xl:col-span-1">
                    <div className="mb-5 rounded-lg bg-white/50 p-5 shadow backdrop-blur">
                        <h2 className="text-xl font-semibold md:text-2xl">
                            <span className="text-gray-400">//</span> Kelas yang
                            Diikuti
                        </h2>
                        <div className="mt-10">
                            {courses.length ? (
                                courses.map((course, index) => (
                                    <div
                                        key={index}
                                        className="mb-7 flex items-center gap-5 md:mb-4"
                                    >
                                        <div className="hidden md:block">
                                            <img
                                                src={course.cover}
                                                alt="Cover Course"
                                                className="rounded shadow md:max-h-[100px] md:max-w-[150px]"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <div className="mb-2 flex items-end justify-between">
                                                <div>
                                                    <div className="inline-flex gap-2">
                                                        <Link
                                                            href={`/courses/${course.slug}`}
                                                            className="font-bold"
                                                        >
                                                            {course.title}
                                                        </Link>
                                                        {course.visibility ==
                                                            'private' && (
                                                            <p>
                                                                <span
                                                                    title="Premium"
                                                                    className="inline-flex rounded bg-[#f0c322] p-0.5"
                                                                >
                                                                    <IconRocketFill className="size-3" />
                                                                </span>
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-2 text-xs text-gray-700">
                                                        <p>
                                                            {
                                                                course.articles
                                                                    .length
                                                            }{' '}
                                                            Article
                                                        </p>
                                                        <p>
                                                            {
                                                                course.quizzes
                                                                    .length
                                                            }{' '}
                                                            Quiz
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-gray-800 md:text-sm">
                                                    Progress{' '}
                                                    {`${countMyHistory(course.id)} / ${counter(
                                                        course.articles.length,
                                                        course.quizzes.length,
                                                    )}`}
                                                </p>
                                            </div>
                                            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                                <div
                                                    className="h-full bg-[#2276f0]"
                                                    style={{
                                                        width: `${(countMyHistory(course.id) / counter(course.articles.length, course.quizzes.length)) * 100}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="italic text-gray-700">
                                    Belum ada Kelas yang Diikuti
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="rounded-lg bg-white/50 p-5 shadow backdrop-blur">
                        <h2 className="text-xl font-semibold md:text-2xl">
                            <span className="text-gray-400">//</span> Riwayat
                            Aktifitas
                        </h2>
                        <div className="relative mt-10 border-l border-gray-400 md:ml-4">
                            {histories.length ? (
                                histories.map((history, index) => (
                                    <div key={index} className="mb-10 ml-6">
                                        <div
                                            className={`absolute -left-0 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border border-white text-white ${history.history.type == 'article' ? 'bg-[#2276f0]' : 'bg-[#673ef0]'}`}
                                        >
                                            {history.history.type ==
                                            'article' ? (
                                                <IconBookOpenFill className="size-3.5" />
                                            ) : (
                                                <IconPuzzleFill className="size-3.5" />
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p
                                                className={`text-xs font-medium capitalize md:text-sm ${history.history.type == 'article' ? 'text-[#2276f0]' : 'text-[#673ef0]'}`}
                                            >
                                                {history.history.type}
                                            </p>
                                            <span className="text-gray-600">
                                                &bull;
                                            </span>
                                            <time className="text-xs text-gray-500 md:text-sm">
                                                {formatDateWithTime(
                                                    history.logs[0].created_at,
                                                )}
                                            </time>
                                        </div>
                                        <Link
                                            href={`${history.history.type == 'article' ? `/articles/${history.history.slug}` : `/quizzes/${history.history.slug}`}`}
                                            className="block font-medium text-gray-900 md:text-lg"
                                        >
                                            {history.history.title}
                                        </Link>
                                        {history.history.type == 'article' ? (
                                            <p className="text-xs text-gray-700 md:text-sm">
                                                Membaca sebanyak{' '}
                                                {history.logs.length}x
                                            </p>
                                        ) : (
                                            <p className="text-xs text-gray-700 md:text-sm">
                                                Mendapatkan skor{' '}
                                                <b>
                                                    {calculateCorrectPercentage(
                                                        history.logs,
                                                    )}
                                                </b>{' '}
                                                poin
                                            </p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="italic text-gray-700">
                                    Belum ada riwayat
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <FooterComponent />
        </>
    );
}
