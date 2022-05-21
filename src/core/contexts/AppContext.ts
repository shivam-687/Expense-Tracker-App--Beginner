import  React  from 'react';
import { Transaction } from "../Transaction";

export interface IAppContext {
    balance: number;
    expanse: number;
    currency: string;
    setBalance?: (balance: number) => void;
    setExpense?: (expense: number) => void;
    setCurrency?: (currency: string) => void;
}

export const AppContext = React.createContext<IAppContext>({
    currency: '$',
    balance: 0,
    expanse: 0,
});