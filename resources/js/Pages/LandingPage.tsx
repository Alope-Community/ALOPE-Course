import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

export default function LandingPage() {
    return (
        <>
            <Head title="Welcome" />

            <NavbarComponent />

            <header className="relative pt-16">
                <img
                    src="/images/shapes/blueBlur.png"
                    alt=""
                    className="absolute left-0 top-0"
                />
                <img
                    src="/images/shapes/yellowBlur.png"
                    alt=""
                    className="absolute right-0 top-0"
                />
                <img
                    src="/images/shapes/purpleBlur.png"
                    alt=""
                    className="absolute -bottom-[400px] left-0"
                />
                <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-3 md:px-10 lg:flex-row xl:px-0">
                    <div className="order-2 lg:order-1 lg:w-1/2">
                        <h1 className="mb-4 text-center text-3xl font-semibold leading-snug md:text-4xl lg:text-left xl:text-6xl">
                            Upgrade <br className="hidden lg:block" />
                            <span className="font-bold text-[#2276f0]">
                                Skill Koding{' '}
                            </span>
                            disini!
                        </h1>
                        <p className="mx-auto mb-6 mt-3 w-full text-center text-sm md:mx-0 md:mb-10 md:w-[90%] md:text-base lg:text-left xl:w-[85%] xl:text-xl">
                            Belajar coding dari nol hingga mahir dengan panduan
                            lengkap, materi terstruktur, dan artikel mendalam
                            yang membantumu meningkatkan skill programming
                            secara efektif.
                        </p>
                        <div className="mt-2 flex justify-center gap-5 lg:justify-start xl:mt-14">
                            <a
                                href=""
                                className="rounded-full bg-[#2276f0] px-5 py-2 text-sm font-bold text-white shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Daftar Gratis
                            </a>
                            <a
                                href=""
                                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#2276f0] shadow hover:shadow-[#2276f0] active:scale-95 md:px-8 md:py-2.5 md:text-base"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 lg:w-1/2">
                        <img
                            src="/images/shapes/purpleText.png"
                            alt=""
                            className="absolute bottom-24 left-2 w-[120px] md:bottom-1/3 md:left-32 md:w-[170px] lg:hidden xl:left-14 xl:block xl:w-auto"
                        />
                        <img
                            src="/images/shapes/yellowText.png"
                            alt=""
                            className="absolute right-3 top-24 w-[110px] md:right-32 md:top-24 md:w-[150px] lg:hidden xl:right-20 xl:top-40 xl:block xl:w-auto"
                        />
                        <img
                            src="/images/shapes/blueText.png"
                            alt=""
                            className="absolute bottom-[40%] right-4 w-[110px] md:bottom-28 md:right-36 md:w-[150px] lg:hidden xl:bottom-[40%] xl:right-32 xl:block xl:w-auto"
                        />
                        <img
                            src="/images/header.png"
                            alt=""
                            className="mx-auto w-full md:w-[60%] lg:w-full"
                        />
                    </div>
                </div>
            </header>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FooterComponent />
        </>
    );
}
