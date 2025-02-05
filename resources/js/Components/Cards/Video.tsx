export default function VideoCardComponent({
    title,
    video_link,
    course_name,
    total_video_course,
}: {
    title: string;
    video_link: string;
    course_name: string;
    total_video_course: number;
}) {
    return (
        <div className={`mr-5 overflow-hidden rounded-md bg-gray-50 shadow`}>
            <div className="relative h-[200px]">
                <iframe
                    src={video_link}
                    title="YouTube video player"
                    frameBorder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-full w-full"
                    allowFullScreen
                ></iframe>
                {/* <span className="absolute bottom-2 left-2 rounded bg-gray-800/80 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 text-white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span> */}
            </div>
            <div className="rounded-b-md border border-t-0 border-[#2276f0] px-3 pb-3 pt-2">
                <small className="text-xs italic text-[#2276f0]">
                    #web-programming
                </small>
                <h4 className="mt-2 font-semibold">{title}</h4>
                <p className="mt-1 text-xs text-gray-800">
                    <span className="font-medium">{course_name}</span>
                    {' - '}
                    {total_video_course} Total Videos
                </p>
                {/* <div className="mt-4 flex justify-between text-gray-700">
                    <div>
                        <span className="flex items-center gap-1 rounded bg-[#2276f0] px-2 py-1 text-xs text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-3 text-yellow-300"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            4.5
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="flex items-center gap-1 text-xs">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-3"
                            >
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            2000
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-3"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            10
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
