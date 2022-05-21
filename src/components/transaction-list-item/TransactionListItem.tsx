import { PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import {TrashIcon} from '@heroicons/react/solid';
import { Transaction } from "../../core/Transaction";
import { TransactionAppContext } from "../../core/contexts/TransactionAppContext";

export type TransactionListItemProps = PropsWithChildren<{
    transaction: Transaction;
    onRemove?: (transaction: Transaction) => void;
}>;

export const TransactionListItem = (props: TransactionListItemProps) => {
    const tr = {
        id: 1,
        text: 'Cash',
        amount: '100.00',
        curr: '$',
        type: 'income',
    }
    const itemRef = useRef<HTMLDivElement | null>(null);

    const {currency, deleteTransaction} = useContext(TransactionAppContext);

    const remove = () => {
        if(deleteTransaction){
            console.log("deleteTransaction", props.transaction);
            deleteTransaction(props.transaction.id);
            if(props.onRemove){
                props.onRemove(props.transaction);
            }
        }
    }

    useEffect(() => {
        console.log("UseEffect");
    })

    
    return (
        <div className="tl-item border border-indigo-200   rounded-md overflow-hidden flex py-3 px-2 relative group mb-2 hover:shadow-lg hover:shadow-indigo-200/70 transition " ref={itemRef}>
            <div className="flex-1 w-full">
                <h1 className="tex-lg font-semibold text-slate-600">{props.transaction.text}</h1>
            </div>
            <p className="text-base font-light text-slate-700">
            {props.transaction.type === 'income' ? '+' : '-'}{currency}{props.transaction.amount}
            </p>

            {/* <span className={`absolute right-0 top-0 h-full w-1 ${props.transaction.type === 'income' ? 'bg-lime-500' : 'bg-rose-500'}`}></span> */}
            {/* <div className={`absolute right-0 top-0 h-full flex items-center justify-centerl translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out`}>
                <button className=" p-1 bg-rose-600 text-white rounded-md" onClick={remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div> */}
            <div className="absolute bg-rose-300/40 touch-manipulation top-0 right-0 w-auto px-2  py-1 backdrop-blur-sm rounded-md appearance-none opacity-0 group-hover:opacity-100  transition duration-500 flex items-center justify-center">
                <button className=" border-0 rounded-full" onClick={remove}>
                    <TrashIcon className="h-4 w-4 " />
                </button>
            </div>
        </div>
    );
}