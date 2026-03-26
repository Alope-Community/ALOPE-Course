import FooterComponent from '@/Components/Footer';
import NavbarComponent from '@/Components/Navbar';
import { Course } from '@/models/Course';
import { History } from '@/models/History';
import ProfileActivityHistory from '@/Pages/Profile/Partials/ProfileActivityHistory';
import ProfileCoursesList from '@/Pages/Profile/Partials/ProfileCoursesList';
import ProfileSidebar from '@/Pages/Profile/Partials/ProfileSidebar';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { IconBrandWhatsapp } from 'justd-icons';
import { useState } from 'react';

export default function HistoryPage({
    histories,
    courses,
    mustVerifyEmail,
    status,
}: {
    histories: History[];
    courses: Course[];
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const [activeTab, setActiveTab] = useState<
        'account' | 'courses' | 'history'
    >('account');

    return (
        <div className="flex min-h-screen flex-col bg-[#f8fafc]">
            <Head title="Profile" />
            <NavbarComponent />

            <main className="container mx-auto flex-grow px-4 py-10 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
                    {/* --- SIDEBAR --- */}
                    <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-1">
                        <ProfileSidebar
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />

                        {/* WhatsApp Card */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-white shadow-xl shadow-green-500/20">
                            <div className="absolute right-0 top-0 -mr-8 -mt-8 size-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20"></div>

                            <div className="relative z-10 mb-8 flex flex-col items-start gap-3">
                                <div className="rounded-xl border border-white/30 bg-white/20 p-3 backdrop-blur-md">
                                    <IconBrandWhatsapp className="size-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold leading-tight">
                                    Butuh Bantuan? <br /> Hubungi Kami
                                </h3>
                            </div>

                            <a
                                href="https://wa.me/+62838-7135-2030"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-block w-full rounded-full bg-white py-2 text-center text-sm font-bold text-green-600 transition-colors hover:bg-gray-50"
                            >
                                Contact Us
                            </a>
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <div className="lg:col-span-3">
                        {/* TAB: INFORMASI AKUN */}
                        {activeTab === 'account' && (
                            <div className="space-y-8">
                                {/* Edit Profil Section */}
                                <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            Edit Profil
                                        </h2>
                                        <p className="text-xs text-gray-500 text-primary">
                                            Update informasi dasar akun Anda
                                        </p>
                                    </div>
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                    />
                                </section>

                                {/* Ubah Password Section */}
                                <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-800">
                                            Ubah Password
                                        </h2>
                                        <p className="text-xs text-gray-500 text-primary">
                                            Pastikan akun Anda tetap aman
                                        </p>
                                    </div>
                                    <UpdatePasswordForm />
                                </section>
                            </div>
                        )}

                        {/* TAB: KURSUS DIIKUTI */}
                        {activeTab === 'courses' && (
                            <ProfileCoursesList
                                courses={courses}
                                histories={histories}
                            />
                        )}

                        {/* TAB: RIWAYAT AKTIFITAS */}
                        {activeTab === 'history' && (
                            <ProfileActivityHistory histories={histories} />
                        )}
                    </div>
                </div>
            </main>

            <FooterComponent />
        </div>
    );
}