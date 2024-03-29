
import { FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { AddOutlined, DeleteOutlineOutlined, EditCalendar, Save } from '@mui/icons-material';
import Dropdown from 'react-bootstrap/Dropdown';

function CustomRow({ client, index, updateClient, handleShowEditModal, handleDeleteAppointment, handleShowAddModal, handleDeleteClient }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(client.firstName);
  const [lastName, setLastName] = useState(client.lastName);
  const [location, setLocation] = useState(client.location);
  const [isSubmitted, setIsSumitted] = useState(false)

  const handleSubmit = () => {
    setIsSumitted(true)
    if (firstName && lastName && location) {
      updateClient(index, firstName, lastName, location)
      setIsEditing(false)
    }
  }



  return (
    <tr key={client.id} className=' hover:bg-slate-50 border-gray-200 '>
      <td className="px-2 sm:px-4 py-0 text-sm font-medium border-gray-200 whitespace-nowrap rounded-l-lg border-t-2 border-b-2 border-l-2">

        <FormControl
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!isEditing}
          isInvalid={isSubmitted && !firstName}
        />
      </td>
      <td className="px-2 sm:px-4 py-2 text-sm font-medium border-gray-200 whitespace-nowrap border-t-2 border-b-2">

        <FormControl
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={!isEditing}
          isInvalid={isSubmitted && !lastName}
        />
      </td>
      <td className="px-2 sm:px-4 py-2 text-sm border-gray-200 whitespace-nowrap border-t-2 border-b-2">

        <FormControl
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={!isEditing}
          isInvalid={isSubmitted && !location}

        />
      </td>
      <td className="px-2 sm:px-4 py-2 text-sm whitespace-nowrap border-gray-200 border-t-2 border-b-2">
        <ul className='pt-3 px-0 ' >
          {client.appointments.map((appointment, index) => (
            <li key={index} className='flex gap-2 mb-2' >
              <Link to="/calendar">
                <Button
                  variant='contained'
                  size="sm"
                  style={{ 'minWidth': 'unset' }}
                  className='bg-blue-500 shadow-none  '
                  disabled={isEditing}

                >
                  {appointment.date} at {appointment.time}
                </Button>
              </Link>
              <Button
                variant='contained'
                size="sm"
                className='bg-blue-500 shadow-none w-8 '
                style={{ 'backgroundColor': isEditing ? 'rgba(0, 0, 0, 0.12)' : 'rgb(234 179 8 )', 'minWidth': 'unset' }}
                onClick={() => handleShowEditModal(client, appointment)}
                disabled={isEditing}
              >
                <EditCalendar fontSize='small' color='blue' />
              </Button>
              <Button
                variant='contained'
                size="sm"
                className='bg-blue-500 shadow-none w-8 '
                style={{ 'backgroundColor': isEditing ? 'rgba(0, 0, 0, 0.12)' : ' rgb(239 68 68)', 'minWidth': 'unset' }}
                onClick={() => handleDeleteAppointment(client)}
                disabled={isEditing}

              >
                <DeleteOutlineOutlined fontSize='small' color='blue' />
              </Button>
            </li>
          ))}
        </ul>
      </td>
      {/* handleDeleteClient */}

      <td className=" px-2 sm:px-4 py-2 text-sm whitespace-nowrap  border-gray-200 rounded-r-lg border-t-2 border-b-2 border-r-2">


        <div className="flex justify-center items-center gap-2">

          {!isEditing ? <Dropdown >
            <Dropdown.Toggle  disabled={isEditing}>

            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleShowAddModal(client)}>
                <div  className='flex gap-2  items-center'>
                  <AddOutlined fontSize='small' color='blue' /><span>Add Appointment</span>
                </div>
                </Dropdown.Item>
              <Dropdown.Item onClick={() => setIsEditing(true)}><div
              className='flex gap-2  items-center'>
                <EditIcon fontSize='small' color='blue' /> <span>Edit Client</span>
              </div></Dropdown.Item>
              <Dropdown.Item onClick={() => handleDeleteClient(client)}><div className='flex gap-2  items-center'>
                <DeleteOutlineOutlined fontSize='small' color='blue' /><span>Delete Client</span>
              </div></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            :
            <Button
              variant='contained'
              size="sm"
              style={{ 'backgroundColor': 'rgb(22 163 74)', 'minWidth': 'unset' }}
              className='bg-green-600 shadow-none w-8  '
              onClick={() => handleSubmit()}
            >
              <Save fontSize='small' color='white' />
            </Button>}


        </div>

      </td>
    </tr>
  )
}

export default CustomRow