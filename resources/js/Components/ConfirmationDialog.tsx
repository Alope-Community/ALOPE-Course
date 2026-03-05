import { useEffect } from 'react';

interface ConfirmationDialogProps {
    isOpen: boolean;
    title: string;
    message: string | React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isDangerous?: boolean;
    isLoading?: boolean;
}

export default function ConfirmationDialog({
    isOpen,
    title,
    message,
    confirmLabel = 'Konfirmasi',
    cancelLabel = 'Batal',
    onConfirm,
    onCancel,
    isDangerous = false,
    isLoading = false,
}: ConfirmationDialogProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={onCancel}
        >
            <div
                className="w-full max-w-[360px] rounded-xl bg-white p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    {title}
                </h2>

                <p className="mb-5 text-sm text-gray-600">{message}</p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        disabled={isLoading}
                        className="rounded bg-gray-200 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {cancelLabel}
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`rounded px-3 py-1.5 text-sm text-white disabled:cursor-not-allowed disabled:opacity-70 ${
                            isDangerous
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-green-500 hover:bg-green-600'
                        }`}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
