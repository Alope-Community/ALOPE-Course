import { Blog } from '@/models/Blog';
import { Link } from '@inertiajs/react';

export default function SimpleBlogCardComponent({
    props,
    withoutBorder = false,
}: {
    props: Blog;
    withoutBorder?: boolean;
}) {
    return (
        <Link
            href={`/blogs/${props.slug}`}
            className={`${!withoutBorder && 'shadow'} mr-5`}
        >
            <img
                src={props.cover}
                alt="blog cover"
                className="max-h-[150px] w-full rounded 2xl:max-h-[200px]"
                width={1280}
                height={720}
            />
            <div
                className={`-mt-1 rounded-b text-sm xl:text-base ${
                    !withoutBorder
                        ? 'border border-t-0 border-[#2276f0] p-4 2xl:p-5'
                        : 'px-1 py-2 xl:py-4'
                }`}
            >
                <p className="relative flex font-medium">{props.title}</p>
            </div>
        </Link>
    );
}
