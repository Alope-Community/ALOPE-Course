import { History } from '@/models/History';
import { calculateCorrectPercentage } from '@/tools/calculateQuizPoint';
import { formatDateWithTime } from '@/tools/formatDate';
import { Link } from '@inertiajs/react';
import { IconClock } from 'justd-icons';

type ActivityHistoryProps = {
    histories: History[];
};

export default function ProfileActivityHistory({
    histories,
}: ActivityHistoryProps) {
    return (
        <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-10 flex items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Riwayat Aktifitas
                    </h2>
                    <p className="text-xs text-gray-500 text-primary">
                        Catatan jejak belajar Anda selama ini
                    </p>
                </div>
            </div>

            <div className="relative ml-5 space-y-10 border-l-2 border-gray-100 py-4">
                {histories.length ? (
                    histories.map((history, index) => (
                        <div key={index} className="group relative pl-10">
                            <div
                                className={`absolute -left-[11px] top-0 flex size-5 items-center justify-center rounded-full border-4 border-white shadow-sm ring-1 ${history.history.type === 'module' ? 'bg-primary ring-primary/30' : 'bg-green-500 ring-green-500/30'}`}
                            ></div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <time className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        {formatDateWithTime(
                                            history.logs[0].created_at,
                                        )}
                                    </time>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${history.history.type === 'module' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-600'}`}
                                    >
                                        {history.history.type}
                                    </span>
                                </div>
                                <Link
                                    href={
                                        history.history.type === 'module'
                                            ? `/modules/${history.history.slug}`
                                            : `/quizzes/${history.history.slug}`
                                    }
                                    className="inline-flex items-center gap-2 text-lg font-bold text-gray-800 transition-colors transition-transform hover:text-primary group-hover:translate-x-1"
                                >
                                    {history.history.title}
                                </Link>
                                {history.history.type === 'module' ? (
                                    <p className="max-w-md text-sm leading-relaxed text-gray-500">
                                        Selesai membaca unit ini sebanyak{' '}
                                        <span className="font-bold text-gray-800">
                                            {history.logs.length}x
                                        </span>
                                        .
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase text-gray-400">
                                                Skor Terakhir
                                            </span>
                                            <span className="text-xl font-black text-gray-800">
                                                {calculateCorrectPercentage(
                                                    history.logs,
                                                )}
                                                <span className="text-xs font-bold text-gray-400">
                                                    /100
                                                </span>
                                            </span>
                                        </div>
                                        <div className="mx-2 h-8 w-px bg-gray-100"></div>
                                        <p className="text-sm text-gray-500">
                                            Mengerjakan quiz ini{' '}
                                            <span className="font-bold text-gray-800">
                                                {history.logs.length}x
                                            </span>
                                            .
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="-ml-5 flex flex-col items-center justify-center py-10 text-center">
                        <IconClock className="mb-4 size-16 text-gray-100" />
                        <p className="text-lg font-medium text-gray-400">
                            Belum ada riwayat aktifitas
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
