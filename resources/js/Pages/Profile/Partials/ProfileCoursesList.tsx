import { Course } from '@/models/Course';
import { History } from '@/models/History';
import { Link } from '@inertiajs/react';
import {
    IconBookOpen,
    IconGraduateCapFill,
    IconPuzzle,
    IconRocketFill,
} from 'justd-icons';

type CoursesListProps = {
    courses: Course[];
    histories: History[];
};

export default function ProfileCoursesList({
    courses,
    histories,
}: CoursesListProps) {
    const countMyHistory = (courseId: string) => {
        let count = 0;
        histories.forEach((history) => {
            if (history.logs[0].module?.course_id == courseId) {
                count++;
            }
        });
        return count;
    };

    const counter = (a: number, b: number) => a + b;

    return (
        <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-10 flex items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Kursus yang Diikuti
                    </h2>
                    <p className="text-xs text-gray-500 text-primary">
                        Pantau progres belajar Anda di setiap kelas
                    </p>
                </div>
            </div>

            <div className="grid gap-6">
                {courses.length ? (
                    courses.map((course, index) => {
                        const unitsCompleted = countMyHistory(course.id);
                        const totalUnits = counter(
                            course.modules.length,
                            course.quizzes.length,
                        );
                        const progress =
                            totalUnits > 0
                                ? Math.round(
                                      (unitsCompleted / totalUnits) * 100,
                                  )
                                : 0;

                        return (
                            <div
                                key={index}
                                className="group relative rounded-3xl border border-gray-100 bg-gray-50/50 p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                                    <div className="shrink-0 overflow-hidden rounded-2xl shadow-sm">
                                        <img
                                            src={course.cover}
                                            alt={course.title}
                                            className="h-24 w-full object-cover transition-transform group-hover:scale-110 md:w-36"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                            <div>
                                                <div className="mb-1 flex items-center gap-2">
                                                    <Link
                                                        href={`/courses/${course.slug}`}
                                                        className="text-lg font-bold text-gray-800 transition-colors hover:text-primary"
                                                    >
                                                        {course.title}
                                                    </Link>
                                                    {course.visibility ===
                                                        'private' && (
                                                        <span
                                                            title="Premium"
                                                            className="rounded bg-yellow-400 p-1 text-white shadow-sm shadow-yellow-200"
                                                        >
                                                            <IconRocketFill className="size-3" />
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex gap-4 text-xs font-medium text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <IconBookOpen className="size-3 text-primary" />{' '}
                                                        {course.modules.length}{' '}
                                                        Modul
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <IconPuzzle className="size-3 text-primary" />{' '}
                                                        {course.quizzes.length}{' '}
                                                        Quiz
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                                                    {progress}% Selesai
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                                <span>Progress Belajar</span>
                                                <span className="text-gray-600">
                                                    {unitsCompleted} /{' '}
                                                    {totalUnits} Unit
                                                </span>
                                            </div>
                                            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200/50 p-[2px]">
                                                <div
                                                    className="h-full rounded-full bg-primary shadow-sm shadow-primary/30 transition-all duration-1000"
                                                    style={{
                                                        width: `${progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-100 py-16 text-center">
                        <IconGraduateCapFill className="mb-4 size-16 text-gray-200" />
                        <p className="text-lg font-medium text-gray-400">
                            Belum ada kursus yang diikuti
                        </p>
                        <Link
                            href="/courses"
                            className="mt-4 text-sm font-bold text-primary hover:underline"
                        >
                            Cari kursus sekarang →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
