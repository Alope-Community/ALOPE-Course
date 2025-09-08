export default function unslug(slug: string): string {
    return slug
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
