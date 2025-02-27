import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import { Link } from '@inertiajs/react';

export default function SimpleArticleCardComponent({
    props,
    withoutBorder = false,
}: {
    props: Article;
    withoutBorder?: boolean;
}) {
    return (
        <Link
            href={`articles/${props.slug}`}
            className={`${!withoutBorder && 'shadow'} mr-5`}
        >
            <img
                src={props.cover}
                alt="article cover"
                className="h-[150px] w-full rounded object-cover xl:h-[200px]"
            />
            <div
                className={`-mt-1 rounded-b text-sm xl:text-base ${!withoutBorder ? 'border border-t-0 border-[#2276f0] p-4 xl:p-5' : 'px-1 py-2 xl:py-4'}`}
            >
                <div className="mb-2 flex flex-col gap-1 text-sm md:flex-row md:gap-2">
                    <p className="font-semibold text-[#2276f0]">
                        {props.course.title}
                    </p>
                    <p className="hidden md:block">&#128900;</p>
                    <p className="text-xs text-gray-500 md:text-base">
                        {formatDate(props.created_at || '')}
                    </p>
                </div>
                <p className="relative flex font-medium">{props.title}</p>
            </div>
        </Link>
    );
}
