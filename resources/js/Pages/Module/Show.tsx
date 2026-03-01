import ConfirmationDialog from '@/Components/ConfirmationDialog';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Module } from '@/models/Module';
import SideModulesSection from '@/Sections/SideModules';
import { formatDateWithTime } from '@/tools/formatDate';
import { Head, router, usePage } from '@inertiajs/react';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';
import { useState } from 'react';
import toast from 'react-hot-toast';

// const codeBlock = `from mlxtend.frequent_patterns import apriori, association_rules
// import pandas as pd

// # Sample transaction data
// transactions = [
//     ['bread', 'milk', 'beer'],
//     ['bread', 'butter', 'milk'],
//     ['beer', 'chips', 'milk'],
//     ['bread', 'butter', 'beer'],
//     ['milk', 'chips'],
//     ['bread', 'milk', 'chips', 'butter']
// ]

// # Convert to one-hot encoding
// from mlxtend.preprocessing import TransactionEncoder
// te = TransactionEncoder()
// te_ary = te.fit(transactions).transform(transactions)
// df = pd.DataFrame(te_ary, columns=te.columns_)

// # Find frequent itemsets
// frequent_itemsets = apriori(df, min_support=0.3, use_colnames=True)
// print("Frequent Itemsets:")
// print(frequent_itemsets)

// # Generate association rules
// rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.5)
// print("\nAssociation Rules:")
// print(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']])`;

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

            {/* <BreadcrumbComponent
                links={[
                    { title: 'Modules', url: '/modules' },
                    {
                        title: strLimit(module.title, 20),
                        url: `/modules/${module.slug}`,
                        active: true,
                    },
                ]}
            /> */}

            <section className="container mx-auto px-4 pb-20 md:px-10 lg:px-14 xl:px-20">
                {/* <section id="body" className="mt-20">
                    <Highlight
                        theme={themes.vsDark}
                        code={codeBlock}
                        language="python"
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
                            <img
                                src={module.cover}
                                // src={'https://alope.id/images/thumbs/lwd2.png'}
                                alt="Cover Module"
                                className="max-h-[300px] w-full rounded object-contain sm:max-h-[450px] lg:object-cover xl:max-h-[600px]"
                            />
                            <div className="flex gap-5">
                                <p className="mt-7 flex items-center gap-1 text-xs text-[#2276f0] sm:text-sm md:text-base">
                                    {/* <span className="italic underline">
                                    alope.id/articles/{article.slug}
                                    </span> */}
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
                                        {/* STATIC */}3 Menit
                                    </span>
                                </p>
                                <p className="mt-7 flex items-center gap-1 text-xs sm:text-sm md:text-base">
                                    <IconEye />
                                    <span className="font-semibold text-gray-700">
                                        {/* STATIC */}
                                        200 Views
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
                            {/* Konten */}
                            <div
                                className={`${!isJoined ? 'relative max-h-[300px] overflow-hidden' : ''}`}
                                dangerouslySetInnerHTML={{
                                    __html: module.body,
                                }}
                            />
                            {!isJoined && (
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-100 via-gray-100/90 to-transparent p-6 text-center">
                                    <button
                                        onClick={() => setShowJoinConfirm(true)}
                                        disabled={isJoining}
                                        className="rounded-md bg-[#2276f0] px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-[#1a5ec9] disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
                                    >
                                        {isJoining
                                            ? 'Bergabung...'
                                            : 'Gabung Modul ini untuk lanjut Membaca'}
                                    </button>
                                </div>
                            )}
                        </section>
                    </main>
                    <SideModulesSection modules={modules} />
                </div>
            </section>

            <FooterComponent />
        </>
    );
}
