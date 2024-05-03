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
import ViewProducts from './pages/ViewProducts';
import AppHeader from './pages/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Users/>} />
          <Route path='/feedback' element={<CreateFeedback />} />
          <Route path='/displayFeedbacks' element={<DisplayFeedback />} /> 
          <Route path='/feedbacksByUser' element={<FeedbacksByUser />} /> 
          <Route path='/package' element={<Package />} />
          <Route path='/viewproducts' element={<ViewProducts />} />
          <Route path='/header' element={<AppHeader/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;