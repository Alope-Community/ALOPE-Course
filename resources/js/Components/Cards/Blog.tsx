import NewPrimaryButton from '@/Components/NewPrimaryButton';
import { Blog } from '@/models/Blog';
import { Link } from '@inertiajs/react';

export default function SimpleBlogCardComponent({
    props,
    tag = 'Blog',
    tagColor = 'bg-blue-100 text-blue-600',
}: {
    props: Blog;
    tag?: string;
    tagColor?: string;
}) {
    return (
        <Link
            href={`/blogs/${props.slug}`}
            className="block w-full max-w-md overflow-hidden rounded-2xl border-2 border-gray-300 bg-white transition"
        >
            {/* Gambar full di atas */}
            <img
                src={props.cover}
                alt={props.title}
                className="h-48 w-full object-cover"
                width={1280}
                height={720}
            />

            {/* Konten card */}
            <div className="p-5">
                <span
                    className={`mb-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${tagColor}`}
                >
                    {tag}
                </span>

                <p className="mb-2 text-xl font-semibold">{props.title}</p>

                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                    {props.description}
                </p>

                <NewPrimaryButton
                    text="Baca Selengkapnya"
                    showIcon
                    circleIcon
                    className="!px-4 !py-2 text-sm"
                    onClick={(e) => e.preventDefault()}
                />
            </div>
        </Link>
    );
}
