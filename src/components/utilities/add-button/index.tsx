import { PropsWithChildren } from "react";

export type AddButtonProps = PropsWithChildren<{
    onClick?: (e: any) => void;
}>;

export const AddButton = (props: AddButtonProps) => {

    return (
        <button className="rounded-full bg-slate-700 active:bg-slate-800 text-white p-3 border-0 " onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </button>
    );


}