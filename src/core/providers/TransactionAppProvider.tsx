import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { defaultData, TransactionAppContext } from "../contexts/TransactionAppContext";
import { TAppActionTypes, TAppReducer } from "../reducers/TAppReducer";
import { Transaction } from "../Transaction";

export type TransactionAppProviderProps = PropsWithChildren<{}>;
const localData = JSON.parse(localStorage.getItem("transactionsData") || JSON.stringify(defaultData));
export const dData = localData || defaultData;

export const TransactionAppProvider = ({ children }: TransactionAppProviderProps) => {
    const [state, dispatch] = React.useReducer(TAppReducer, dData);

    useEffect(() => {
        localStorage.setItem("transactionsData", JSON.stringify(state));
    }, [state]);

    const setBalance = (balance: number) => {
        dispatch({
            type: "SET_BALANCE",
            payload: balance
        });

        
    }

    const setExpense = (expense: number) => {
        dispatch({
            type: "SET_EXPENSE",
            payload: expense
        });

        

    }

    const setIncome = (income: number) => {
        dispatch({
            type: "SET_INCOME",
            payload: income
        });

        
    }

    const setCurrency = (currency: string) => {
        dispatch({
            type: "SET_CURRENCY",
            payload: currency
        });

        
    }

    const setTransactions = (transactions: Array<any>) => {        
        dispatch({
            type: "SET_TRANSACTIONS",
            payload: transactions
        });

        
    }

    const addTransaction = (transaction: Transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
        if(transaction.type === "expense"){
            setExpense(state.expense + transaction.amount);
            setBalance(state.balance - transaction.amount);
        }else if(transaction.type === "income"){
            setIncome(state.income + transaction.amount);
            setBalance(state.balance + transaction.amount);
        }

        
    }

    const deleteTransaction = (id: string) => {
        return;
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    const recalculate = () => {
        console.log("recalculate");
        dispatch({
            type: TAppActionTypes.RECALCULATE,
            payload: null
        });
    }
    return (
        <TransactionAppContext.Provider value={{...state, setBalance, setCurrency, setExpense, setIncome, addTransaction, deleteTransaction, recalculate}}>
            {children}
        </TransactionAppContext.Provider>
    );
}