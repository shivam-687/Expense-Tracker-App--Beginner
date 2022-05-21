export type Currency = {
    id: string;
    name: string;
    symbol: string;
}


export const currencies: Currency[] = [

    {
        id: 'USD',
        name: 'United States Dollar',
        symbol: '$'
    },
    {
        id: 'EUR',
        name: 'Euro',
        symbol: '€'
    },
    {
        id: 'GBP',
        name: 'British Pound',
        symbol: '£'
    },
    {
        id: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥'
    },
    {
        id: 'CHF',
        name: 'Swiss Franc',
        symbol: 'Fr'
    },
    {
        id: 'IND',
        name: 'Indian Rupee',
        symbol: '₹'
    }
];
