import { useContext } from "react";
import { TransactionAppContext } from "../../core/contexts/TransactionAppContext";
import { TransactionListItem } from "../transaction-list-item/TransactionListItem";
import { Card } from "../utilities/card/Card";



export const TransactionList = () => {
    const { transactions } = useContext(TransactionAppContext);
    return (
        <div className=" p-3 ">
            <Card card_class={['shadow']}>
            <h1 className=" border-slate-500 text-slate-500 font-semibold text-lg mb-3">Transaction List</h1>
            <div className="tl-items">
                {transactions.map(transaction => (
                    <TransactionListItem key={transaction.id} transaction={transaction}/>
                ))}
            </div>
            </Card>
        </div>
    );
}