/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../core/contexts/AppContext';
import { TransactionAppContext } from '../../core/contexts/TransactionAppContext';
import { createTransaction, CreateTransatctionData, Transaction } from '../../core/Transaction';
import { AddTransaction } from '../add-transaction/AddTransaction';
import { Balance } from '../balance/Balance';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { IncomeExpenses } from '../income-expenses/IncomeExpenses';
import { TransactionList } from '../transaction-list/TransactionList';
import { CreditCardUi } from '../utilities/credit-card/CreditCard';
import { Dialog } from '../utilities/dialog/Dialog';
import { seedCreateTransaction } from '../utilities/seed/AddTransactionSeed';
import './main.styles.css';



export const Main = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    let { currency, balance} = useContext(TransactionAppContext);

    useEffect(() => {
        // seedCreateTransaction.forEach(transaction => {
        //     addTransaction(transaction);
        // });
    }, []);


    const addTransaction = () => {
        setIsOpen(false);
    }



    return (
        <main className='expt-main  mx-auto h-full border border-gray-300 rounded-none lg:rounded-2xl relative overflow-hidden backdrop-blur-sm bg-slate-50 '>
            <div className='absolute top-0 left-0 w-full backdrop-blur-sm bg-slate-50/40 z-50 border-b border-slate-200'>
                <Header text='Expense Tracker'></Header>
            </div>
            {/* <div className="h-[50px]"></div> */}
            {/* <Balance balance={balance} currency={currency}></Balance> */}
            <div className='overflow-y-auto h-full py-[50px] tr_list' style={{ scrollBehavior: 'smooth' }} >
                <div className="p-3">
                    <CreditCardUi lastThreeDigits='418' balanceText={`${currency}${balance}`}></CreditCardUi>
                </div>
                <div className='sticky top-0 left-0 z-40'>
                    <IncomeExpenses></IncomeExpenses>
                </div>
                <div className='overflow-y-auto h-full'>
                    <TransactionList></TransactionList>
                </div>
            </div>


            <Dialog show={isOpen} onClose={() => setIsOpen(false)} title="Add Transaction">
                <AddTransaction onAddTransaction={addTransaction}></AddTransaction>
            </Dialog>
            <Footer>
                <div className="flex items-center justify-center">
                    <button className="rounded-full bg-slate-700 active:bg-slate-800 text-white p-3 border-0 " onClick={() => setIsOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </Footer>
        </main>
    );
}