import { Card } from '../utilities/card/Card';
import './header.styles.css';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react';
import { MenuIcon, CurrencyDollarIcon, RefreshIcon } from '@heroicons/react/solid';
import { TransactionAppContext } from '../../core/contexts/TransactionAppContext';
import { CurrencyChanger } from '../set-currency/CurrencyChanger';

export type HeaderProps = {
    text?: string;
}

export const Header = (props: HeaderProps) => {

    const { recalculate } = useContext(TransactionAppContext);

    return (
        <div className="expt_header">
            <Card>
                <div className="flex items-center justify-between">
                    <div className='w-8 h-8 logo-container bg-center bg-contain' style={{ backgroundImage: "url(./logo-slate.png)" }}>
                    </div>

                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className=" group inline-flex w-full justify-center rounded-md bg-black bg-opacity-10 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <MenuIcon className=" h-5 w-5 text-slate-500 group-hover:text-slate-700" />

                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div>
                                                    <CurrencyChanger active={active}></CurrencyChanger>
                                                </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-slate-700 text-white' : 'text-gray-700'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration-300`}

                                                    onClick={() => recalculate ? recalculate() : null}
                                                >
                                                    {active ? (
                                                        <RefreshIcon className="h-5 w-5 mr-2 " />
                                                    ) : (
                                                        <RefreshIcon className="h-5 w-5 mr-2" />
                                                    )}
                                                    Refresh
                                                </button>
                                            )}
                                        </Menu.Item>

                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </Card>
        </div>
    );

}