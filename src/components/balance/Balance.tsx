import { useContext } from "react";
import { TransactionAppContext } from "../../core/contexts/TransactionAppContext";
import { Card } from "../utilities/card/Card";

export type BalanceProps = {
    balance: number;
    currency: string;
}

export const Balance = (props: BalanceProps) => {
    const { balance, currency } = useContext(TransactionAppContext);
    return (
        <div className="w-full ">
            <Card>
                <h1 className="text-lg">Balance</h1>
                <p className="text-4xl font-bold">{`${currency}${balance}`}</p>
            </Card>
        </div>
    );
}