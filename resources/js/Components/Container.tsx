import { ReactNode } from 'react';

type ContainerProps = {
    children?: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative min-h-[800px] overflow-hidden pt-16">
            <div className="container mx-auto py-8 md:px-10 lg:px-14 xl:px-0">
                {children}
            </div>
        </div>
    );
};
