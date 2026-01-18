type Subtext = {
    text: string
}

export const SubText = ({ text }: Subtext) => {
    return (
        <p className="font-medium text-[16px] uppercase tracking-wide text-primary">
            {text}
        </p>
    )
}