import { Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

const LeftDrawer = ({active}) => {

    return (
        <div className=" w-64 h-screen bg-blue-950 m-3 rounded-xl shadow-md">

            <div className="flex items-center justify-center my-8">
                <img className="" src="logo.png" alt="logo" />
            </div>
            <Nav className="flex flex-col gap-2 mx-2">
                <>
                    <Link to="/" className="nav-link text-white text-lg bg-gray-600 hover:bg-gray-500  rounded-md p-2">
                    Appointments
                    </Link>
                    <Link to="/calendar" className="nav-link text-white text-lg bg-gray-600 hover:bg-gray-500  rounded-md p-2">
                        Calendar
                    </Link>

                </>
            </Nav>


        </div>

    )
}

export default LeftDrawer