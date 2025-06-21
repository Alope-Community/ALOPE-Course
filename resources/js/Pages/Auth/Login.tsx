import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IconBrandGoogle, IconEye, IconEyeClosed, IconLoader2 } from 'justd-icons';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

type SharedEnvProps = {
  env?: {
    APP_URL: string;
  };
};

export default function LoginPage() {

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
                // window.location.href = '/';
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
    return (
        <>
            <Head title="Login" />

            <main className="flex">
                <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-5 lg:px-10">
                    <form onSubmit={submit} className="w-full lg:w-2/3">
                        <div className="mb-16">
                            <h2 className="text-3xl font-semibold md:text-4xl">
                                Login
                            </h2>
                            <p className="mt-1 text-gray-800">
                                Alope is your learning partner.
                            </p>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded border border-gray-200"
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full rounded border border-gray-200"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <IconEye className="size-4 text-gray-700" />
                                    ) : (
                                        <IconEyeClosed className="size-4 text-gray-700" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div>
                            <button className="flex w-full items-center justify-center gap-2 rounded bg-[#2276f0] py-2 text-white hover:bg-[#2276f0]/80">
                                {processing && <IconLoader2 />}
                                Submit
                            </button>
                            <a href={`${env?.APP_URL}/google`} className="flex w-full items-center text-sm justify-center gap-2 rounded bg-gray-800 py-4 text-white hover:bg-gray-800/80 mt-5">
                                <IconBrandGoogle /> Login Atau Registrasi dengan Google
                            </a>
                            <p className="mt-3 text-center text-sm text-gray-700">
                                Kembali ke{' '}
                                <Link href="/" className="text-blue-500">
                                    Beranda
                                </Link>
                            </p>
                        </div>
                    </form>

                    <div className="absolute bottom-5 text-center">
                        <p className="text-sm text-gray-700">
                            copyright &copy; 2025 by ALOPE
                        </p>
                    </div>
                </div>
                <div className="hidden min-h-screen flex-1 bg-[url(https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover lg:block xl:flex-[1.5]"></div>
            </main>
        </>
    );
}
