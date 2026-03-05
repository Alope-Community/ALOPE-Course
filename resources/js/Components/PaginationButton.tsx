import { IconArrowRight } from 'justd-icons';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PaginationButton
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: ReactNode;
    showIcon?: boolean;
    circleIcon?: boolean;
    iconPrefix?: ReactNode;
    variant?: 'primary' | 'outline';
    className?: string;
}

export default function PaginationButton({
    text,
    icon,
    iconPrefix,
    showIcon = false,
    circleIcon = false,
    variant = 'primary',
    className = '',
    disabled,
    children,
    ...props
}: PaginationButton) {
    const baseStyle =
        'relative flex items-center justify-center gap-2 rounded-full transition-all active:scale-95 h-[50px] px-7';

    const disabledStyle = disabled ? 'cursor-not-allowed opacity-50' : '';

    const variantStyle =
        variant === 'outline'
            ? 'border border-primary text-primary hover:bg-primary hover:text-white'
            : 'bg-primary text-white hover:brightness-90';

    const defaultIcon = showIcon ? (
        <IconArrowRight className="h-5 w-5 font-semibold" />
    ) : null;

    const suffixIcon = icon ?? defaultIcon;

    const renderLeftCircleIcon = circleIcon && iconPrefix;
    const renderRightCircleIcon = circleIcon && !iconPrefix;
    const renderInlineIcon = !circleIcon || (circleIcon && iconPrefix);

    return (
        <button
            {...props}
            disabled={disabled}
            className={`overflow-hidden px-5 py-3 text-sm md:text-base ${baseStyle} ${variantStyle} ${disabledStyle} ${className}`}
        >
            {/* Left circle icon */}
            {renderLeftCircleIcon && (
                <span className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full md:bg-white/25 transition-all duration-300 md:group-hover:bg-white/35">
                    {iconPrefix}
                </span>
            )}

            {/* Inline prefix icon */}
            {!circleIcon && iconPrefix}

            {/* Text */}
            <span
                className={`hidden md:block relative z-10 ${
                    circleIcon && !iconPrefix ? 'pr-6' : 'pl-6'
                }`}
            >
                {text || children}
            </span>

            {/* Right circle icon */}
            {renderRightCircleIcon && (
                <span className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full md:bg-white/25 transition-all duration-300 md:group-hover:bg-white/35">
                    {suffixIcon}
                </span>
            )}

            {/* Inline suffix icon */}
            {renderInlineIcon && suffixIcon}
        </button>
    );
}
