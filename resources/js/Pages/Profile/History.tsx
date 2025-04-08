import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import { Head, Link } from '@inertiajs/react';

export default function HistoryPage({
    reads,
}: {
    reads: [
        {
            article: Article;
            reads: [
                { user_id: number; article_id: string; created_at: string },
            ];
        },
    ];
}) {
    console.log(reads);

    return (
        <>
            <Head title="History" />

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
                    {
                        title: 'Profile',
                        url: '/profile/history',
                        active: false,
                    },
                    { title: 'History', url: '/profile/history', active: true },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-10 grid gap-8 px-3 md:px-10 lg:grid-cols-3 xl:grid-cols-2 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="rounded-lg bg-white/50 p-5 shadow backdrop-blur lg:col-span-2 xl:col-span-1">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        <span className="text-gray-400">//</span> Riwayat
                        Aktifitas
                    </h2>
                    <div className="relative mt-10 border-l border-gray-300 md:ml-4">
                        {reads.length ? (
                            reads.map((read, index) => (
                                <div key={index} className="mb-10 ml-6">
                                    <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-[#2276f0]"></div>
                                    <time className="text-xs text-gray-500 md:text-sm">
                                        {formatDate(read.reads[0].created_at)}
                                    </time>
                                    <Link
                                        href={`/articles/${read.article.slug}`}
                                        className="block font-medium text-gray-900 md:text-lg"
                                    >
                                        {read.article.title}
                                    </Link>
                                    <p className="text-xs text-gray-700 md:text-sm">
                                        Membaca sebanyak {read.reads.length}x
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="italic text-gray-700">
                                Belum ada riwayat
                            </p>
                        )}
                    </div>
                </section>
            </main>

            <FooterComponent />
        </>
    );
}
