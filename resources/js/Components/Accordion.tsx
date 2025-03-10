import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionProps> = ({
    title,
    content,
    isOpen,
    onClick,
}) => {
    return (
        <div className="w-full border-b border-gray-300">
            <button
                className="flex w-full items-center justify-between px-2 py-4 text-left font-semibold hover:bg-white/50"
                onClick={onClick} // Handle klik
            >
                {title}
                <span
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    ▼
                </span>
            </button>
            {isOpen && <div className="p-4 text-gray-700">{content}</div>}
        </div>
    );
};

const AccordionComponent = () => {
    const data = [
        {
            title: 'Apa itu ALOPE?',
            content:
                'ALOPE adalah sebuah komunitas programming yang memiliki visi untuk berbagi ilmu dan pengalaman seputar coding, dengan tujuan menciptakan lingkungan belajar yang inklusif dan mendukung bagi siapa saja yang ingin mengembangkan keterampilan di bidang pemrograman khususnya bagi pemula.',
        },
        {
            title: 'Apa keunggulan belajar di ALOPE?',
            content:
                'Keunggulan belajar di ALOPE adalah tersedianya berbagai artikel tutorial yang dilengkapi dengan video pembelajaran interaktif serta soal berbasis studi kasus untuk mengasah pemahaman secara langsung. Selain itu, ALOPE juga memiliki komunitas aktif di Discord, di mana para anggota dapat berdiskusi, berbagi ilmu, dan saling membantu dalam perjalanan belajar coding mereka.',
        },
        {
            title: 'Apa saja bahasa pemrograman yang diajarkan?',
            content:
                'Saat ini, ALOPE fokus mengajarkan web programming, termasuk HTML, CSS, JavaScript, serta framework seperti React dan Laravel. Namun, kami terbuka untuk berkembang ke bidang lain seperti IoT atau mobile development. Jika Anda memiliki keahlian di bidang tersebut dan tertarik untuk berbagi ilmu, kami mengundang Anda untuk bergabung sebagai mentor dan membantu lebih banyak orang belajar!',
        },
        {
            title: 'Apakah saya perlu memiliki pengalaman sebelumnya untuk mulai belajar?',
            content:
                'Tidak perlu! Kami menyediakan materi yang dirancang untuk pemula dari nol, tetapi juga tersedia materi lanjutan bagi yang sudah memiliki pengalaman.',
        },
        // {
        //     title: 'Apakah ALOPE memiliki sertifikasi?',
        //     content:
        //         'Ya, ALOPE memberikan sertifikasi resmi bagi peserta yang menyelesaikan kursus dan proyek akhir, yang dapat digunakan untuk melamar pekerjaan di industri teknologi.',
        // },
        // {
        //     title: 'Bagaimana cara bergabung dengan ALOPE?',
        //     content:
        //         'Anda bisa bergabung dengan ALOPE dengan mendaftar di website resmi kami. Setelah mendaftar, Anda bisa langsung mengakses kursus gratis dan bergabung dengan komunitas kami.',
        // },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mx-auto w-full overflow-hidden">
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={activeIndex === index} // Cek apakah index ini yang aktif
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default AccordionComponent;
