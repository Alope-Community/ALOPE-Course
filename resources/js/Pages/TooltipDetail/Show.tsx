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

            {/* Navbar */}
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

            {/* Breadcrumb */}
            <BreadcrumbComponent
                links={[
                    { title: 'Glosarium', url: '/glosarium' },
                    {
                        title: glosary.title,
                        url: `/tooltip/${glosary.slug}`,
                        active: true,
                    },
                ]}
            />

            {/* Konten utama di tengah */}
            <main className="relative z-20 mx-auto mt-10 flex min-h-screen justify-center overflow-x-hidden px-3 md:px-10 xl:px-5 2xl:px-2">
                <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-md">
                    {/* Judul di tengah */}
                    <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">
                        {glosary.title}
                    </h1>

                    {/* Deskripsi di kiri */}
                    <p className="mb-6 text-justify text-base text-gray-600 md:text-left">
                        {glosary.description}
                    </p>

                    {/* Body di kiri */}
                    <article
                        className="prose max-w-none text-justify text-gray-800"
                        dangerouslySetInnerHTML={{ __html: glosary.body }}
                    />
                </div>
            </main>

            {/* Footer */}
            <FooterComponent />
        </>
    );
}
