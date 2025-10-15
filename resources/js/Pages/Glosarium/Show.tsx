interface Glosary {
    id?: string;
    title: string;
    slug?: string;
    description: string;
    body?: string;
    course_id?: string;
}

export default function GlosariumSection({
    glosaries,
}: {
    glosaries: Glosary[];
}) {
    return (
        <div className="text-gray-900">
            <div className="mb-8">
                <h1 className="mb-3 text-3xl font-bold text-gray-900">
                    Glosarium
                </h1>
                <p className="text-base leading-relaxed text-gray-700">
                    Berikut adalah glosarium dengan istilah umum yang digunakan
                    pada kelas ini. Anda dapat membaca sekilas materi berikut
                    untuk mengenali istilah-istilah umum yang ada di modul kelas
                    ini. Selain itu, Anda juga dapat mengunjungi kembali halaman
                    ini setiap kali menemukan istilah yang belum dimengerti.
                    Carilah istilah tersebut pada halaman glosarium ini untuk
                    mengidentifikasi makna atau definisinya. Jika masih terdapat
                    kosakata yang tidak Anda pahami dan belum masuk di daftar
                    ini, Anda dapat memberikan saran melalui fitur Laporan
                    Materi.
                </p>
            </div>

            <div className="space-y-10">
                {glosaries.map((item, index) => (
                    <div
                        key={`${item.course_id ?? 'no-course'}-${item.id ?? index}-${item.title ?? 'untitled'}`}
                        className="border-b border-gray-300 pb-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="leading-relaxed text-gray-700">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
