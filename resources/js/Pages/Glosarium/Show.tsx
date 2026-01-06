interface Glosary {
    id?: string;
    title: string;
    slug?: string;
    description: string;
    body?: string;
    course_id?: string;
}

export default function GlosariumSection({
    glosaries,
}: {
    glosaries: Glosary[];
}) {
    return (
        <div className="text-gray-900">
            <div className="mb-8">
                <h1 className="mb-3 text-3xl font-bold text-gray-900">
                    Glosarium
                </h1>
                <p className="text-base leading-relaxed text-gray-700">
                    Ini adalah kumpulan kata-kata kunci penting yang dapat kamu
                    pelajari untuk memahami istilah dan konsep yang sering
                    digunakan dalam materi ini.
                </p>
            </div>

            <div className="mt-10 space-y-10">
                {glosaries.map((item, index) => (
                    <div
                        key={`${item.course_id ?? 'no-course'}-${item.id ?? index}-${item.title ?? 'untitled'}`}
                        className="border-b border-gray-300 pb-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="leading-relaxed text-gray-700">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
