import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import toast from 'react-hot-toast';

export default function UpdatePasswordForm({
    className = '',
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Password Berhasil diubah!');
                reset();
            },
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <form onSubmit={updatePassword} className="space-y-6">
            <div className="grid gap-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Password Saat Ini"
                        className="mb-1 font-medium text-gray-700"
                    />
                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="block w-full rounded-2xl border-none bg-gray-100 px-5 py-3 transition focus:ring-2 focus:ring-primary"
                        autoComplete="current-password"
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <InputLabel
                            htmlFor="password"
                            value="Password Baru"
                            className="mb-1 font-medium text-gray-700"
                        />
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            type="password"
                            className="block w-full rounded-2xl border-none bg-gray-100 px-5 py-3 transition focus:ring-2 focus:ring-primary"
                            autoComplete="new-password"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Konfirmasi Password Baru"
                            className="mb-1 font-medium text-gray-700"
                        />
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData(
                                    'password_confirmation',
                                    e.target.value
                                )
                            }
                            type="password"
                            className="block w-full rounded-2xl border-none bg-gray-100 px-5 py-3 transition focus:ring-2 focus:ring-primary"
                            autoComplete="new-password"
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-2">
                <NewPrimaryButton
                    type="submit"
                    text={processing ? 'Memproses...' : 'Ubah Password'}
                    disabled={processing}
                />

                {recentlySuccessful && (
                    <p className="text-sm font-medium text-green-600">
                        ✓ Berhasil
                    </p>
                )}
            </div>
        </form>
    );
}