import BadgeComponent from '@/Components/Badge';
import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import HorizontalArticleCardComponent from '@/Components/Cards/HorizontalArticle';
import SimpleArticleCardComponent from '@/Components/Cards/SimpleArticle';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import SideArticlesSection from '@/Sections/SideArticles';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { useState } from 'react';
import Glider from 'react-glider';

export default function ArticleIndexPage({
    articles,
    lwdArticles,
}: {
    articles: Article[];
    lwdArticles: Article[];
}) {
    const { props } = usePage();
    const searchQuery = (props as any).search || ''; // Ambil search dari props
    const [query, setQuery] = useState(searchQuery);

    //
    const queryParams = new URLSearchParams(window.location.search);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        // Update URL tanpa reload halaman
        Inertia.get(
            route('articles.index'),
            { q: newQuery },
            { preserveState: true, replace: true },
        );
    };

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

            <main className="container relative z-20 mx-auto grid grid-cols-4 gap-8 px-3 pt-24 md:px-10 xl:gap-10 xl:px-0">
                <section className="col-span-4 lg:col-span-3">
                    {queryParams.toString() == '' && (
                        <header className="relative">
                            <img
                                src="https://alope.id/images/banner.png"
                                alt=""
                                className="h-[250px] w-full rounded object-cover object-center sm:h-[450px] xl:h-[600px]"
                            />
                            <div className="-mt-1 rounded-b border border-t-0 border-[#2276f0] p-5">
                                <div className="my-4 flex gap-3 xl:my-7">
                                    <BadgeComponent text="ALOPE x PBK" />
                                    <BadgeComponent text="Web Programming" />
                                    {/* <BadgeComponent text="Coming Soon" /> */}
                                </div>
                                <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl">
                                    Bootcamp LWD Paguyuban Barudak Komputer
                                </h3>
                                <p className="mt-3 text-sm text-gray-700 sm:text-sm xl:text-base">
                                    Modul ini dirancang untuk membantu kamu
                                    menjadi seorang Fullstack Web Developer dari
                                    nol dengan teknologi HTML, CSS, Bootstrap,
                                    PHP, Laravel, Database, Git, dan GitHub.
                                    Anda akan belajar membangun tampilan website
                                    yang responsif, mengelola backend dengan PHP
                                    dan Laravel, serta menyimpan data
                                    menggunakan MySQL.
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
                    )}
                    <BannerHorizontalComponent />
                    <input
                        type="text"
                        placeholder="Cari artikel..."
                        value={query}
                        onChange={handleSearch}
                        className="w-full rounded-md border p-2"
                    />
                    <section>
                        {articles.map((article, index) => (
                            <HorizontalArticleCardComponent
                                key={index}
                                props={article}
                            />
                        ))}
                    </section>
                </section>
                <SideArticlesSection articles={articles} />
            </main>

            <FooterComponent />
        </>
    );
}
