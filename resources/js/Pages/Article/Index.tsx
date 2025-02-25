import BadgeComponent from '@/Components/Badge';
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

            <main className="container mx-auto grid grid-cols-4 gap-8 px-3 pt-24 md:px-10 xl:gap-10 xl:px-0">
                <section className="col-span-4 lg:col-span-3">
                    <header>
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
                    <div className="relative mb-10 mt-20 flex items-center justify-center rounded bg-gradient-to-r from-[#5b8df3] to-[#307de9] p-7 text-gray-100 sm:p-10">
                        <img
                            src="/images/character.png"
                            alt=""
                            className="absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 sm:left-0 sm:w-[220px] sm:translate-x-0 xl:w-[250px]"
                        />
                        <div className="relative z-10 flex items-center gap-6">
                            <h3 className="text-center text-xl font-semibold sm:text-2xl xl:text-3xl">
                                Tempatnya Belajar Koding
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="hidden size-3 sm:block sm:size-5 xl:size-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <section>
                        <ArticleCardComponent type="3" />
                        <ArticleCardComponent type="3" />
                        <ArticleCardComponent type="3" />
                    </section>
                </section>
                <aside className="hidden lg:block">
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

                    <h3 className="my-7 text-xl font-bold">
                        <span className="text-gray-500">// </span> Sorotan
                    </h3>
                    <ArticleCardComponent />
                    <ArticleCardComponent />
                    <ArticleCardComponent />
                </aside>
            </main>

            <FooterComponent />
        </>
    );
}
