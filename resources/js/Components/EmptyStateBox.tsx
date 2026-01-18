
type EmptyStateBoxProps = {
    title: string,
    description?: string,
}
export const EmptyStateBox = ({ title, description }: EmptyStateBoxProps) => {
    return (
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center text-gray-500 sm:col-span-2 lg:col-span-3">
            <p className="text-lg font-semibold text-gray-900">
                {title}
            </p>
            {description &&
                <p className="max-w-md text-sm text-gray-500">
                    {description}
                </p>
            }
        </div>
    )
}