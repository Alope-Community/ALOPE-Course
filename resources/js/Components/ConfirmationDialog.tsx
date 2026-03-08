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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black/50 to-black/30 px-4 backdrop-blur-md transition-all duration-300"
            onClick={onCancel}
        >
            <div
                className="w-full max-w-[400px] rounded-2xl bg-white p-8 shadow-2xl border border-gray-100 transform transition-all duration-300 ease-out scale-100 animate-in fade-in-0 zoom-in-95"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="mb-4 flex items-center justify-center">
                    <div className={`rounded-full p-3 ${isDangerous ? 'bg-red-100' : 'bg-green-100'}`}>
                        {isDangerous ? (
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 text-center">
                    {title}
                </h2>

                <div className="my-5">
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{message}</p>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        disabled={isLoading}
                        className="rounded-lg bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:shadow-md transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 transform hover:scale-105"
                    >
                        {cancelLabel}
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`rounded-lg px-6 py-2.5 text-sm font-medium text-white hover:shadow-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 transform hover:scale-105 ${isDangerous
                            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                            }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Memproses...
                            </div>
                        ) : (
                            confirmLabel
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
