import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
} from 'justd-icons';

export default function FooterComponent() {
    return (
        <footer className="container mx-auto mt-20 flex flex-wrap gap-10 px-3 py-14 text-center md:px-10 lg:flex-nowrap lg:gap-5 lg:text-left xl:px-5 2xl:px-2">
            <div className="order-1 w-full lg:w-1/4">
                <p className="text-3xl font-bold">ALOPE</p>
                <p>Tempat belajar koding yang menyenangkan!</p>
                <div className="hidden lg:block">
                    {/* <img
                        src="/images/contactList.png"
                        alt="contact-list"
                        className="mt-10"
                    /> */}
                    <div className="mt-5 flex gap-4 text-gray-700">
                        <a href="https://discord.gg/WV7wAdcp" target="_blank">
                            <IconBrandDiscord className="size-7" />
                        </a>
                        <a
                            href="https://www.instagram.com/alope.world/"
                            target="_blank"
                        >
                            <IconBrandInstagram className="size-7" />
                        </a>
                        <a
                            href="https://github.com/orgs/Alope-Community/dashboard"
                            target="_blank"
                        >
                            <IconBrandGithub className="size-7" />
                        </a>
                    </div>
                    <p className="mt-5">&copy; 2025</p>
                </div>
            </div>
            <div className="order-3 mx-auto flex flex-col justify-center gap-7 md:flex-row lg:order-2 lg:mx-0 lg:w-2/4 xl:gap-12">
                <div>
                    <p className="mb-2 text-xl font-semibold">Pruduk</p>
                    <ul>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Online Course
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Software House
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 text-xl font-semibold">Tim Kami</p>
                    <ul>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Ilham Hafidz
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Taufan Hidayatul Akbar
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Firdan Fauzan
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Masnun Muhaemin
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 text-xl font-semibold">Lainnya</p>
                    <ul>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                FAQ
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Syarat & Ketentuan
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                href=""
                                className="relative z-10 hover:text-[#2276f0] active:font-semibold"
                            >
                                Ketentuan Privasi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="order-2 mx-auto flex w-[90%] flex-col gap-2 md:w-[70%] md:flex-row md:items-end md:gap-5 lg:order-3 lg:block lg:w-1/4">
                <div className="mx-auto w-full text-left lg:mx-0">
                    <p className="text-center font-semibold md:text-left">
                        Subscribe untuk info terkini!
                    </p>
                    <input
                        type="email"
                        className="relative z-10 w-full rounded border border-gray-300 bg-[#f4f4f4] py-2"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <button className="rounded bg-[#2276f0] px-4 py-3 text-sm font-semibold text-white hover:bg-[#2276f0]/80 active:scale-95 md:mt-3">
                        Subcribe
                    </button>
                </div>
            </div>
            <div className="order-4 mx-auto block w-full lg:mx-0 lg:hidden">
                {/* <img
                    src="/images/contactList.png"
                    alt="contact-list"
                    className="mt-10"
                /> */}
                <div className="mt-5 flex justify-center gap-4 text-gray-700">
                    <a href="https://discord.gg/WV7wAdcp" target="_blank">
                        <IconBrandDiscord className="size-7" />
                    </a>
                    <a
                        href="https://www.instagram.com/alope.world/"
                        target="_blank"
                    >
                        <IconBrandInstagram className="size-7" />
                    </a>
                    <a
                        href="https://github.com/orgs/Alope-Community/dashboard"
                        target="_blank"
                    >
                        <IconBrandGithub className="size-7" />
                    </a>
                </div>
                <p className="mt-5">&copy; 2025</p>
            </div>
        </footer>
    );
}
