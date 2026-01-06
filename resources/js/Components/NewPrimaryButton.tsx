import { IconArrowRight } from 'justd-icons';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface NewPrimaryButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: ReactNode;
    showIcon?: boolean;
    circleIcon?: boolean; // opsional
    variant?: 'primary' | 'outline';
    className?: string;
}

export default function NewPrimaryButton({
    text,
    icon,
    showIcon = false,
    circleIcon = false,
    variant = 'primary',
    className = '',
    disabled,
    children,
    ...props
}: NewPrimaryButtonProps) {
    const baseStyle =
        'relative flex items-center justify-center gap-2 rounded-full font-semibold transition-all active:scale-95';
    const disabledStyle = disabled ? 'cursor-not-allowed opacity-50' : '';
    const variantStyle =
        variant === 'outline'
            ? 'border border-primary text-primary hover:bg-primary hover:text-white'
            : 'bg-primary text-white hover:brightness-90';

    return (
        <button
            {...props}
            disabled={disabled}
            className={`overflow-hidden px-5 py-2 text-sm md:text-base ${baseStyle} ${variantStyle} ${disabledStyle} ${className}`}
        >
            <span
                className={`relative z-10 ${circleIcon ? 'pr-6' : ''}`}
            >
                {text}
            </span>
            {circleIcon && (
                <span className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 transition-all duration-300 group-hover:bg-white/35">
                    {icon ??
                        (showIcon && <IconArrowRight className="h-4 w-4" />)}
                </span>
            )}
            {!circleIcon &&
                (icon
                    ? icon
                    : showIcon && <IconArrowRight className="h-4 w-4" />)}
        </button>
    );
}
