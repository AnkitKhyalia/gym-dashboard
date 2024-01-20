
const LeftDrawer = () => {
  return (
    <div className=" w-64 h-screen bg-gray-900">

        <div className="flex items-center justify-center mt-10">
            <img className="h-12" src="https://img.icons8.com/color/96/000000/two-hearts.png" alt="logo"/>
        </div>

        <nav className="mt-10">
            <a className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="/">
                <span className="mx-3">Dashboard</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="/calendar">
                <span className="mx-3">Calendar</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="/settings">
                <span className="mx-3">Settings</span>
            </a>
        </nav>
    </div>
    
  )
}

export default LeftDrawer