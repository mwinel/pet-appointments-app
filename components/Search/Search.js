import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
    SearchIcon,
    SortAscendingIcon,
    CheckIcon,
} from '@heroicons/react/outline';
import classNames from '../../utils/classnames';

export default function Search({
    query,
    onQueryChange,
    sortBy,
    onSortByChange,
    orderBy,
    onOrderByChange,
}) {
    let [toggleSort, setToggleSort] = useState(false);

    return (
        <div>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-500" />
                    <label htmlFor="query" className="sr-only">Search</label>
                </div>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    placeholder="Search"
                    onChange={(event) => onQueryChange(event.target.value)}
                    className="block w-full pl-10 border-gray-300 rounded-md focus:bg-white focus:text-gray-700 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button>
                                <div
                                    onClick={() => setToggleSort(!toggleSort)}
                                    className="justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-400 border-2 border-blue-400 rounded-tr-md rounded-br-md focus:outline-none"
                                >
                                    <SortAscendingIcon className="inline-block w-5 h-5 mr-2" />
                                    <span>Sort By</span>
                                </div>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            <div
                                                onClick={() =>
                                                    onSortByChange('petName')
                                                }
                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Pet Name{' '}
                                                {sortBy === 'petName' && (
                                                    <CheckIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <div
                                                onClick={() =>
                                                    onSortByChange('ownerName')
                                                }
                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Owner Name{' '}
                                                {sortBy === 'ownerName' && (
                                                    <CheckIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                        </Menu.Item>
                                        <Menu.Items>
                                            <div
                                                onClick={() =>
                                                    onSortByChange('aptDate')
                                                }
                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Date{' '}
                                                {sortBy === 'aptDate' && (
                                                    <CheckIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                        </Menu.Items>
                                        <Menu.Items>
                                            <div
                                                onClick={() =>
                                                    onOrderByChange('asc')
                                                }
                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 border-t-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 border-gray-1"
                                                role="menuitem"
                                            >
                                                Asc{' '}
                                                {orderBy === 'asc' && (
                                                    <CheckIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                        </Menu.Items>
                                        <Menu.Items>
                                            <div
                                                onClick={() =>
                                                    onOrderByChange('desc')
                                                }
                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Desc{' '}
                                                {orderBy === 'desc' && (
                                                    <CheckIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                        </Menu.Items>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
}
