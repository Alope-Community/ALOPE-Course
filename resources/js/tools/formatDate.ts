export default function formatDate(timestamp: string) {
    const date = new Date(timestamp);

    // Opsi nama bulan dalam bahasa Inggris
    const monthNames = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];

    const day = date.getUTCDate(); // Mengambil tanggal
    const month = monthNames[date.getUTCMonth()]; // Mengambil nama bulan
    const hours = date.getUTCHours().toString().padStart(2, '0'); // Format jam 2 digit
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Format menit 2 digit

    return `${day} ${month} Pukul ${hours}:${minutes}`;
}
