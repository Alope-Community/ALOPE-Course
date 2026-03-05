import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import NewPrimaryButton from '@/Components/NewPrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="Nama Lengkap"
                        className="mb-1 font-medium text-gray-700"
                    />
                    <TextInput
                        id="name"
                        className="block w-full rounded-2xl border-none bg-gray-100 px-5 py-3 transition focus:ring-2 focus:ring-primary"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Alamat Email"
                        className="mb-1 font-medium text-gray-700"
                    />
                    <TextInput
                        id="email"
                        type="email"
                        className="block w-full rounded-2xl border-none bg-gray-100 px-5 py-3 transition focus:ring-2 focus:ring-primary"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
            </div>

            {mustVerifyEmail && user.email_verified_at === null && (
                <div>
                    <p className="mt-2 text-sm text-gray-800">
                        Alamat email Anda belum diverifikasi.
                        <Link
                            href={route('verification.send')}
                            method="post"
                            as="button"
                            className="ml-1 rounded-md text-sm text-gray-600 underline hover:text-primary focus:outline-none"
                        >
                            Klik di sini untuk mengirim ulang email verifikasi.
                        </Link>
                    </p>

                    {status === 'verification-link-sent' && (
                        <div className="mt-2 text-sm font-medium text-green-600">
                            Link verifikasi baru telah dikirim ke alamat email
                            Anda.
                        </div>
                    )}
                </div>
            )}

            <div className="flex items-center justify-end gap-4 pt-2">
                <NewPrimaryButton
                    type="submit"
                    text={processing ? 'Menyimpan...' : 'Simpan Profil'}
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