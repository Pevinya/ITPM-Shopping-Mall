import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Profile';
import CreateFeedback from './pages/CreateFeedback'; // Import the CreateFeedback component
import Package from './pages/Package';

import './stylesheets/allignment.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/customcomponenets.css';
import './stylesheets/formelements.css';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Users/>} />
          <Route path='/feedback' element={<CreateFeedback />} /> {/* Add this route */}
          <Route path='/package' element={<Package />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;