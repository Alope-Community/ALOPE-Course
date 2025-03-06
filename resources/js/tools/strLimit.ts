export default function strLimit(str: string, limit: number) {
    if (limit < 0) return str; // Hindari limit negatif
    if (str.length > limit) {
        return str.substring(0, limit) + '...';
    }
    return str;
}
