import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import BreadcrumbComponent from '@/Components/Breadcrumb';
import { Module } from '@/models/Module';
import SideModulesSection from '@/Sections/SideModules';
import { formatDateWithTime } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { IconCalendar } from 'justd-icons';
import '../../../css/bodyContent.css';

// const codeBlock = `<div class="container">
//   <div class="header">Header</div>
//   <div class="sidebar">Sidebar</div>
//   <div class="main">Main Content</div>
//   <div class="footer">Footer</div>
// </div>`;

export default function ArticleShowPage({
    module,
    modules,
}: {
    module: Module;
    modules: Module[];
}) {
    return (
        <>
            <Head title="Modul" />

            <NavbarComponent />

            <BreadcrumbComponent
                links={[
                    { title: 'Modules', url: '/modules' },
                    {
                        title: strLimit(module.title, 20),
                        url: `/modules/${module.slug}`,
                        active: true,
                    },
                ]}
            />

            <section className="container mx-auto px-3 md:px-10 xl:px-5 2xl:px-2">
                <section id="body" className="mt-20">
                    {/* <Highlight
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
                    </Highlight> */}
                </section>
                {/* <BannerHorizontalComponent /> */}

                <div className="mt-10 grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <h1 className="mb-2 text-xl font-bold sm:text-2xl xl:text-3xl">
                                {module.title}
                            </h1>
                            <p className="my-3 flex items-center gap-1 text-xs text-[#2276f0] sm:text-sm">
                                {/* <span className="italic underline">
                                    alope.id/articles/{article.slug}
                                </span> */}
                                <IconCalendar />
                                <span className="text-gray-700">
                                    {formatDateWithTime(
                                        module.created_at || '',
                                    )}
                                </span>
                            </p>
                            <div className="my-7 flex gap-2 sm:items-center">
                                <div>
                                    <img
                                        src={module.writer.profile}
                                        alt="ilham hafidz photo"
                                        className="size-11 rounded-full border shadow"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <p className="text-sm font-semibold text-[#2276f0] xl:text-base">
                                        {module.writer.name}
                                    </p>
                                    <p className="hidden sm:block">&#128900;</p>
                                    <p className="text-sm text-gray-500 xl:text-base">
                                        {module.writer.as}
                                    </p>
                                </div>
                            </div>
                            <img
                                src={module.cover}
                                // src={'https://alope.id/images/thumbs/lwd2.png'}
                                alt="Cover Module"
                                className="max-h-[300px] w-full rounded object-contain sm:max-h-[450px] lg:object-cover xl:max-h-[600px]"
                            />
                        </header>

                        <section
                            id="body"
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: module.body,
                            }}
                        ></section>
                    </main>
                    <SideModulesSection modules={modules} />
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
