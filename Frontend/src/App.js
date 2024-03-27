import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './stylesheets/allignment.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/customcomponenets.css';
import './stylesheets/formelements.css';
import CreateFeedback from './pages/CreateFeedback';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


          <Route path='/feedback' element={<CreateFeedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
