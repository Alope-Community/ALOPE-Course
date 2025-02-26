export default function diffForHumans(timestamp: string): string {
    const date = new Date(timestamp);

    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    console.log(date);
    console.log(now);

    if (diffInSeconds < 60) return 'Beberapa detik yang lalu'; // Perbaikan utama

    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    for (let key in intervals) {
        const count = Math.floor(diffInSeconds / intervals[key]);
        if (count >= 1) {
            return `${count} ${key}${count > 1 ? 's' : ''} yang lalu`;
        }
    }

    return 'Baru saja';
}

// // Contoh penggunaan (30 menit yang lalu)
// console.log(timeAgo(new Date(Date.now() - 30 * 60 * 1000).toISOString())); // "30 minutes yang lalu"
