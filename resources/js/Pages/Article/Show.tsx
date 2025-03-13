import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import BreadcrumbComponent from '@/Components/Breadcrumb';
import { Article } from '@/models/Article';
import SideArticlesSection from '@/Sections/SideArticles';
import formatDate from '@/tools/formatDate';
import { IconCalendar } from 'justd-icons';
// import { Highlight, themes } from 'prism-react-renderer';
import '../../../css/bodyContent.css';

// const codeBlock = `<form action="/submit" method="post">
//     <label for="nama">Nama:</label><br>
//     <input type="text" id="nama" name="nama"><br><br>

//     <label for="email">Email:</label><br>
//     <input type="email" id="email" name="email"><br><br>

//     <label for="password">Password:</label><br>
//     <input type="password" id="password" name="password"><br><br>

//     <label for="gender">Jenis Kelamin:</label><br>
//     <input type="radio" id="male" name="gender" value="Laki-laki">
//     <label for="male">Laki-laki</label>
//     <input type="radio" id="female" name="gender" value="Perempuan">
//     <label for="female">Perempuan</label><br><br>

//     <label for="hobby">Hobi:</label><br>
//     <input type="checkbox" id="hobby1" name="hobby" value="Membaca">
//     <label for="hobby1">Membaca</label>
//     <input type="checkbox" id="hobby2" name="hobby" value="Olahraga">
//     <label for="hobby2">Olahraga</label><br><br>

//     <label for="birthdate">Tanggal Lahir:</label><br>
//     <input type="date" id="birthdate" name="birthdate"><br><br>

//     <label for="file">Upload Dokumen:</label><br>
//     <input type="file" id="file" name="file"><br><br>

//     <button type="submit">Kirim</button>
//     <button type="reset">Reset</button>
// </form>`;
// const codeBlock = `<p class="paragraf-utama">Ini adalah paragraf utama.</p>
// <div id="sidebar">Ini adalah sidebar.</div>`;

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

            <BreadcrumbComponent
                links={[
                    { title: 'Articles', url: '/articles' },
                    {
                        title: 'Article Detail',
                        url: `/articles/${article.slug}`,
                        active: true,
                    },
                ]}
            />

            <section className="container mx-auto px-3 md:px-10 xl:px-5 2xl:px-2">
                {/* <section id="body" className="mt-20">
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
                {/* <BannerHorizontalComponent /> */}

                <div className="mt-10 grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <h1 className="mb-2 text-xl font-bold sm:text-2xl xl:text-3xl">
                                {article.title}
                            </h1>
                            <p className="my-3 flex items-center gap-1 text-xs text-[#2276f0] sm:text-sm">
                                {/* <span className="italic underline">
                                    alope.id/articles/{article.slug}
                                </span> */}
                                <IconCalendar />
                                <span className="text-gray-700">
                                    {formatDate(article.created_at || '')}
                                </span>
                            </p>
                            <div className="my-7 flex gap-2 sm:items-center">
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
