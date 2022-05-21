
import { Transaction } from './../Transaction';
import React, { PropsWithChildren } from "react";

export interface ITransactionAppData {
    balance: number;
    expense: number;
    income: number;
    currency: string;
    transactions: Transaction[]
}

export interface ITransactionAppContext {
    balance: number;
    expense: number;
    income: number;
    currency: string;
    transactions: Transaction[];
    setBalance?: (balance: number) => void;
    setExpense?: (expense: number) => void;
    setIncome?: (income: number) => void;
    setCurrency?: (currency: string) => void;
    addTransaction?: (transaction: Transaction) => void;
    deleteTransaction?: (id: string) => void;
    recalculate?: () => void;
}


export const defaultData: ITransactionAppData = {
    balance: 0,
    expense: 0,
    income: 0,
    currency: '$',
    transactions: []
}

export const TransactionAppContext = React.createContext<ITransactionAppContext>(defaultData);

