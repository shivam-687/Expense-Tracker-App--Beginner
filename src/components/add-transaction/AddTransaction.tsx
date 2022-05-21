import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AppContext } from "../../core/contexts/AppContext";
import { TransactionAppContext } from "../../core/contexts/TransactionAppContext";
import { createTransaction } from "../../core/Transaction";
import { Card } from "../utilities/card/Card";

type AddTransactionFormData = {
    text: string;
    amount: number;
    type: 'income' | 'expense';
}

type AddTransactionProps =  PropsWithChildren<{
    onAddTransaction?: () => void;
}>;

export const AddTransaction = (props: AddTransactionProps) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0.00);
    const [error, setError] = useState('');
    const [type, setType] = useState<'expense'|'income'>('income');
    const [formData, setFormData] = useState<AddTransactionFormData|null>(null);
    // const {balance, expanse} = useContext(AppContext);

    const {balance,addTransaction} = useContext(TransactionAppContext);


    useEffect(() => {
        validateInputs();
        setFormData({
            text,
            amount,
            type
        });
    }, [text, amount, type]);

    const validateInputs = () => {
        let isValid = true;
        if(!text){
            setError('Please provide text');
            isValid = false;
        } else if(!amount){
            setError('Please provide amount');
            isValid = false;
        } else if(!Number(amount)){
            setError('Please provide valid amount');
            isValid = false;
        } else if(text && text.trim().length <= 0){
            setError('Please provide text');
            isValid = false;
        } else if(amount && amount <= 0){
            setError('Amount must be greater than 0');
            isValid = false;
        } else if(amount && type === 'expense' && amount > balance){
            setError('Amount must be less than balance');
            isValid = false;
        }else{
            setError('');   
        }
        return isValid;
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(e.target.value));
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as 'expense'|'income');
    }



    const handleAddTransaction = (e: any)=>{
        e.preventDefault();
        if(props.onAddTransaction && validateInputs()){
            if(formData && addTransaction){
                console.log("Add Transaction", formData);
                props.onAddTransaction();
                const cT = createTransaction(formData);
                addTransaction(cT);
            }
        }
    }


    return (
        <div className="p-3 w-[280px] " >
            <Card shadow>
                <h1 className="border-slate-500 text-slate-500 font-semibold text-xl mb-3 group">Add Transaction</h1>
                {error && <p className="text-red-500 text-center text-xs">{error}</p>}
                <form className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="text" className="text-sm uppercase font-semibold mb-1 text-slate-500">
                            Text
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-slate-300 outline-1"
                            placeholder="Enter text..."
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="text" className="text-sm uppercase font-semibold mb-1 text-slate-500">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="text"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-slate-300 outline-1"
                            placeholder="Enter text..."
                            onChange={handleAmountChange}
                        />
                    </div>

                    <div className="w-full mt-3">
                        <label className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" htmlFor="grid-state">
                            Type
                        </label>
                        <div className="relative">
                            <select onChange={handleTypeChange} className="block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value={'income'} >Income</option>
                                <option value={'expense'}>Expense</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-3 flex items-center justify-end">
                        <button onClick={handleAddTransaction}  className="border-none bg-slate-600 text-white disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed rounded-md active:bg-slate-700 transition px-3 py-1">ADD</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}