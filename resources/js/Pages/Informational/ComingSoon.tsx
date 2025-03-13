import { Link } from '@inertiajs/react';

export default function ComingSoonPage() {
    return (
        <main className="relative flex h-screen max-h-screen w-full items-center justify-center overflow-y-hidden">
            <img
                src="/images/shapes/blueBlur1.svg"
                alt="blue blur"
                className="absolute left-0 top-0"
                loading="lazy"
            />
            <img
                src="/images/shapes/yellowBlur1.svg"
                alt="yellow blur"
                className="absolute right-0 top-0"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt="purple blur"
                className="absolute -bottom-[400px] left-0"
                loading="lazy"
            />
            <div className="px-3 text-center md:px-10 lg:w-1/2 lg:px-0">
                <h1 className="mb-5 text-4xl font-black uppercase tracking-wider text-[#2276f0] md:text-7xl">
                    Coming Soon
                </h1>
                <p className="text-sm text-gray-800 md:text-base">
                    Kami sedang mempersiapkan sesuatu yang luar biasa untuk
                    Anda! 🚀✨ Tetap pantau website kami untuk pembaruan terbaru
                    dan jangan lewatkan peluncurannya.
                </p>

                <Link
                    href="/"
                    className="relative mt-10 inline-block rounded-full bg-[#2276f0] px-5 py-2 text-sm font-bold text-white shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </main>
    );
}
