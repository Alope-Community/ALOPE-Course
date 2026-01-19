type TitleTextProps = {
    text: string;
};

export const TitleText = ({ text }: TitleTextProps) => {
    return (
        <h2 className="font-spartan text-[32px] font-medium leading-none md:text-[40px] lg:text-[48px]">
            {text}
        </h2>
    );
};
