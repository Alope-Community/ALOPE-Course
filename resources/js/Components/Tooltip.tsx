import { ReactNode, useEffect, useRef, useState } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
}

export default function Tooltip({ children, content }: TooltipProps) {
    const [show, setShow] = useState(false);
    const [shiftX, setShiftX] = useState(0);
    const tooltipRef = useRef<HTMLSpanElement | null>(null);
    const triggerRef = useRef<HTMLSpanElement | null>(null);

    let timer: NodeJS.Timeout;

    const handleMouseEnter = () => {
        timer = setTimeout(() => setShow(true), 150);
    };

    const handleMouseLeave = () => {
        clearTimeout(timer);
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

        if (left < padding) {
            newShift = padding - left;
        } else if (left + tooltipRect.width > window.innerWidth - padding) {
            newShift = window.innerWidth - padding - (left + tooltipRect.width);
        }

        setShiftX(newShift);
    }, [show]);

    return (
        <span
            ref={triggerRef}
            className="relative inline-block cursor-help font-medium text-blue-700"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            <span
                ref={tooltipRef}
                className={`absolute bottom-full z-50 mb-2 max-h-32 min-w-[200px] max-w-[320px] overflow-hidden whitespace-normal break-words rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm leading-relaxed text-gray-800 shadow-xl transition-all duration-200 ease-out ${
                    show
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-2 opacity-0'
                }`}
                style={{
                    left: '50%',
                    transform: `translateX(-50%) translateX(${shiftX}px)`,
                }}
            >
                {content}

                <span className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-white to-transparent" />
            </span>
        </span>
    );
}
