export default function BadgeComponent({ text }: { text: string }) {
    return (
        <span className="rounded bg-[#d3e4fc] px-3 py-1.5 text-xs font-semibold text-[#2276f0]">
            {text}
        </span>
    );
}
