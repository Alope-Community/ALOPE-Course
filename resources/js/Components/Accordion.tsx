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
                'ALOPE adalah platform kursus programming online yang menyediakan materi interaktif dan gratis bagi pemula maupun profesional. Kami bertujuan untuk membantu semua orang belajar coding dengan mudah.',
        },
        {
            title: 'Apa keunggulan belajar di ALOPE?',
            content:
                'ALOPE menawarkan kursus interaktif, proyek langsung, komunitas aktif, serta 80% materi gratis untuk memastikan setiap orang memiliki akses ke pendidikan berkualitas.',
        },
        {
            title: 'Apa saja bahasa pemrograman yang diajarkan?',
            content:
                'Kami menyediakan kursus untuk berbagai bahasa pemrograman seperti JavaScript, Python, Golang, serta framework populer seperti React dan Laravel.',
        },
        {
            title: 'Apakah ALOPE memiliki sertifikasi?',
            content:
                'Ya, ALOPE memberikan sertifikasi resmi bagi peserta yang menyelesaikan kursus dan proyek akhir, yang dapat digunakan untuk melamar pekerjaan di industri teknologi.',
        },
        {
            title: 'Bagaimana cara bergabung dengan ALOPE?',
            content:
                'Anda bisa bergabung dengan ALOPE dengan mendaftar di website resmi kami. Setelah mendaftar, Anda bisa langsung mengakses kursus gratis dan bergabung dengan komunitas kami.',
        },
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
