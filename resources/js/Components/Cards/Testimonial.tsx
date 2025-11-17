// Components/Cards/Testimonial.tsx
import { IconStarFill } from 'justd-icons';

export interface TestimonialCardProps {
    quote: string;
    name: string;
    role?: string;
    avatar?: string;
    rating: number;
}

export default function TestimonialCard({
    quote,
    name,
    role = 'Mahasiswa',
    avatar = '/images/ilham.jpg',
    rating,
}: TestimonialCardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
            {/* icon quote (svg) */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M7.17 6A5 5 0 0 0 2 11v7h7v-7H6.26a3 3 0 0 1 2.91-2.24L9 6.17A5 5 0 0 0 7.17 6zm10 0A5 5 0 0 0 12 11v7h7v-7h-2.74a3 3 0 0 1 2.91-2.24L19 6.17A5 5 0 0 0 17.17 6z" />
                </svg>
            </div>

            <p className="mb-6 leading-relaxed text-gray-700">{quote}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <IconStarFill className="h-4 w-4 text-yellow-400" />
                    <span className="font-semibold">{rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
