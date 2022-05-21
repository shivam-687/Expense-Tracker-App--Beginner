import { ReactComponentElement, useEffect, useState } from "react";
import { AddTransaction } from "../add-transaction/AddTransaction";
import { Dialog } from "../utilities/dialog/Dialog";

export type AddTransactionDialogProps = {
    children?: any,
    handler?: ReactComponentElement<any, {onClick: (e: any) => void}> | any,
}

export const AddTransactionDialog = (props:AddTransactionDialogProps ) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // if(props.handler){
        //     props.handler.props.onClick = () => setShow(true);
        //     console.log("HANDLER CLICK!!")
        // }
    }, []);
    
    const defaulHandlerElement = (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Add Transaction
        </button>
    )

    return (
        <>
        <Dialog show={show} onClose={() => setShow(false)}>
            <AddTransaction></AddTransaction>
        </Dialog>

        <div className=" inline-block" onClick={() => setShow(true)}>
            {props.handler || defaulHandlerElement}
        </div>
        </>
    );

}