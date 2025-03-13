import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import { Link } from '@inertiajs/react';

export default function HorizontalArticleCardComponent({
    props,
}: {
    props: Article;
}) {
    return (
        <Link
            href={`articles/${props.slug}`}
            className="mb-7 flex flex-col items-center gap-6 sm:mb-5 sm:flex-row"
        >
            <img
                src={props.cover}
                alt="article cover"
                className="h-[200px] w-full rounded object-cover object-left sm:h-[240px] sm:w-[400px] sm:min-w-[400px] sm:max-w-[400px] lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] xl:w-[400px] xl:min-w-[400px] xl:max-w-[400px]"
                width={1280}
                height={720}
            />
            <div className="mb-5">
                <div className="my-2 flex gap-2 text-xs xl:text-sm">
                    <p className="text-xs font-semibold text-[#2276f0] md:text-sm">
                        {props.course.title}
                    </p>
                    <p>&#128900;</p>
                    <p className="text-xs text-gray-500 md:text-sm">
                        {formatDate(props.created_at || '')}
                    </p>
                </div>
                <p className="font-bold sm:text-xl xl:text-2xl">
                    {props.title}
                </p>
                <p className="mt-3 text-sm text-gray-700 xl:text-base">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}
