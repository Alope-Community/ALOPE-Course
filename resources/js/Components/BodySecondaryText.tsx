
type BodySecondaryTextProps = {
    text: string
}

const BodySecondaryText = ({ text }: BodySecondaryTextProps) => {
    return (
        <p className="text-[16px] text-grey">{text}</p>
    )
}

export default BodySecondaryText