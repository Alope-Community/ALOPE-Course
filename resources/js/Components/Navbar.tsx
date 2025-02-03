export default function NavbarComponent() {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-3 shadow backdrop-blur-lg md:px-10 md:py-5 xl:px-0">
            <div className="container mx-auto flex justify-between">
                <div>
                    <p className="text-xl font-bold md:text-2xl">ALOPE</p>
                </div>
                <div>
                    <ul className="hidden gap-5 md:flex">
                        <li>
                            <a href="" className="font-semibold text-[#2276f0]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">Course</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                    </ul>
                    <button className="flex md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
