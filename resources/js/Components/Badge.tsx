export default function BadgeComponent({ text }: { text: string }) {
    return (
        <span className="rounded bg-[#d3e4fc] px-2 py-1 text-xs font-semibold text-[#2276f0] sm:px-3 sm:py-1.5">
            {text}
        </span>
    );
}
