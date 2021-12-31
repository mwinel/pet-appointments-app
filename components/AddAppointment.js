import { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/outline';
import moment from 'moment';
import TextInput from './TextInput/TextInput';
import TextArea from './TextArea/TextArea';
import Button from './Button/Button';
import Alert from './Alert/Alert';

export default function AddAppointment({ lastId, onSendAppointment }) {
    let [toggleForm, setToggleForm] = useState(false);
    let [ownerName, setOwnerName] = useState('');
    let [petName, setPetName] = useState('');
    let [aptDate, setAptDate] = useState('');
    let [aptTime, setAptTime] = useState('');
    let [aptNotes, setAptNotes] = useState('');
    let [showAlert, setShowAlert] = useState(false);
    let [errors, setErrors] = useState({});

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
        const currentDate = new Date();
        const formattedCurrentDate = moment(currentDate).format('YYYY-MM-DD');
        const formattedAppointmentDate = moment(aptDate).format('YYYY-MM-DD');

        if (ownerName.length <= 0) {
            tempErrors['ownerName'] = true;
            isValid = false;
        }
        if (petName.length <= 0) {
            tempErrors['petName'] = true;
            isValid = false;
        }
        if (aptDate.length <= 0) {
            tempErrors['aptDate'] = true;
            isValid = false;
        }
        if (formattedAppointmentDate < formattedCurrentDate) {
            tempErrors['aptDateInvalid'] = true;
            isValid = false;
        }
        if (aptTime.length <= 0) {
            tempErrors['aptTime'] = true;
            isValid = false;
        }
        if (aptNotes.length <= 0) {
            tempErrors['aptNotes'] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    const addAppointment = async (e) => {
        e.preventDefault();
        let isFormValid = handleValidation();

        if (isFormValid) {
            const appointmentInfo = {
                id: lastId + 1,
                ownerName: ownerName,
                petName: petName,
                aptDate: aptDate + ' ' + aptTime,
                aptNotes: aptNotes,
            };
            onSendAppointment(appointmentInfo);
            setOwnerName('');
            setPetName('');
            setAptDate('');
            setAptTime('');
            setAptNotes('');
            setToggleForm(!toggleForm);
            setShowAlert(!showAlert);
        }
        return true;
    };

    if (showAlert) {
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <div>
            <Button
                variant="success"
                alignText="left"
                rounded={`${toggleForm ? 'top' : 'full'}`}
                onClick={() => setToggleForm(!toggleForm)}
                className={`w-full mt-1`}
            >
                <div className="flex items-center font-medium">
                    <CalendarIcon className="inline-block w-6 h-6 mr-2 align-text-top" />{' '}
                    Add Appointment
                </div>
            </Button>
            {/* Form */}
            {toggleForm && (
                <div className="py-4 pl-4 pr-4 bg-white border-b-2 border-l-2 border-r-2 border-light-blue-500 rounded-b-md">
                    <TextInput
                        label="Owner Name"
                        name="ownerName"
                        id="ownerName"
                        type="text"
                        placeholder="John Doe"
                        value={ownerName}
                        onChange={(e) => {
                            setOwnerName(e.target.value);
                        }}
                        error={errors.ownerName && 'Owner name is required.'}
                    />
                    <TextInput
                        label="Pet Name"
                        name="petName"
                        id="petName"
                        type="text"
                        placeholder="Dacey"
                        value={petName}
                        onChange={(e) => {
                            setPetName(e.target.value);
                        }}
                        error={errors.petName && 'Pet name is required.'}
                    />
                    <TextInput
                        label="Date"
                        name="aptDate"
                        id="aptDate"
                        type="date"
                        pattern="\d{4}-\d{2}-\d{2}"
                        value={aptDate}
                        onChange={(e) => {
                            setAptDate(e.target.value);
                        }}
                        error={
                            (errors.aptDate && 'Date is required.') ||
                            (errors.aptDateInvalid &&
                                'Date is invalid. Enter current or future date.')
                        }
                    />
                    <TextInput
                        label="Time"
                        name="aptTime"
                        id="aptTime"
                        type="time"
                        value={aptTime}
                        onChange={(e) => {
                            setAptTime(e.target.value);
                        }}
                        error={
                            (errors.aptTime && 'Time is required.') ||
                            (errors.aptTimeInvalid &&
                                'Time is invalid. Enter current or future time.')
                        }
                    />
                    <TextArea
                        label="Appointment Notes"
                        id="aptNotes"
                        name="aptNotes"
                        placeholder="Detailed comments about the pet condition..."
                        value={aptNotes}
                        onChange={(e) => {
                            setAptNotes(e.target.value);
                        }}
                        error={
                            errors.aptNotes && 'Appointment note is required.'
                        }
                    />
                    <div className="flex justify-end pt-2">
                        <Button
                            variant="primary"
                            alignText="center"
                            rounded="full"
                            type="submit"
                            onClick={addAppointment}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            )}
            {showAlert && (
                <Alert
                    message="Appointment successfully added."
                    onXClick={() => setShowAlert(false)}
                />
            )}
        </div>
    );
}
