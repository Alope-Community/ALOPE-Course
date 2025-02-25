import BadgeComponent from '@/Components/Badge';
import BannerHorizontalComponent from '@/Components/Banners/Horizontal';
import ArticleCardComponent from '@/Components/Cards/Article';
import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

import 'glider-js/glider.min.css';
import Glider from 'react-glider';

export default function ArticleIndexPage() {
    return (
        <>
            <Head title="Articles" />

            <NavbarComponent />

            <img
                src="/images/shapes/blueBlur1.svg"
                alt=""
                className="absolute -right-20 top-0"
                loading="lazy"
            />
            <img
                src="/images/shapes/purpleBlur1.svg"
                alt=""
                className="absolute -top-52 left-0"
                loading="lazy"
            />

            <main className="container mx-auto grid grid-cols-4 gap-8 px-3 pt-24 md:px-10 xl:gap-10 xl:px-0">
                <section className="col-span-4 lg:col-span-3">
                    <header className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-[300px] w-full rounded object-cover sm:h-[450px] xl:h-[600px]"
                        />
                        <div className="-mt-1 rounded-b border border-t-0 border-[#2276f0] p-5">
                            <div className="my-4 flex gap-3 xl:my-7">
                                <BadgeComponent text="Frontend" />
                                <BadgeComponent text="Backend" />
                            </div>
                            <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </h3>
                            <p className="mt-3 text-xs text-gray-700 sm:text-sm xl:text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Enim nihil dicta, perspiciatis
                                et, facere aut, delectus mollitia architecto
                                aspernatur molestiae hic commodi nobis error
                                recusandae soluta modi facilis porro expedita!
                            </p>

                            <h3 className="mb-7 mt-6 font-bold sm:text-xl">
                                <span className="text-gray-500">// </span>{' '}
                                Highlight
                            </h3>
                            <Glider
                                draggable
                                slidesToShow={4.5}
                                slidesToScroll={1}
                                // hasArrows
                                dragVelocity={1.5}
                                responsive={[
                                    {
                                        breakpoint: 1536,
                                        settings: { slidesToShow: 3.6 },
                                    }, // Desktop
                                    // {
                                    //     breakpoint: 1280,
                                    //     settings: { slidesToShow: 2.8 },
                                    // }, // Desktop
                                    // {
                                    //     breakpoint: 1024,
                                    //     settings: { slidesToShow: 3.3 },
                                    // }, // Desktop
                                    {
                                        breakpoint: 769,
                                        settings: { slidesToShow: 2.8 },
                                    }, // Tablet
                                    {
                                        breakpoint: 450,
                                        settings: { slidesToShow: 1.3 },
                                    }, // Mobile
                                    {
                                        breakpoint: 375,
                                        settings: { slidesToShow: 1.5 },
                                    }, // Mobile
                                    {
                                        breakpoint: 100,
                                        settings: { slidesToShow: 1.2 },
                                    }, // Mobile
                                ]}
                            >
                                <ArticleCardComponent type="2" />
                                <ArticleCardComponent type="2" />
                                <ArticleCardComponent type="2" />
                                <ArticleCardComponent type="2" />
                            </Glider>
                        </div>
                    </header>
                    <BannerHorizontalComponent />
                    <section>
                        <ArticleCardComponent type="3" />
                        <ArticleCardComponent type="3" />
                        <ArticleCardComponent type="3" />
                    </section>
                </section>
                <aside className="relative hidden lg:block">
                    <h3 className="mb-7 mt-4 font-bold sm:text-xl">
                        <span className="text-gray-500">// </span> Artikel
                        Terbaru
                    </h3>
                    <div className="mb-5 pl-4 text-sm xl:text-base">
                        <div className="flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium, recusandae.
                        </p>
                    </div>
                    <div className="mb-5 pl-4 text-sm xl:text-base">
                        <div className="flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium, recusandae.
                        </p>
                    </div>
                    <div className="mb-5 pl-4 text-sm xl:text-base">
                        <div className="flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium, recusandae.
                        </p>
                    </div>
                    <div className="mb-5 pl-4 text-sm xl:text-base">
                        <div className="flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium, recusandae.
                        </p>
                    </div>
                    <div className="mb-5 pl-4 text-sm xl:text-base">
                        <div className="flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative mt-1 flex font-medium before:absolute before:-left-3.5 before:top-2 before:size-1.5 before:rounded-full before:bg-[#2276f0] before:content-[''] xl:before:size-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium, recusandae.
                        </p>
                    </div>

                    {/*  */}

                    <section className="sticky top-24">
                        <h3 className="my-7 text-xl font-bold">
                            <span className="text-gray-500">// </span> Sorotan
                        </h3>
                        <ArticleCardComponent />
                        <ArticleCardComponent />
                    </section>
                </aside>
            </main>

            <FooterComponent />
        </>
    );
}
