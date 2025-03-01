import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
// import { Highlight, themes } from 'prism-react-renderer';
import SideArticlesSection from '@/Sections/SideArticles';
import '../../../css/bodyContent.css';

// const codeBlock = `<p>Ini adalah sebuah paragraph. Teks di dalam elemen ini akan ditampilkan sebagai teks biasa.</p>`;

export default function ArticleShowPage({
    article,
    articles,
}: {
    article: Article;
    articles: Article[];
}) {
    return (
        <>
            <Head title="Article" />

            <NavbarComponent />

            <section className="container mx-auto px-3 pt-10 sm:pt-24 md:px-10 xl:px-0">
                {/* <section id="body">
                    <Highlight
                        theme={themes.vsDark}
                        code={codeBlock}
                        language="html"
                    >
                        {({
                            // className,
                            style,
                            tokens,
                            getLineProps,
                            getTokenProps,
                        }) => (
                            <pre style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line })}>
                                        <span>{i + 1}</span>
                                        {line.map((token, key) => (
                                            <span
                                                key={key}
                                                {...getTokenProps({
                                                    token,
                                                })}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </section> */}
                <BannerHorizontalComponent />
                <div className="grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <h1 className="mb-5 text-xl font-bold sm:text-2xl xl:text-3xl">
                                {article.title}
                            </h1>
                            <p className="my-3 text-xs text-[#2276f0] sm:text-sm">
                                <span className="italic underline">
                                    alope.id/articles/{article.slug}
                                </span>
                                <span className="text-gray-700">
                                    - {formatDate(article.created_at || '')}
                                </span>
                            </p>
                            <div className="mb-5 flex gap-2 sm:items-center">
                                <div>
                                    <img
                                        src="/images/ilham.jpg"
                                        alt="ilham hafidz photo"
                                        className="size-11 rounded-full border shadow"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <p className="text-sm font-semibold text-[#2276f0] xl:text-base">
                                        Ilham Hafidz
                                    </p>
                                    <p className="hidden sm:block">&#128900;</p>
                                    <p className="text-sm text-gray-500 xl:text-base">
                                        Mentor of ALOPE
                                    </p>
                                </div>
                            </div>
                            <img
                                src={article.cover}
                                alt="Cover Article"
                                className="h-[300px] w-full rounded object-cover object-[-40px] sm:h-[450px] xl:h-[600px]"
                            />
                        </header>

                        <section
                            id="body"
                            className="mt-10"
                            dangerouslySetInnerHTML={{
                                __html: article.body,
                            }}
                        ></section>
                    </main>
                    <SideArticlesSection articles={articles} />
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
