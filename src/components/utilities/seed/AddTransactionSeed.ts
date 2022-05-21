import { CreateTransatctionData } from './../../../core/Transaction';
import { Transaction } from "../../../core/Transaction";

export const seedCreateTransaction: CreateTransatctionData[] = [
    
    {
        type: 'income',
        amount: 10000000,
        text: 'Зарплата', 
    },

    {
        type: 'expense',
        amount: 50,
        text: 'Покупки',
    },
    {

        type: 'expense',
        amount: 150,
        text: 'Покупки',
    },

    {
        type: 'income',
        amount: 10000000,
        text: 'Зарплата',
    },
    {
        type: 'expense',
        amount: 50,
        text: 'Покупки',
    },
    {
        type: 'expense',
        amount: 150,
        text: 'Покупки',    
    },

    {
        type: 'income',
        amount: 10000000,
        text: 'Зарплата',
    },
    {
        type: 'expense',
        amount: 50,
        text: 'Покупки',
    },

]