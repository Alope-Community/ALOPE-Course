import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import BreadcrumbComponent from '@/Components/Breadcrumb';
import { Blog } from '@/models/Blog';
import SideBlogsSection from '@/Sections/SideBlogs';
import strLimit from '@/tools/strLimit';
import '../../../css/bodyContent.css';
import { useEffect } from 'react';

export default function BlogShowPage({
    blog,
    blogs,
}: {
    blog: Blog;
    blogs: Blog[];
}) {

    useEffect(() => {
        console.log('blogs', blogs);
    }, [blogs]);

    return (
        <>
            <Head title="Blog" />

            <NavbarComponent />

            <BreadcrumbComponent
                links={[
                    { title: 'Blogs', url: '/blogs' },
                    {
                        title: strLimit(blog?.title, 20),
                        url: `/blogs/${blog.slug}`,
                        active: true,
                    },
                ]}
            />

            <section className="container mx-auto px-3 md:px-10 xl:px-5 2xl:px-2">
                <section id="body" className="mt-20"></section>

                <div className="mt-10 grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <h1 className="mb-2 text-xl font-bold sm:text-2xl xl:text-3xl">
                                {blog.title}
                            </h1>

                            <img
                                src={blog.cover}
                                alt="Cover Blog"
                                className="my-6 max-h-[300px] w-full rounded object-contain sm:max-h-[450px] lg:object-cover xl:max-h-[600px]"
                            />
                        </header>

                        <section
                            id="body"
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: blog.body,
                            }}
                        ></section>
                    </main>

                    <SideBlogsSection blogs={blogs} />
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
