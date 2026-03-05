import React from 'react'

type ChipProps = {
    label: string,
    colorClassName?: string,
}

const Chip = ({ label, colorClassName = 'bg-primary text-white' }: ChipProps) => {
    return (
        <div className={`w-fit rounded-full px-3 py-1 text-xs ${colorClassName}`}>{label}</div>
    )
}

export default Chip