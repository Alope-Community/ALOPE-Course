import { Link } from '@inertiajs/react';

export default function ArticlesCardComponent({
    type = '1',
}: {
    type?: '1' | '2' | '3';
}) {
    return (
        <>
            {type == '1' ? (
                <Link
                    href="articles/css-pseudo-classuuntuk-membuat-website-lebih-interaktif"
                    className="shadow"
                >
                    <img
                        src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[150px] w-full rounded object-cover xl:h-[200px]"
                    />
                    <div className="-mt-1 mb-5 rounded-b border border-t-0 border-[#2276f0] p-4 text-sm xl:p-5 xl:text-base">
                        <div className="mb-2 flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">
                                26 Februari Pukul 13:22
                            </p>
                        </div>
                        <p className="relative flex font-medium">
                            CSS Pseudo Class untuk Membuat Website Lebih
                            Interaktif
                        </p>
                    </div>
                </Link>
            ) : type == '2' ? (
                <Link
                    href="articles/css-pseudo-classuuntuk-membuat-website-lebih-interaktif"
                    className="mr-4"
                >
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[150px] w-full rounded object-cover sm:h-[170px]"
                    />
                    <div className="mb-5">
                        <div className="my-2 flex gap-2 text-xs sm:text-sm">
                            <p className="text-sm font-semibold text-[#2276f0] xl:text-base">
                                ALOPE
                            </p>
                            <p>&#128900;</p>
                            <p className="text-sm text-gray-500 xl:text-base">
                                Coming Soon
                            </p>
                        </div>
                        <p className="relative flex text-xs font-medium sm:text-sm xl:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Link>
            ) : (
                <Link
                    href="articles/css-pseudo-classuuntuk-membuat-website-lebih-interaktif"
                    className="mb-7 flex flex-col items-center gap-6 sm:mb-5 sm:flex-row"
                >
                    <img
                        src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[200px] w-full rounded object-cover sm:h-[240px] sm:w-[400px]"
                    />
                    <div className="mb-5">
                        <div className="my-2 flex gap-2 text-xs xl:text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">
                                26 Februari Pukul 13:22
                            </p>
                        </div>
                        <h4 className="font-bold sm:text-xl xl:text-2xl">
                            CSS Pseudo Class untuk Membuat Website Lebih
                            Interaktif
                        </h4>
                        <p className="mt-3 text-xs text-gray-700 sm:text-sm xl:text-base">
                            CSS pseudo class adalah kata kunci yang ditambahkan
                            ke selector CSS untuk menerapkan gaya berdasarkan
                            keadaan tertentu dari suatu elemen. Pseudo class
                            sering digunakan untuk menyesuaikan tampilan elemen
                            ketika: ...
                        </p>
                    </div>
                </Link>
            )}
        </>
    );
}
