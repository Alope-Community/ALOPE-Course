import BadgeComponent from '@/Components/Badge';
import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import HorizontalArticleCardComponent from '@/Components/Cards/HorizontalArticle';
import SimpleArticleCardComponent from '@/Components/Cards/SimpleArticle';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import { Head, Link } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import Glider from 'react-glider';

export default function ArticleIndexPage({
    articles,
    lwdArticles,
}: {
    articles: Article[];
    lwdArticles: Article[];
}) {
    return (
        <>
            <Head title="Articles" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur1.svg"
                alt="blueBlur"
                className="absolute -right-20 top-0 hidden xl:block"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt="purpleBlur"
                className="absolute -top-52 left-0 hidden xl:block"
                loading="lazy"
            />

            <main className="container mx-auto grid grid-cols-4 gap-8 px-3 pt-24 md:px-10 xl:gap-10 xl:px-0">
                <section className="col-span-4 lg:col-span-3">
                    <header className="relative">
                        <img
                            src="/images/bootcamp.jpg"
                            alt=""
                            className="h-[300px] w-full rounded object-cover object-center sm:h-[450px] xl:h-[600px]"
                        />
                        <div className="-mt-1 rounded-b border border-t-0 border-[#2276f0] p-5">
                            <div className="my-4 flex gap-3 xl:my-7">
                                <BadgeComponent text="ALOPE x PBK" />
                                <BadgeComponent text="Web Programming" />
                                <BadgeComponent text="Coming Soon" />
                            </div>
                            <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl">
                                Bootcamp LWD Paguyuban Barudak Komputer
                            </h3>
                            <p className="mt-3 text-xs text-gray-700 sm:text-sm xl:text-base">
                                Modul ini dirancang untuk membantu kamu menjadi
                                seorang Fullstack Web Developer dari nol dengan
                                teknologi HTML, CSS, Bootstrap, PHP, Laravel,
                                Database, Git, dan GitHub. Anda akan belajar
                                membangun tampilan website yang responsif,
                                mengelola backend dengan PHP dan Laravel, serta
                                menyimpan data menggunakan MySQL.
                            </p>

                            <h3 className="mb-7 mt-6 font-bold sm:text-xl">
                                <span className="text-gray-500">// </span>{' '}
                                Pelajaran
                            </h3>
                            <Glider
                                draggable
                                slidesToShow={4.5}
                                slidesToScroll={1}
                                // hasArrows
                                dragVelocity={1.5}
                                responsive={[
                                    {
                                        breakpoint: 1536,
                                        settings: { slidesToShow: 3.6 },
                                    }, // Desktop
                                    // {
                                    //     breakpoint: 1280,
                                    //     settings: { slidesToShow: 2.8 },
                                    // }, // Desktop
                                    // {
                                    //     breakpoint: 1024,
                                    //     settings: { slidesToShow: 3.3 },
                                    // }, // Desktop
                                    {
                                        breakpoint: 769,
                                        settings: { slidesToShow: 2.8 },
                                    }, // Tablet
                                    {
                                        breakpoint: 450,
                                        settings: { slidesToShow: 2.5 },
                                    }, // Mobile
                                    {
                                        breakpoint: 375,
                                        settings: { slidesToShow: 1.5 },
                                    }, // Mobile
                                    {
                                        breakpoint: 100,
                                        settings: { slidesToShow: 1.2 },
                                    }, // Mobile
                                ]}
                            >
                                {lwdArticles.map((article, index) => (
                                    <SimpleArticleCardComponent
                                        key={index}
                                        props={article}
                                        withoutBorder
                                    />
                                ))}
                            </Glider>
                        </div>
                    </header>
                    <BannerHorizontalComponent />
                    <section>
                        {articles.map((article, index) => (
                            <HorizontalArticleCardComponent
                                key={index}
                                props={article}
                            />
                        ))}
                    </section>
                </section>
                <aside className="relative hidden lg:block">
                    <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                        <span className="text-gray-500">// </span> Artikel
                        Terbaru
                    </h3>
                    {articles.map(
                        (article, index) =>
                            index < 5 && (
                                <div
                                    key={index}
                                    className="mb-5 pl-4 text-sm xl:text-base"
                                >
                                    <div className="flex gap-2 text-sm">
                                        <p className="font-semibold text-[#2276f0]">
                                            CSS
                                        </p>
                                        <p>&#128900;</p>
                                        <p className="text-gray-500">
                                            {formatDate(
                                                article.created_at || '',
                                            )}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/articles/${article.slug}`}
                                        className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2"
                                    >
                                        {article.title}
                                    </Link>
                                </div>
                            ),
                    )}

                    {/*  */}

                    <section className="sticky top-24">
                        <h3 className="my-7 text-xl font-bold">
                            <span className="text-gray-500">// </span> Sorotan
                        </h3>
                        {articles.map(
                            (article, index) =>
                                index < 2 && (
                                    <SimpleArticleCardComponent
                                        key={index}
                                        props={article}
                                    />
                                ),
                        )}
                    </section>
                </aside>
            </main>

            <FooterComponent />
        </>
    );
}
