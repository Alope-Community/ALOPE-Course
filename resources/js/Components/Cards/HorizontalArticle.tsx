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
                className="h-[200px] w-full rounded object-cover sm:h-[240px] sm:w-[400px]"
            />
            <div className="mb-5">
                <div className="my-2 flex gap-2 text-xs xl:text-sm">
                    <p className="font-semibold text-[#2276f0]">
                        {props.course.title}
                    </p>
                    <p>&#128900;</p>
                    <p className="text-gray-500">
                        {formatDate(props.created_at || '')}
                    </p>
                </div>
                <h4 className="font-bold sm:text-xl xl:text-2xl">
                    {props.title}
                </h4>
                <p className="mt-3 text-xs text-gray-700 sm:text-sm xl:text-base">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}
