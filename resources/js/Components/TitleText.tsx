type TitleTextProps = {
    text: string
}

export const TitleText = ({ text }: TitleTextProps) => {
    return (
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium font-spartan leading-none">
            {text}
        </h2>
    )
}