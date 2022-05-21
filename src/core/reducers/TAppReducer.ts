
import { ITransactionAppData } from "../contexts/TransactionAppContext";


export type IAction = {
    type: string;
    payload?: any;
}

export enum TAppActionTypes {
    SET_BALANCE = 'SET_BALANCE',
    SET_EXPENSE = 'SET_EXPENSE',
    SET_INCOME = 'SET_INCOME',
    SET_CURRENCY = 'SET_CURRENCY',
    ADD_TRANSACTION = 'ADD_TRANSACTION',
    DELETE_TRANSACTION = 'DELETE_TRANSACTION',
    RECALCULATE = 'RECALCULATE'
}

export const TAppReducer = (state: ITransactionAppData, action: IAction): ITransactionAppData => {
    switch (action.type) {
        case TAppActionTypes.SET_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        case TAppActionTypes.SET_EXPENSE:
            return {
                ...state,
                expense: action.payload
            }
        case TAppActionTypes.SET_INCOME:
            return {
                ...state,
                income: action.payload
            }

        case TAppActionTypes.SET_CURRENCY:
            return {
                ...state,
                currency: action.payload
            }

        case TAppActionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case TAppActionTypes.DELETE_TRANSACTION:
            console.log("DELETE_TRANSACTION", action.payload);
            return {
                ...state,
                transactions: [...state.transactions.filter(transaction => transaction.id !== action.payload)]
            }

        case 'RECALCULATE':

            const tr = state.transactions;
            let balance = 0;
            let expense = 0;
            let income = 0;

            tr.forEach(transaction => {
                if (transaction.type === 'income') {
                    income += transaction.amount;
                    balance += transaction.amount;
                } else {
                    expense += transaction.amount;
                    balance -= transaction.amount;
                }
            });
            return {
                ...state,
                balance: balance,
                expense: expense,
                income:  income
            }
        default:
            return state;
    }
}