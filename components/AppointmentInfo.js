import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import moment from 'moment';
import {
    DotsVerticalIcon,
    TrashIcon,
    CheckCircleIcon,
    ShareIcon,
} from '@heroicons/react/solid';
import classNames from '../utils/classnames';

export default function AppointmentInfo({ appointment, onDeleteAppointment }) {
    return (
        <li className="relative px-4 py-6 bg-white shadow rounded-lg sm:p-6">
            <div aria-labelledby={'appointment-title-' + appointment.id}>
                <div>
                    <div className="flex space-x-3">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                                <a className="hover:underline">
                                    {appointment.petName}
                                </a>
                            </p>
                            <p className="text-sm text-gray-500">
                                <time dateTime={appointment.aptDate}>
                                    {moment(appointment.aptDate).format('LLLL')}
                                </time>
                            </p>
                        </div>
                        {/* Dots Menu */}
                        <div className="flex self-center flex-shrink-0">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <div>
                                    <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                                        <span className="sr-only">
                                            Open options
                                        </span>
                                        <DotsVerticalIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        />
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
                                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                <div className="flex px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
                                                    <CheckCircleIcon
                                                        className="w-5 h-5 mr-3 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <span>
                                                        Mark as Complete
                                                    </span>
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'flex px-4 py-2 text-sm'
                                                        )}
                                                        onClick={() =>
                                                            onDeleteAppointment(
                                                                appointment.id
                                                            )
                                                        }
                                                    >
                                                        <TrashIcon
                                                            className="w-5 h-5 mr-3 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span>Delete</span>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                    <h2
                        id={'appointment-title-' + appointment.id}
                        className="mt-4 text-base font-medium text-gray-900"
                    >
                        {appointment.ownerName}
                    </h2>
                </div>
                <div className="mt-2 space-y-4 text-sm text-gray-700">
                    {appointment.aptNotes}
                </div>
            </div>
        </li>
    );
}
