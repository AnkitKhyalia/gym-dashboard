import { Modal } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment/moment';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { useState } from 'react';



function AddAppointment({ setFormData, selectedClient, showAddModal, handleCloseAddModal, formData, handleAddAppointment, validSlots }) {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState('');
  const handleScheduled = (date) => {
    setIsScheduling(true);
    setScheduleErr('');
    let selectedDate = moment(date).format('L')
    let selectedTime = moment(date).format().split('T')[1].slice(0, 5)
    setFormData({ ...formData, time: selectedTime, date: selectedDate, fullDate: date })
    handleAddAppointment(selectedDate, selectedTime, moment(date).format())
    setIsScheduling(false)
    setIsScheduled(true)
    handleCloseAddModal()
    setIsScheduled(false)
  }


  const vaildTimeSlots = (slot) => {
    for (const currSlot of validSlots) {
      if (moment(currSlot).format() === moment(slot).format()) {
        return false;
      }
    }
    return true;
  }

  return (
    <div>

      {/* Modal for adding appointment */}
      <Modal show={showAddModal} onHide={handleCloseAddModal} centered>

        <Modal.Header closeButton>
          <Modal.Title>
            Add Appointment for <span className="text-blue-400">{selectedClient?.firstName} {selectedClient?.lastName}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DayTimePicker
            timeSlotSizeMinutes={60}
            isLoading={isScheduling}
            isDone={isScheduled}
            err={scheduleErr}
            onConfirm={handleScheduled}
            timeSlotValidator={vaildTimeSlots}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddAppointment;
