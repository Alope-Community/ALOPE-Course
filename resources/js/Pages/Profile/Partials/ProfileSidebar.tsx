import { IconCirclePersonFill, IconClock, IconLayersFill } from 'justd-icons';

type SidebarProps = {
    activeTab: 'account' | 'courses' | 'history';
    onTabChange: (tab: 'account' | 'courses' | 'history') => void;
};

export default function ProfileSidebar({
    activeTab,
    onTabChange,
}: SidebarProps) {
    return (
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-6 px-2 text-sm font-bold uppercase tracking-wider text-gray-400">
                Menu Profil
            </h3>
            <nav className="space-y-2">
                <button
                    onClick={() => onTabChange('account')}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                        activeTab === 'account'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                    }`}
                >
                    <IconCirclePersonFill className="size-5" />
                    Informasi Akun
                </button>
                <button
                    onClick={() => onTabChange('courses')}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                        activeTab === 'courses'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                    }`}
                >
                    <IconLayersFill className="size-5" />
                    Kursus Diikuti
                </button>
                <button
                    onClick={() => onTabChange('history')}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                        activeTab === 'history'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                    }`}
                >
                    <IconClock className="size-5" />
                    Riwayat Aktifitas
                </button>
            </nav>
        </div>
    );
}
