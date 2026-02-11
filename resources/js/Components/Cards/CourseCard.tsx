import { Course } from '@/models/Course';
import { Link } from '@inertiajs/react';
import { IconCartFill, IconLayersFill, IconRocketFill } from 'justd-icons';
import NewPrimaryButton from '../NewPrimaryButton';

export default function CourseCardComponent({ course }: { course: Course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl"
        >
            {/* Cover */}
            <div className="aspect-[16/9] w-full overflow-hidden bg-blue-500">
                <img
                    src={course.cover}
                    // src={'/images/thumb.png'}
                    alt={course.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-6 py-6">
                <small className="text-xs italic text-[#2276f0]">
                    #{course.category.slug}
                </small>

                {/* Title */}
                <div className="mt-2 flex items-center gap-2">
                    <p className="line-clamp-2 text-lg font-semibold text-gray-900">
                        {course.title}
                    </p>

                    {course.visibility === 'private' && (
                        <span
                            className="rounded bg-[#f0c322] p-1"
                            title="Premium"
                        >
                            <IconRocketFill className="size-3" />
                        </span>
                    )}
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    {/* <div className="flex items-center gap-1">
                        <IconStarFill className="size-4 text-yellow-500" />
                        <span>4.8 (230)</span>
                    </div> */}

                    <div className="flex items-center gap-1">
                        <IconLayersFill className="size-4 text-orange-500" />
                        <span>{course.modules.length} Modul</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <IconCartFill className="size-4 text-green-500" />
                        <span>Pemula</span>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
                    {course.description ||
                        'Pelajari materi dengan pendekatan terstruktur dan mudah dipahami.'}
                </p>

                {/* Button */}
                <div className="mt-auto pt-6">
                    <NewPrimaryButton
                        text="Belajar sekarang"
                        circleIcon
                        showIcon
                    />
                </div>
            </div>
        </Link>
    );
}
