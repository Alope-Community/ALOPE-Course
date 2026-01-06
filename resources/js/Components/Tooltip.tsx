// src/Components/Tooltip.tsx
import { Link } from '@inertiajs/react';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    slug?: string;
}

export default function Tooltip({ children, content, slug }: TooltipProps) {
    const [show, setShow] = useState(false);
    const [shiftX, setShiftX] = useState(0);
    const tooltipRef = useRef<HTMLSpanElement | null>(null);
    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const timerRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        timerRef.current = window.setTimeout(() => setShow(true), 150);
    };

    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        setShow(false);
    };

    useEffect(() => {
        if (!show || !tooltipRef.current || !triggerRef.current) return;

        const padding = 8;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        let newShift = 0;

        if (left < padding) newShift = padding - left;
        else if (left + tooltipRect.width > window.innerWidth - padding)
            newShift = window.innerWidth - padding - (left + tooltipRect.width);

        setShiftX(newShift);
    }, [show]);

    const href = slug ? `/glosarium/${slug}` : undefined;

    return (
        /* root is a span (phrasing content) -> safe inside <p> */
        <span
            ref={triggerRef}
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* teks/link tetap inline */}
            {href ? (
                <Link
                    href={href}
                    className="font-medium text-blue-700 hover:underline"
                >
                    {children}
                </Link>
            ) : (
                <span className="font-medium text-blue-700">{children}</span>
            )}

            {/* tooltip box juga dibuat sebagai <span> (bukan <div>), tapi bisa tampil block melalui CSS */}
            <span
                ref={tooltipRef}
                role="tooltip"
                className={`absolute bottom-full left-1/2 z-50 mb-2 max-h-32 min-w-[200px] max-w-[320px] overflow-hidden whitespace-normal break-words rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm leading-relaxed text-gray-800 shadow-xl transition-all duration-200 ease-out ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
                style={{
                    transform: `translateX(-50%) translateX(${shiftX}px)`,
                    display:
                        'inline-block' /* span tetap inline but can be sized */,
                }}
            >
                {content}
                <span className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-white to-transparent" />
            </span>
        </span>
    );
}
