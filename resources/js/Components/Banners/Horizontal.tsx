export default function BannerHorizontalComponent() {
    return (
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
    );
}
