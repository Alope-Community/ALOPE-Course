import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import { Link } from '@inertiajs/react';

export default function SimpleArticleCardComponent({
    props,
}: {
    props: Article;
}) {
    return (
        <Link href={`articles/${props.slug}`} className="shadow">
            <img
                src={props.cover}
                alt="article cover"
                className="h-[150px] w-full rounded object-cover xl:h-[200px]"
            />
            <div className="-mt-1 mb-5 rounded-b border border-t-0 border-[#2276f0] p-4 text-sm xl:p-5 xl:text-base">
                <div className="mb-2 flex gap-2 text-sm">
                    <p className="font-semibold text-[#2276f0]">CSS</p>
                    <p>&#128900;</p>
                    <p className="text-gray-500">
                        {formatDate(props.created_at || '')}
                    </p>
                </div>
                <p className="relative flex font-medium">{props.title}</p>
            </div>
        </Link>
    );
}
