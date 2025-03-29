import { Link } from '@inertiajs/react';
import { IconHome1 } from 'justd-icons';

type linkBreadcrumb = { title: string; url: string; active?: boolean };

export default function BreadcrumbComponent({
    links,
}: {
    links: linkBreadcrumb[];
}) {
    return (
        <section className="container relative z-20 mx-auto mt-24 flex items-center justify-between rounded px-3 pt-3 md:px-10 xl:px-5 2xl:px-2">
            <div className="flex items-center gap-3">
                <Link href="/">
                    <IconHome1 className="size-4 sm:size-5" />
                </Link>

                {links.map((link, index) => (
                    <>
                        <span className="text-xs text-gray-400 sm:text-sm">
                            \
                        </span>
                        <Link
                            key={index}
                            href={link.url}
                            className={`text-xs font-medium sm:text-sm ${link.active ? 'text-[#2c7cf1]' : 'text-gray-600'}`}
                        >
                            {link.title}
                        </Link>
                    </>
                ))}
            </div>
            {/* <div className="relative w-[500px]">
        <input
            type="text"
            placeholder="Cari artikel..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query saat mengetik
            onKeyDown={handleSearch} // Hanya search saat menekan Enter
            className="w-full rounded-md border border-gray-200 p-2"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <IconSearch className="size-5 text-[#2c7cf1]" />
        </button>
    </div> */}
        </section>
    );
}
