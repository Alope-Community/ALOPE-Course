import { Module } from '@/models/Module';
import diffForHumans from '@/tools/diffForHumans';
import { formatDate } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';

export default function ModuleCardComponent({ props }: { props: Module }) {
    return (
        <Link
            href={`/modules/${props.slug}`}
            className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-300 bg-white"
        >
            <div className="relative h-60 w-full">
                <img
                    src={props.cover}
                    alt="cover"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                    <div className="mb-2 flex items-center gap-3 text-xs text-black">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21Z"
                                />
                            </svg>
                        </div>
                        {formatDate(props.created_at || '')}
                        <div className="flex gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            {diffForHumans(props.created_at || '')}
                        </div>

                        <div className="flex gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-4"
                            >
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {props.reads.length} views
                        </div>
                    </div>

                    <p className="font-semibold text-gray-900">{props.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {strLimit(props.description, 100)}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img
                        src={
                            props.writer?.profile || '/images/default-user.png'
                        }
                        className="size-8 rounded-full object-cover"
                        alt={props.writer?.name}
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">
                            {props.writer?.name || 'Unknown'}
                        </p>
                        <p className="text-xs text-black">
                            {props.writer?.as || 'Machine Learning Mentor'}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
