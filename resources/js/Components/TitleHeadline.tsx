import React from 'react'

type TitleHeadlineProps = {
    text: string;
    textClassName?: string;
}

const TitleHeadline = ({ text, textClassName }: TitleHeadlineProps) => {
    return (
        <p className={`sm:text-xl xl:text-2xl ${textClassName || 'font-spartan font-bold'}`}>
            {text}
        </p>
    )
}

export default TitleHeadline