export default function GlosariumSection() {
    const terms = [
        {
            letter: "A",
            items: [
                {
                    term: "Action",
                    definition:
                        "Dalam reinforcement learning, action adalah setiap keputusan yang diambil oleh agent."
                },
                {
                    term: "Activation Function",
                    definition:
                        "Fungsi yang menerima jumlah bobot semua masukan dari layer sebelumnya, kemudian menghasilkan keluaran dengan nilai tertentu."
                }
            ]
        },
        {
            letter: "B",
            items: [
                {
                    term: "Backpropagation",
                    definition:
                        "Algoritma pelatihan pada jaringan syaraf tiruan yang mengubah bobot berdasarkan error output."
                }
            ]
        }
    ];

    return (
        <div className="text-gray-900">
            {/* Judul dan deskripsi */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Glosarium</h1>
                <p className="text-base leading-relaxed text-gray-700">
                    Berikut adalah glosarium dengan istilah umum yang digunakan pada kelas ini. 
                    Anda dapat membaca sekilas materi berikut untuk mengenali istilah-istilah umum yang ada di modul kelas ini. 
                    Selain itu, Anda juga dapat mengunjungi kembali halaman ini setiap kali menemukan istilah yang belum dimengerti. 
                    Carilah istilah tersebut pada halaman glosarium ini untuk mengidentifikasi makna atau definisinya. 
                    Jika masih terdapat kosakata yang tidak Anda pahami dan belum masuk di daftar ini, Anda dapat memberikan saran melalui fitur Laporan Materi.
                </p>
            </div>

            {/* Daftar istilah */}
            <div className="space-y-10">
                {terms.map((section) => (
                    <div key={section.letter}>
                        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-6">
                            {section.letter}
                        </h2>
                        <div className="space-y-6">
                            {section.items.map((item) => (
                                <div key={item.term}>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        {item.term}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.definition}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
