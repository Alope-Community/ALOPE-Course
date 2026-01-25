import React from 'react'

const TitleHeadline = ({ text }: { text: string }) => {
    return (
        <p className="font-spartan font-bold sm:text-xl xl:text-2xl">
            {text}
        </p>
    )
}

export default TitleHeadline