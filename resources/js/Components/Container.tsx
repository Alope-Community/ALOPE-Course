import { ReactNode } from 'react';

type ContainerProps = {
    children?: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative min-h-[800px] overflow-hidden pt-16">
            <div className="container mx-auto px-8 py-8">
                {children}
            </div>
        </div>
    )
}