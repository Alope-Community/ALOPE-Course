import { router } from '@inertiajs/react';
import { IconChevronLgLeft, IconChevronLgRight } from 'justd-icons';
import PaginationButton from './PaginationButton';

type PaginationProps = {
    prevPageUrl: string | null,
    nextPageUrl: string | null,
    lastPage: number,
    currentPage: number,
    path: string,
}

const Pagination = ({
    prevPageUrl,
    lastPage,
    nextPageUrl,
    currentPage,
    path,
}: PaginationProps) => {

    const goToPage = (url: string | null) => {
        if (url) {
            router.visit(url);
        }
    };

    const goToPageNumber = (page: number) => {
        router.visit(`${path}?page=${page}`);
    };

    const renderPageNumbers = () => {
        const pages = [];

        if (lastPage <= 5) {
            // Render semua halaman jika jumlah halaman <= 5
            for (let i = 1; i <= lastPage; i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => goToPageNumber(i)}
                        className={`flex items-center justify-center rounded-full border w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base ${i === currentPage
                            ? 'bg-[#4a86ef] text-white'
                            : 'bg-white/50 text-gray-800 backdrop-blur-md'
                            }`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Render halaman pertama
            pages.push(
                <button
                    key={1}
                    onClick={() => goToPageNumber(1)}
                    className={`flex items-center justify-center rounded-full border w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base ${currentPage === 1
                        ? 'bg-[#4a86ef] text-white'
                        : 'bg-white/50 text-gray-800 backdrop-blur-md'
                        }`}
                >
                    1
                </button>
            );

            // Tambahkan ellipsis jika currentPage > 3
            if (currentPage > 3) {
                pages.push(
                    <span key="start-ellipsis" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-base">...</span>
                );
            }

            // Render halaman di sekitar currentPage
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(lastPage - 1, currentPage + 1); i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => goToPageNumber(i)}
                        className={`flex items-center justify-center rounded-full border w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base ${i === currentPage
                            ? 'bg-[#4a86ef] text-white'
                            : 'bg-white/50 text-gray-800 backdrop-blur-md'
                            }`}
                    >
                        {i}
                    </button>
                );
            }

            // Tambahkan ellipsis jika currentPage < lastPage - 2
            if (currentPage < lastPage - 2) {
                pages.push(
                    <span key="end-ellipsis" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-base">...</span>
                );
            }

            // Render halaman terakhir
            pages.push(
                <button
                    key={lastPage}
                    onClick={() => goToPageNumber(lastPage)}
                    className={`flex items-center justify-center rounded-full border w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base ${currentPage === lastPage
                        ? 'bg-[#4a86ef] text-white'
                        : 'bg-white/50 text-gray-800 backdrop-blur-md'
                        }`}
                >
                    {lastPage}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="my-10 sm:my-20 flex items-center justify-center gap-2 sm:gap-5">
            {/* Tombol Previous */}
            <button
                onClick={() => goToPage(prevPageUrl)}
                disabled={!prevPageUrl}
            >
                <PaginationButton
                    text="Previous"
                    circleIcon
                    disabled={!prevPageUrl}
                    iconPrefix={<IconChevronLgLeft />}
                    className="w-8 h-8 sm:w-auto"
                />
            </button>

            {/* Tombol Angka Halaman */}
            {renderPageNumbers()}

            {/* Tombol Next */}
            <button
                onClick={() => goToPage(nextPageUrl)}
                disabled={!nextPageUrl}
            >
                <PaginationButton
                    text="Next"
                    circleIcon
                    disabled={!nextPageUrl}
                    icon={<IconChevronLgRight />}
                    className="w-8 h-8 sm:w-auto"
                />
            </button>

        </div>
    )
}

export default Pagination