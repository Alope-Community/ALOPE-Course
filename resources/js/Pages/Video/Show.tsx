import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Video } from '@/models/Video';
import strLimit from '@/tools/strLimit';
import { Head, Link } from '@inertiajs/react';

export default function ShowVideoPage({
    video,
    videos,
}: {
    video: Video;
    videos: Video[];
}) {
    return (
        <>
            <Head title="Courses" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur2.svg"
                alt="blueBlur"
                className="absolute right-0 top-0 hidden xl:block"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt="purpleBlur"
                className="absolute -top-52 left-0 hidden xl:block"
                loading="lazy"
            />

            <BreadcrumbComponent
                links={[
                    { title: 'Course', url: '/courses' },
                    {
                        title: strLimit(video.course.title, 7),
                        url: `/courses/${video.course.slug}`,
                    },
                    { title: 'Video', url: '/courses' },
                    {
                        title: strLimit(video.title, 5),
                        url: `/videos/${video.slug}`,
                        active: true,
                    },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-10 grid gap-8 px-3 md:px-10 lg:grid-cols-7 xl:gap-10 xl:px-5 2xl:px-2">
                <div className="relative lg:col-span-2">
                    <div className="sticky top-24">
                        <div className="rounded bg-gradient-to-r from-[#5b8df3] to-[#307de9] p-5 text-white">
                            <h2 className="text-xl font-medium">
                                {video.course.title}
                            </h2>
                            <div className="mt-3 flex justify-between text-xs text-gray-100">
                                <p>{videos.length} Video</p>
                                <p>Web Programming</p>
                            </div>
                        </div>
                        <div className="mt-5 hidden flex-col gap-1 overflow-hidden rounded bg-white/30 backdrop-blur lg:flex">
                            {videos.map((vid, index) => (
                                <Link
                                    href={`/videos/${vid.slug}`}
                                    className={`${vid.slug == video.slug && 'border-l-2 border-[#5b8df3] bg-white/40'} px-3 py-2`}
                                >
                                    <div className="flex cursor-pointer justify-between">
                                        <p>{`${index + 1}. ${vid.title}`}</p>
                                        <p>{vid.duration}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded border bg-white/30 p-1 shadow">
                        <iframe
                            width="560"
                            src={video.link}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="min-h-[230px] w-full sm:h-[400px] lg:h-[400px] 2xl:h-[600px]"
                        ></iframe>
                    </div>
                    <div className="mt-5 flex flex-col gap-1 overflow-hidden rounded bg-white/30 backdrop-blur lg:hidden">
                        {videos.map((vid, index) => (
                            <Link
                                href={`/videos/${vid.slug}`}
                                className={`${vid.slug == video.slug && 'border-l-2 border-[#5b8df3] bg-white/40'} px-3 py-2`}
                            >
                                <div className="flex cursor-pointer justify-between">
                                    <p>{`${index + 1}. ${vid.title}`}</p>
                                    <p>{vid.duration}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-5 overflow-hidden rounded border bg-white/30 p-5 shadow">
                        <h2 className="text-2xl font-semibold">
                            {video.course.title}
                        </h2>
                        <p className="mt-3 text-gray-800">
                            {video.course.description}
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <BannerHorizontalComponent />
                </div>
            </main>

            <FooterComponent />
        </>
    );
}
