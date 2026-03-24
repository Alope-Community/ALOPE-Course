import ConfirmationDialog from '@/Components/ConfirmationDialog';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar/Navbar';

import { Module } from '@/models/Module';
import SideModulesSection from '@/Sections/SideModules';
import { formatDateWithTime } from '@/tools/formatDate';
import { Head, router, usePage } from '@inertiajs/react';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';
import { useState } from 'react';
import toast from 'react-hot-toast';

// const codeBlock = `listHeroAdapter.setOnItemClickCallback(object : ListHeroAdapter.OnItemClickCallback {
//     override fun onItemClicked(data: Hero) {
//         ...
//     }
// })`;

export default function ModuleShowPage({
    module,
    modules,
    isJoined = true,
}: {
    module: Module;
    modules: Module[];
    isJoined?: boolean;
}) {
    const { auth } = usePage().props as any;
    const [isJoining, setIsJoining] = useState(false);
    const [showJoinConfirm, setShowJoinConfirm] = useState(false);

    const handleJoinModule = () => {
        if (!auth.user) {
            setShowJoinConfirm(false);
            router.visit('/login');
            return;
        }

        setIsJoining(true);
        router.post(
            `/modules/${module.slug}/join`,
            {},
            {
                onSuccess: () => {
                    toast.success('Berhasil bergabung dengan modul!');
                    setShowJoinConfirm(false);
                },
                onError: () => {
                    toast.error('Gagal bergabung dengan modul');
                },
                onFinish: () => {
                    setIsJoining(false);
                },
            },
        );
    };

    return (
        <>
            <Head title="Modul" />

            <NavbarComponent />

            <ConfirmationDialog
                isOpen={showJoinConfirm}
                title="Konfirmasi Bergabung"
                message={
                    <>
                        Apakah kamu yakin ingin bergabung ke modul{' '}
                        <b>{module.title}</b>?
                    </>
                }
                confirmLabel="Ya, Gabung"
                cancelLabel="Batal"
                onConfirm={handleJoinModule}
                onCancel={() => setShowJoinConfirm(false)}
                isLoading={isJoining}
            />
            {/*  
            <section id="body" className="mt-20">
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
                            {/* <img
                                src={module.cover}
                                alt="Cover Module"
                                className="max-h-[300px] w-full rounded object-contain sm:max-h-[450px] lg:object-cover xl:max-h-[600px]"
                            /> */}
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

                        <section id="body" className="relative mt-5">
                            <div
                                className={`relative ${
                                    !isJoined ? 'overflow-hidden' : ''
                                }`}
                            >
                                {/* Konten */}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: isJoined
                                            ? module.body
                                            : module.body_preview,
                                    }}
                                />

                                {!isJoined && (
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-100 via-gray-100/90 to-transparent p-6 text-center">
                                        <button
                                            onClick={() =>
                                                setShowJoinConfirm(true)
                                            }
                                            disabled={isJoining}
                                            className="rounded-md bg-[#2276f0] px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-[#1a5ec9] disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
                                        >
                                            {isJoining
                                                ? 'Bergabung...'
                                                : 'Gabung Modul ini untuk lanjut Membaca'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                    <SideModulesSection modules={modules} />
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
