import SimpleArticleCardComponent from '@/Components/Cards/SimpleArticle';
import { Article } from '@/models/Article';
import { formatDateWithTime } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';

export default function SideArticlesSection({
    articles,
}: {
    articles: Article[];
}) {
    return (
        <aside className="relative hidden lg:block">
            <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                <span className="text-gray-500">// </span> Artikel Terbaru
            </h3>
            {articles.map(
                (article, index) =>
                    index < 5 && (
                        <div
                            key={index}
                            className="mb-5 pl-4 text-sm xl:text-base"
                        >
                            <div className="flex gap-2 text-sm">
                                <p
                                    className="font-semibold text-[#2276f0]"
                                    title={article.course.title}
                                >
                                    {strLimit(article.course.title, 15)}
                                </p>
                                <p>&#128900;</p>
                                <p className="text-gray-500">
                                    {formatDateWithTime(
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
    );
}
