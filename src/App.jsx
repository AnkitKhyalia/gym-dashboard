import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import LeftDrawer from './components/LeftDrawer';

function App() {

  return (
    <div>
    
      <Router>
        <div className=''>
            {/* <Header /> */}
            <div className='flex  gap-4'>
              <LeftDrawer/> 
            <div  className='flex-1'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
          </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
