import { Link, useForm } from '@inertiajs/react';
import { IconLoader2 } from 'justd-icons';
import { FormEventHandler } from 'react';

// export default function Login({
//     status,
//     canResetPassword,
// }: {
//     status?: string;
//     canResetPassword: boolean;
// }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             // onChange={(e) =>
//                             //     setData('remember', e.target.checked)
//                             // }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

export default function LoginPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    return (
        <main className="flex">
            <div className="flex flex-1 flex-col items-center justify-center">
                {/* <div className="absolute top-20 text-center">
                    <h2 className="text-2xl font-semibold">Login</h2>
                </div> */}

                <form onSubmit={submit} className="w-2/3">
                    <div className="mb-16">
                        <h2 className="text-4xl font-semibold">Login</h2>
                        <p className="mt-1 text-gray-800">
                            lorem ipsum sit dolor amet.
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
                            onChange={(e) => setData('email', e.target.value)}
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
                        <input
                            type="password"
                            id="password"
                            className="w-full rounded border border-gray-200"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                        />
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
                        <p className="mt-3 text-center text-sm text-gray-700">
                            Tidak mau login?{' '}
                            <Link href="/" className="text-blue-500">
                                kembali
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
            <div className="min-h-screen flex-[1.5] bg-[url(https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"></div>
        </main>
    );
}
