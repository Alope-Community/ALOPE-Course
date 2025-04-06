import { Quiz } from '@/models/Quiz';
import formatDate from '@/tools/formatDate';
import { Link } from '@inertiajs/react';

export default function HorizontalQuizCardComponent({
    props,
}: {
    props: Quiz;
}) {
    return (
        <Link
            href={`/quizzes/${props.slug}`}
            className="mb-7 flex flex-col items-center gap-5 sm:mb-5 sm:flex-row"
        >
            <img
                src={props.cover}
                alt="article cover"
                className="w-full rounded object-contain object-left sm:w-[400px] sm:min-w-[400px] sm:max-w-[400px] lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] xl:w-[400px] xl:min-w-[400px] xl:max-w-[400px]"
                width={1280}
                height={720}
            />
            <div className="mb-5">
                <p className="font-bold sm:text-xl xl:text-2xl">
                    {props.title}
                </p>
                <p className="mt-2 text-xs text-gray-500 md:text-sm">
                    {formatDate(props.created_at || '')}
                </p>
                <p className="mt-3 text-sm text-gray-700 xl:text-base">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}
