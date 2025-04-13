import { HistoryLog } from '@/models/History';

export function calculateCorrectPercentage(logs: HistoryLog[]): number {
    if (logs.length === 0) return 0;

    const correctCount = logs.filter((log) => log?.is_correct === 1).length;
    const percentage = (correctCount / logs.length) * 100;

    return Math.round(percentage);
}
