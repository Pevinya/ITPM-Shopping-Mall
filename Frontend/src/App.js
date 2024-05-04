import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Profile';
import CreateFeedback from './pages/CreateFeedback';
import DisplayFeedback from './pages/DisplayFeedback';
import FeedbacksByUser from './pages/FeedbacksByUser';
import Package from './pages/Package';

import './stylesheets/allignment.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/customcomponenets.css';
import './stylesheets/formelements.css';
import ProtectedRoute from './Components/ProtectedRoute';
import AddProduct from './pages/AddProducts';
import AppHeader from './pages/Header';
import AppFooter from './pages/Footer';
import StoreDirectory from './pages/Levels/Groceries';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*Pevinya*/}
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Users/>} />






          {/*Lakitha */}
          <Route path='/feedback' element={<CreateFeedback />} />
          <Route path='/displayFeedbacks' element={<DisplayFeedback />} /> 
          <Route path='/feedbacksByUser' element={<FeedbacksByUser />} /> 







         









          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;