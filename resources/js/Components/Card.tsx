import { Link } from '@inertiajs/react';

export default function CardComponent({
    type,
    addedClass = '',
}: {
    type: string;
    addedClass?: string;
}) {
    return type == 'module' ? (
        <Link
            href="/modules/css-pseudo-classuuntuk-membuat-website-lebih-interaktif"
            className={`overflow-hidden rounded-md bg-gray-50 shadow ${addedClass}`}
        >
            <div className="relative h-[200px]">
                <img
                    src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card img"
                    className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded bg-gray-800/80 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                        />
                    </svg>
                </span>
            </div>
            <div className="rounded-b-md border border-t-0 border-[#2276f0] p-3">
                <h4 className="font-semibold">
                    CSS Pseudo Class untuk Membuat Website Lebih Interaktif
                </h4>
                <p className="mt-1 text-sm text-gray-800">
                    CSS pseudo class adalah kata kunci yang ditambahkan ke
                    selector CSS unt....
                </p>

                <div className="mt-4 flex justify-between text-gray-700">
                    <div>
                        <small className="text-xs">
                            25 Februari Pukul 18:00
                        </small>
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
                            ?
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
                            ?
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    ) : type == 'video' ? (
        <div
            className={`overflow-hidden rounded-md bg-gray-50 shadow ${addedClass}`}
        >
            <div className="relative h-[200px]">
                <img
                    src="https://images.unsplash.com/photo-1737741276705-569ebd946f5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card img"
                    className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded bg-gray-800/80 p-1">
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
                </span>
            </div>
            <div className="rounded-b-md border border-t-0 border-[#2276f0] p-3">
                <h4 className="font-semibold">Title Video Tutorial</h4>
                <p className="mt-1 text-xs text-gray-800">
                    16 Module . 2 Jam 10 Menit
                </p>

                <div className="mt-4 flex justify-between text-gray-700">
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
                </div>
            </div>
        </div>
    ) : (
        ''
    );
}
