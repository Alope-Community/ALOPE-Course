export const HeaderText = ({ text }: { text: string }) => {
    return (
        <h1 className="mb-4 font-bold text-black text-3xl md:text-4xl">
            {text}
        </h1>
    )
}