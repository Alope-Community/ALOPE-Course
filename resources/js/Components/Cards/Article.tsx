import { Article } from '@/models/Article';
import { formatDateWithTime } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';

export default function ArticleCardComponent({ props }: { props: Article }) {
    return (
        <Link
            href={`/articles/${props.slug}`}
            className={`mr-5 overflow-hidden rounded-md bg-gray-50 shadow`}
        >
            <div className="relative">
                <img
                    src={props.cover}
                    alt="cover article"
                    className="w-full rounded-t-md"
                    width={1280}
                    height={720}
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
                <p className="font-semibold">{props.title}</p>
                <p className="mt-1 text-sm text-gray-800">
                    {strLimit(props.description, 100)}
                </p>

                <div className="mt-4 flex justify-between text-gray-700">
                    <div>
                        <small className="text-xs">
                            {formatDateWithTime(props.created_at || '')}
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
                            {props.reads.length}
                        </span>
                        {/* <span className="flex items-center gap-1 text-xs">
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
                        </span> */}
                    </div>
                </div>
            </div>
        </Link>
    );
}
