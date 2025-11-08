import { IconArrowRight } from 'justd-icons';
import { ButtonHTMLAttributes } from 'react';

interface NewPrimaryButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    showIcon?: boolean;
}

export default function NewPrimaryButton({
    text = 'Mulai Belajar Sekarang',
    showIcon = true,
    className = '',
    disabled,
    ...props
}: NewPrimaryButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`bg-primary flex items-center justify-center gap-2 rounded-full px-6 py-2 font-semibold text-white transition-all hover:brightness-90 active:scale-95 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className} `}
        >
            {text}
            {showIcon && <IconArrowRight className="h-4 w-4" />}
        </button>
    );
}
