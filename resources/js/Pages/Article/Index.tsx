import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import BreadcrumbComponent from '@/Components/Breadcrumb';
import HorizontalArticleCardComponent from '@/Components/Cards/HorizontalArticle';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Article } from '@/models/Article';
import SideArticlesSection from '@/Sections/SideArticles';
import { Inertia, Method } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import { useEffect, useState } from 'react';

export default function ArticleIndexPage({
    articles,
    lwdArticles,
}: {
    articles: Article[];
    lwdArticles: Article[];
}) {
    const queryParams = new URLSearchParams(window.location.search);

    const { props } = usePage();
    const searchQuery = (props as any).search || ''; // Ambil search dari props
    const [query, setQuery] = useState(searchQuery);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            Inertia.visit(route('articles.index'), {
                method: Method.GET,
                data: { q: query },
                preserveState: true,
                preserveScroll: true,
                replace: true,
                only: ['articles'], // Pastikan ini sesuai dengan nama di backend
            });
        }
    };

    useEffect(() => {
        setQuery(searchQuery); // Pastikan query tetap sinkron
        console.log('search q', searchQuery);
    }, [searchQuery]);

    return (
        <>
            <Head title="Articles" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur2.svg"
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

            <BreadcrumbComponent
                links={[{ title: 'Articles', url: '/articles', active: true }]}
            />

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="col-span-4 lg:col-span-3">
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
                <SideArticlesSection articles={articles} />
            </main>

            <FooterComponent />
        </>
    );
}
