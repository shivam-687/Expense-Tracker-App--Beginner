import { useState, ReactPropTypes, PropsWithChildren, useEffect } from "react";
import {XIcon} from '@heroicons/react/solid';

export type DialogProps = PropsWithChildren<{
    title?: string,
    show: boolean,
    onClose?: () => void,
    onOpen?: () => void,
}>;

export const Dialog = (props: DialogProps) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        console.log("UseEffect", props.show, isShow);
        if (props.show) {
            setIsShow(true);
            if (props.onOpen) {
                props.onOpen();
            }
        }else {
            console.log("UseEffect else", props.show, isShow);
            setIsShow(false);
            if (props.onClose) {
                props.onClose();
            }
        }

        if(props.show !== isShow){
            setIsShow(props.show);
        }


    }, [props, props.show, isShow]);

    const handleClose = () => {
        setIsShow(false);
        if(props.onClose) {
            props.onClose();
        }
    }


    if(!isShow){
        return null;
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full dialog-back-pane flex items-center justify-center bg-slate-400/40 backdrop-blur-sm z-50" >

            <div className={`dialog overflow-hidden rounded-md bg-slate-50  transition duration-300 delay-100 slideUpWithFadeIn`} >
                <div className="flex items-center justify-between p-3">
                    <h1 className="text-base text-slate-600 font-bold">{props.title}</h1>
                    <button className="border-0 rounded-full text-slate-700 hover:bg-slate-50 active:bg-slate-200 " onClick={handleClose}>
                        <XIcon className="h-4 w-4" />
                    </button>
                </div>

                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}