import { PropsWithChildren } from "react";

export type FooterProps = PropsWithChildren<{}>;

export const Footer = (props: FooterProps) => {
    return (
        <div className="absolute p-2 bottom-0 left-0 w-full bg-slate-50/30 backdrop-blur-sm border-t border-slate-200">
            {props.children}
        </div>
    );
}