import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddAppointment from '../components/AddAppointment';
import Search from '../components/Search/Search';
import AppointmentInfo from '../components/AppointmentInfo';

export default function Home() {
    let [appointmentsList, setAppointmentsList] = useState([]);
    let [query, setQuery] = useState('');
    let [sortBy, setSortBy] = useState('petName');
    let [orderBy, setOrderBy] = useState('asc');

    const filteredAppointments = appointmentsList
        .filter((item) => {
            return (
                item.petName.toLowerCase().includes(query.toLowerCase()) ||
                item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
                item.aptNotes.toLowerCase().includes(query.toLowerCase())
            );
        })
        .sort((a, b) => {
            let order = orderBy === 'asc' ? 1 : -1;
            return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                ? -1 * order
                : 1 * order;
        });

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get('./data.json');
            setAppointmentsList(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="py-8">
            <div className="max-w-3xl px-4 mx-auto lg:max-w-6xl font-maven">
                <h2 className="mb-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Pet Appointments
                </h2>
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    {/* Add Appointmnets Form */}
                    <div className="md:col-span-1 pb-2">
                        <AddAppointment
                            onSendAppointment={(myAppointment) =>
                                setAppointmentsList([
                                    ...appointmentsList,
                                    myAppointment,
                                ])
                            }
                            lastId={appointmentsList.reduce(
                                (max, item) =>
                                    Number(item.id) > max
                                        ? Number(item.id)
                                        : max,
                                0
                            )}
                        />
                    </div>
                    {/* Appointments List */}
                    <div className="md:mt-0 md:col-span-2">
                        {!appointmentsList.length ? (
                            <p className="mt-1 text-gray-500">
                                No appointments found.
                            </p>
                        ) : (
                            <>
                                <Search
                                    query={query}
                                    onQueryChange={(myQuery) =>
                                        setQuery(myQuery)
                                    }
                                    orderBy={orderBy}
                                    onOrderByChange={(myOrderBy) =>
                                        setOrderBy(myOrderBy)
                                    }
                                    sortBy={sortBy}
                                    onSortByChange={(mySortBy) =>
                                        setSortBy(mySortBy)
                                    }
                                />
                                {filteredAppointments.length === 1 ? (
                                    <p className="mt-1 text-gray-500">
                                        1 appointement found.
                                    </p>
                                ) : filteredAppointments.length > 1 ? (
                                    <p className="mt-1 text-gray-500">
                                        {filteredAppointments.length}{' '}
                                        appointements found.
                                    </p>
                                ) : (
                                    <p className="mt-1 text-gray-500">
                                        0 appointements found.
                                    </p>
                                )}
                                <ul className="mt-4 space-y-4">
                                    {filteredAppointments.map((appointment) => (
                                        <AppointmentInfo
                                            key={appointment.id}
                                            appointment={appointment}
                                            onDeleteAppointment={(
                                                appointmentId
                                            ) => {
                                                setAppointmentsList(
                                                    appointmentsList.filter(
                                                        (appointment) =>
                                                            appointment.id !==
                                                            appointmentId
                                                    )
                                                );
                                            }}
                                        />
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
