import * as nano from 'nanoid';

export type TransactionType = 'income' | 'expense';
export type CreateTransatctionData = {
    type: TransactionType;
    amount: number;
    text: string
}

export interface Transaction {
    id: string;
    amount: number;
    date?: Date;
    text: string;
    type: TransactionType;
}


export function createTransaction(data: CreateTransatctionData): Transaction {
    const {amount, text, type} = data;
    return {
        id: nano.nanoid(16),
        amount,
        date: new Date(),
        text,
        type,
    };
}