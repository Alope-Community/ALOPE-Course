import BreadcrumbComponent from '@/Components/Breadcrumb';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

interface GlosaryDetailProps {
    glosary: {
        title: string;
        description: string;
        body: string;
        slug: string;
    };
}

export default function Show({ glosary }: GlosaryDetailProps) {
    return (
        <>
            <Head title={glosary.title} />

            <NavbarComponent />

            {/* Background dekoratif */}
            <img
                src="/images/shapes/blueBlur2.svg"
                alt="blueBlur"
                className="absolute right-0 top-0 hidden xl:block"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt="purpleBlur"
                className="absolute -top-52 left-0 hidden xl:block"
                loading="lazy"
            />

            <BreadcrumbComponent
                links={[
                    { title: 'Glosarium', url: '/courses' },
                    {
                        title: glosary.title,
                        url: `/tooltip/${glosary.slug}`,
                        active: true,
                    },
                ]}
            />

            <main className="container relative z-20 mx-auto mt-5 grid grid-cols-4 gap-8 px-3 md:px-10 xl:gap-10 xl:px-5 2xl:px-2">
                <section className="col-span-4 lg:col-span-3">
                    <div className="rounded-xl bg-white p-8 shadow-md backdrop-blur-md">
                        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">
                            {glosary.title}
                        </h1>
                        <p className="mb-6 text-justify text-base text-gray-600 md:text-left">
                            {glosary.description}
                        </p>
                        <article
                            className="prose max-w-none text-justify text-gray-800"
                            dangerouslySetInnerHTML={{ __html: glosary.body }}
                        />
                    </div>
                </section>
                <aside className="hidden lg:block">
                    <div className="rounded-xl bg-white/50 p-6 shadow-md backdrop-blur-md">
                        <h2 className="mb-3 text-lg font-semibold text-gray-800">
                            Glosarium Lainnya
                        </h2>
                        <p className="text-sm text-gray-600">
                            Konten tambahan bisa ditempatkan di sini.
                        </p>
                    </div>
                </aside>
            </main>

            <FooterComponent />
        </>
    );
}
