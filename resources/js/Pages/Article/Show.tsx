import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import ArticleCardComponent from '@/Components/Cards/Articles';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';

import { Article } from '@/models/Article';
import formatDate from '@/tools/formatDate';
import '../../../css/bodyContent.css';

// const codeBlock = ` <a href="https://www.contoh.com">Kunjungi Situs Contoh</a>
// <a href="#bagian-tertentu">Menuju Bagian Tertentu</a>`;

export default function ArticleShowPage({ article }: { article: Article }) {
    return (
        <>
            <Head title="Article" />

            <NavbarComponent />

            <section className="container mx-auto px-3 pt-10 sm:pt-24 md:px-10 xl:px-0">
                {/* <section id="body">
                    <Highlight
                        theme={themes.vsDark}
                        code={codeBlock}
                        language="css"
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
                                className="h-[300px] w-full rounded object-cover sm:h-[450px] xl:h-[600px]"
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
                    <aside className="relative hidden lg:block">
                        <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                            <span className="text-gray-500">// </span> Artikel
                            Terbaru
                        </h3>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    CSS
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    26 Februari Pukul 13:22
                                </p>
                            </div>
                            <Link
                                href="/articles/css-pseudo-classuuntuk-membuat-website-lebih-interaktif"
                                className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2"
                            >
                                CSS Pseudo Class untuk Membuat Website Lebih
                                Interaktif
                            </Link>
                        </div>
                        <div className="mb-5 pl-4 text-sm xl:text-base">
                            <div className="flex gap-2 text-sm">
                                <p className="font-semibold text-[#2276f0]">
                                    ALOPE
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">Coming Soon</p>
                            </div>
                            <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                                Coming Soon, Stay Tune at ALOPE
                            </p>
                        </div>

                        {/*  */}

                        <section className="sticky top-24">
                            <h3 className="my-7 text-xl font-bold">
                                <span className="text-gray-500">// </span>{' '}
                                Sorotan
                            </h3>
                            <ArticleCardComponent />
                            {/* <ArticleCardComponent /> */}
                        </section>
                    </aside>
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
