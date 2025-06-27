import { Quiz } from '@/models/Quiz';
import { formatDateWithTime } from '@/tools/formatDate';
import { Link } from '@inertiajs/react';

export default function QuizCardComponent({ props }: { props: Quiz }) {
    return (
        <Link href={`/quizzes/${props.slug}`} className='mr-5'>
            <img
                src={props.cover}
                alt="article cover"
                className="max-h-[150px] w-full rounded 2xl:max-h-[200px]"
                width={1280}
                height={720}
            />
            <div className={`-mt-1 rounded-b text-sm xl:text-base`}>
                <p className="mb-2 mt-3 text-xs text-gray-500 xl:text-sm">
                    {formatDateWithTime(props.created_at || '')}
                </p>
                <p className="relative flex font-medium">{props.title}</p>
            </div>
        </Link>
    );
}
