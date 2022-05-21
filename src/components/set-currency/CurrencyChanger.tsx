import { Fragment, useContext, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, CurrencyDollarIcon } from '@heroicons/react/solid'
import { TransactionAppContext } from '../../core/contexts/TransactionAppContext'
import { currencies } from '../../core/Currency'

export type CurrencyChangerProps = {
    // handler: any,
    children?: any,
    active: boolean,
}

export const CurrencyChanger = (props: CurrencyChangerProps) => {
    const people = [
        { name: 'Wade Cooper' },
        { name: 'Arlene Mccoy' },
        { name: 'Devon Webb' },
        { name: 'Tom Cook' },
        { name: 'Tanya Fox' },
        { name: 'Hellen Schmidt' },
      ];

      

      const {currency, setCurrency } = useContext(TransactionAppContext);
      const [selected, setSelected] = useState(currency);
      const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    
      useEffect(() => {
        const cuurent = currencies.find(currency => currency.symbol === selected);
        if(cuurent) setSelectedCurrency(cuurent);
        if(setCurrency)setCurrency(selected);
      }, [selected]);

      const handleSelection = (value: string)=>{
        setSelected(value);

      }



    return(
  
      <Listbox value={selected} onChange={handleSelection}>
        <div className="relative mt-1">
          <Listbox.Button 
          className={`${props.active ? 'bg-slate-700 text-white' : 'text-gray-700'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-300`}>
            <CurrencyDollarIcon className='h-5 w-5 mr-2 '></CurrencyDollarIcon>
            <span className="block truncate">{selectedCurrency.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          {/* <Listbox.Button>{props.children}</Listbox.Button> */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currencies.map((currency, cIdx) => (
                <Listbox.Option
                  key={cIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={currency.symbol}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {currency.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}
