import SimpleBlogCardComponent from '@/Components/Cards/SimpleBlog';
import { Blog } from '@/models/Blog';
import { Link } from '@inertiajs/react';

export default function SideBlogsSection({
    blogs,
}: {
    blogs: Blog[];
}) {
    return (
        <aside className="relative hidden lg:block">
            <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                <span className="text-gray-500">// </span> Blog Terbaru
            </h3>

            {blogs.map(
                (blog, index) =>
                    index < 5 && (
                        <div
                            key={index}
                            className="mb-5 pl-4 text-sm xl:text-base"
                        >
                            <Link
                                href={`/blogs/${blog.slug}`}
                                className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2"
                            >
                                {blog.title}
                            </Link>
                        </div>
                    ),
            )}

            <section className="sticky top-24">
                <h3 className="my-7 text-xl font-bold">
                    <span className="text-gray-500">// </span> Sorotan
                </h3>
                {blogs.map(
                    (blog, index) =>
                        index < 2 && (
                            <SimpleBlogCardComponent
                                key={index}
                                props={blog}
                            />
                        ),
                )}
            </section>
        </aside>
    );
}
