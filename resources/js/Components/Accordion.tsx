import React, { useEffect, useRef, useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

interface AccordionDataProps {
    title: string;
    content: string;
}

const AccordionItem: React.FC<AccordionProps> = ({
    title,
    content,
    isOpen,
    onClick,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full border-b border-gray-300">
            <button
                className="flex w-full items-center justify-between px-2 py-4 text-left font-semibold hover:bg-white/50"
                onClick={onClick}
            >
                {title}
                <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                ref={contentRef}
                className={`overflow-hidden px-4 transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[999px]' : 'max-h-0'
                }`}
                style={{
                    maxHeight: isOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : undefined,
                }}
            >
                <p className="py-2 text-gray-700">{content}</p>
            </div>
        </div>
    );
};

const AccordionComponent = ({
    data,
    defaultActive,
}: {
    data: AccordionDataProps[];
    defaultActive?: number;
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        if (
            defaultActive !== undefined &&
            defaultActive >= 0 &&
            defaultActive < data.length
        ) {
            setActiveIndex(defaultActive);
        }
    }, [defaultActive, data.length]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full rounded">
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default AccordionComponent;
