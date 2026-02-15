import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import { Module } from '@/models/Module';
import SideModulesSection from '@/Sections/SideModules';
import { formatDateWithTime } from '@/tools/formatDate';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';

// const codeBlock = `val sendIntent = Intent(Intent.ACTION_SEND)
// ...

// val title: String = resources.getString(R.string.chooser_title)
// val chooser: Intent = Intent.createChooser(sendIntent, title)

// if (sendIntent.resolveActivity(packageManager) != null) {
//     startActivity(chooser)
// }`;

export default function ModuleShowPage({
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

            {/* <section id="body" className="mt-20">
                <Highlight
                    theme={themes.vsDark}
                    code={codeBlock}
                    language="kotlin"
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

            <section className="container mx-auto px-3 pb-20 md:px-10 xl:px-5 2xl:px-2">
                <div className="mt-10 grid grid-cols-4 gap-8 xl:gap-10">
                    <main className="col-span-4 lg:col-span-3">
                        <header>
                            <img
                                src={module.cover}
                                alt="Cover Module"
                                className="max-h-[300px] w-full rounded object-contain sm:max-h-[450px] lg:object-cover xl:max-h-[600px]"
                            />
                            <div className="flex gap-5">
                                <p className="mt-7 flex items-center gap-1 text-xs text-[#2276f0] sm:text-sm md:text-base">
                                    {' '}
                                    <IconCalendar />
                                    <span className="font-semibold text-gray-700">
                                        {formatDateWithTime(
                                            module.created_at || '',
                                        )}
                                    </span>
                                </p>
                                <p className="mt-7 flex items-center gap-1 text-xs sm:text-sm md:text-base">
                                    <IconClock />
                                    <span className="font-semibold text-gray-700">
                                        3 Menit
                                    </span>
                                </p>
                                <p className="mt-7 flex items-center gap-1 text-xs sm:text-sm md:text-base">
                                    <IconEye />
                                    <span className="font-semibold text-gray-700">
                                        {module.reads_count} Views
                                    </span>
                                </p>
                            </div>
                            <h1 className="mt-7 text-xl font-bold sm:text-2xl xl:text-3xl">
                                {module.title}
                            </h1>
                            <div className="my-7 flex gap-2 sm:items-center">
                                <div>
                                    <img
                                        src={
                                            module.writer?.profile ||
                                            'https://placehold.co/600x400?text=No+Image'
                                        }
                                        alt="ilham hafidz photo"
                                        className="size-11 rounded-full border object-cover shadow"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <p className="text-sm font-semibold text-[#2276f0] xl:text-base">
                                        {module.writer?.name}
                                    </p>
                                    <p className="hidden sm:block">&#128900;</p>
                                    <p className="text-sm text-gray-500 xl:text-base">
                                        {module.writer?.as}
                                    </p>
                                </div>
                            </div>
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
