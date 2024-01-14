
import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: ReactElement
    className?: string
}

export default function BoxLearn ({children, className}: Props) {
    return (<div className={twMerge(className, "card w-full h-[400px] max-w-[1000px] p-4")}>
        {children}
    </div>)
}