import { Article } from '@/models/Article';
import { formatDateWithTime } from '@/tools/formatDate';
import { Link } from '@inertiajs/react';
import { IconRocketFill } from 'justd-icons';

export default function HorizontalArticleCardComponent({
    props,
}: {
    props: Article;
}) {
    return (
        <Link
            href={`/modules/${props.slug}`}
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
                {props.course ? (
                    <div className="my-2 flex gap-2 text-xs xl:text-sm">
                        <Link
                            href={`/courses/${props.course.slug}`}
                            className="flex items-center gap-2"
                        >
                            {props.course.visibility == 'private' && (
                                <span
                                    title="Premium"
                                    className="rounded bg-[#f0c322] p-0.5"
                                >
                                    <IconRocketFill className="size-3" />
                                </span>
                            )}
                            <p className="text-xs font-semibold text-[#2276f0] md:text-sm">
                                {props.course.title}
                            </p>
                        </Link>
                        <p>&#128900;</p>
                        <p className="text-xs text-gray-500 md:text-sm">
                            {formatDateWithTime(props.created_at || '')}
                        </p>
                    </div>
                ) : (
                    ''
                )}
                <p className="font-bold sm:text-xl xl:text-2xl">
                    {props.title}
                </p>
                {!props.course ? (
                    <p className="mt-2 text-xs text-gray-500 md:text-sm">
                        {formatDateWithTime(props.created_at || '')}
                    </p>
                ) : (
                    ''
                )}
                <p className="mt-3 text-sm text-gray-700 xl:text-base">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}
