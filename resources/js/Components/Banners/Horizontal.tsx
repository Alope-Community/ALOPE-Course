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
                    ALOPE is Amazing!
                </h3>
            </div>
        </div>
    );
}
