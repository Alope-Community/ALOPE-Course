import React from 'react'

type IconProps = {
    label?: string | undefined,
    icon: React.ReactNode,
    labelClassName?: string,
}

const Icon = ({ icon, label, labelClassName }: IconProps) => {
    return (
        <div className='flex items-center gap-2'>
            {icon}
            <p className={labelClassName}>{label}</p>
        </div>
    )
}

export default Icon