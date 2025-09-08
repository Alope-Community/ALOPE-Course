import { Course } from '@/models/Course';
import unslug from '@/tools/unslug';
import { Link } from '@inertiajs/react';
import { IconRocketFill } from 'justd-icons';

export default function CourseCardComponent({ course }: { course: Course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
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
                    #{course.category.slug}
                </small>
                <div className="mt-2 flex items-center gap-2">
                    <p className="font-semibold">{course.title}</p>
                    {course.visibility == 'private' && (
                        <span
                            className="rounded bg-[#f0c322] p-0.5"
                            title="Premium"
                        >
                            <IconRocketFill className="size-3" />
                        </span>
                    )}
                </div>
                <div className="mt-1 flex items-center gap-2">
                    <p className="text-xs font-medium italic">
                        {unslug(course.status)}
                    </p>
                    <p className="text-xs">-</p>
                    <p className="mt-1 text-xs text-gray-800">
                        {course.articles.length} Total Articles
                    </p>
                </div>
            </div>
        </Link>
    );
}
