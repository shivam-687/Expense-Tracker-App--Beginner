import { Card } from "../utilities/card/Card";
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { TransactionAppContext } from "../../core/contexts/TransactionAppContext";


export const IncomeExpenses = () => {

    const { income, expense, currency } = useContext(TransactionAppContext);

    return (
        <div className="w-full px-3 py-3">
            <Card shadow>
                <div className="flex items-center text-slate-600">
                    <div className="income-container flex-1 flex items-center">
                        <div>
                            <div className="p-5 rounded-full bg-green-100 shadow shadow-green-100">
                                <TrendingUpIcon className="text-green-500 w-7 h-7" />
                            </div>
                        </div>
                        <div className="ml-2">
                            <p className="text-center text-xl font-semibold text-green-400">{`${currency}${income}`}</p>
                            <p className="text-center text-sm">Income</p>
                        </div>
                    </div>
                    <div className="verticle-seperator w-px h-10 bg-gray-500 block"></div>
                    <div className="expenses-container flex-1 flex items-center justify-end">
                        <div>
                            <div className="p-5 ml-2 rounded-full bg-amber-100 shadow shadow-green-100">
                                <TrendingUpIcon className="text-amber-500 w-7 h-7" />
                            </div>
                        </div>
                        <div className="ml-2">
                            <p className="text-center text-xl font-semibold text-amber-500">{`${currency}${expense}`}</p>
                            <p className="text-center text-sm ">Expenses</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}