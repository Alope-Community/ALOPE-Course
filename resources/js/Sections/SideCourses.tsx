import { Course } from '@/models/Course';
import { Link } from '@inertiajs/react';

export default function SideCoursesSection({ courses }: { courses: Course[] }) {
    return (
        <aside className="relative hidden lg:block">
            <section className="sticky top-24">
                {courses.length ? (
                    <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                        <span className="text-gray-500">// </span> Other Course
                    </h3>
                ) : (
                    ''
                )}

                {courses.map(
                    (course, index) =>
                        index < 2 && (
                            <Link
                                href={`/courses/${course.slug}`}
                                key={index}
                                className={`mr-5 overflow-hidden rounded-md bg-gray-50 shadow`}
                            >
                                <img
                                    src={course.cover}
                                    alt="course cover"
                                    className="max-h-[150px] w-full rounded 2xl:max-h-[200px]"
                                    width={1280}
                                    height={720}
                                />
                                <div className="rounded-b-md border border-t-0 border-[#2276f0] px-3 pb-3 pt-2">
                                    <small className="text-xs italic text-[#2276f0]">
                                        #web-programing
                                    </small>
                                    <p className="mt-2 font-semibold">
                                        {course.title}
                                    </p>
                                    <div className="mt-1 flex items-center gap-2">
                                        <p className="text-xs font-medium italic">
                                            On Going
                                        </p>
                                        <p className="text-xs">-</p>
                                        <p className="mt-1 text-xs text-gray-800">
                                            {course.articles.length} Total
                                            Articles
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ),
                )}
            </section>
        </aside>
    );
}
