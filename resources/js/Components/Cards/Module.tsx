import { Module } from '@/models/Module';
import diffForHumans from '@/tools/diffForHumans';
import { formatDate } from '@/tools/formatDate';
import strLimit from '@/tools/strLimit';
import { Link } from '@inertiajs/react';
import { IconCalendar, IconClock, IconEye } from 'justd-icons';
import Icon from '../Icon';

export default function ModuleCardComponent({ props }: { props: Module }) {
    return (
        <Link
            href={`/modules/${props.slug}`}
            className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-300 bg-white"
        >
            <div className="relative h-60 w-full">
                <img
                    // src={props.cover}
                    src={'/images/thumb.png'}
                    alt="cover"
                    className="h-full w-full"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                    <div className="mb-2 flex items-center gap-3 text-xs text-black">
                        <Icon
                            icon={<IconCalendar />}
                            label={formatDate(props.created_at || '')}
                        />

                        <Icon
                            icon={<IconClock />}
                            label={diffForHumans(props.created_at || '')}
                        />

                        <Icon
                            icon={<IconEye />}
                            label={props.reads?.length + ' Views'}
                        />
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
