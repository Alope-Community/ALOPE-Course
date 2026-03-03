import { useForm, usePage } from '@inertiajs/react';
import { IconEye, IconEyeClosed, IconLoader2 } from 'justd-icons';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

type SharedEnvProps = {
    env?: {
        APP_URL: string;
    };
};

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
    const { env } = usePage().props as unknown as SharedEnvProps;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onSuccess: () => {
                toast.success('Login successful!');
            },
            onError: (errors) => {
                if (errors.email || errors.password) {
                    toast.error('Invalid credentials');
                } else {
                    toast.error('Something went wrong');
                }
            },
        });
    };

    const handleGoogleLogin = () => {
        window.location.href = `${env?.APP_URL}/auth/google`;
    };

    if (!isOpen) return null;

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
            onClick={() => onClose()}
        >
            <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-10 shadow-2xl">
                {/* Logo */}
                <img
                    src="/images/logo/alope-text.png"
                    alt="Alope"
                    className="h-8 w-auto"
                />

                {/* Header */}
                <div className="mt-6 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Selamat datang kembali
                    </h2>
                    <p className="mt-1.5 text-sm text-gray-500">
                        Masuk untuk melanjutkan ke akun Anda
                    </p>
                </div>

                <div className="mt-8 w-full space-y-4">
                    {/* Google Login Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-150 hover:border-gray-300 hover:bg-gray-50"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                                fill="#4285F4"
                            />
                            <path
                                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                                fill="#34A853"
                            />
                            <path
                                d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                                fill="#EA4335"
                            />
                        </svg>
                        Lanjutkan dengan Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <hr className="flex-1 border-gray-200" />
                        <span className="whitespace-nowrap text-xs text-gray-400">
                            atau masuk dengan email
                        </span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="nama@email.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-150 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-xs text-blue-500 transition-colors hover:text-blue-600 hover:underline"
                                >
                                    Lupa password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Masukkan password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pr-11 text-sm text-gray-900 placeholder-gray-400 transition-all duration-150 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <IconEye className="size-4" />
                                    ) : (
                                        <IconEyeClosed className="size-4" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1.5 text-xs text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-150 hover:bg-blue-700 hover:shadow-md active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing && (
                                <IconLoader2 className="size-4 animate-spin" />
                            )}
                            {processing ? 'Memproses...' : 'Masuk'}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="pt-1 text-center text-xs text-gray-400">
                        Belum punya akun?{' '}
                        <a
                            href="#"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-600 hover:underline"
                        >
                            Daftar sekarang
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
