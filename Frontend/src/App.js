import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Profile';
import CreateFeedback from './pages/CreateFeedback';
import DisplayFeedback from './pages/DisplayFeedback';
import FeedbacksByUser from './pages/FeedbacksByUser';
import Packages from './pages/Packages';
import StoreDirectory from './pages/Levels/groceries';
import Shopping from './pages/shoppingPage';
import Clothes from './pages/Levels/clothes';
import Phones from './pages/Levels/phones';
import Cosmetics from './pages/Levels/cosmetics';
import AdminAdd from './pages/adminAdd/index';

import './stylesheets/allignment.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/customcomponenets.css';
import './stylesheets/formelements.css';
import ProtectedRoute from './Components/ProtectedRoute';
import AddProduct from './pages/addProducts/clothes';
import ShowProducts from './pages/showProduct';
import AppHeader from './pages/Header';
import AppFooter from './pages/Footer';


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









           {/*Nishedi */}
           <Route path='/package' element={<Packages />} />
           <Route path='/level3' element={<Phones/>}/>
           <Route path='/level4' element={<Cosmetics/>}/>


          




            {/*Lakshima */}
            <Route path='/addProducts' element={<AddProduct />} />
            <Route path='/shopping' element={<Shopping/>}/>
            <Route path='/header' element={<AppHeader/>} />
            <Route path='/footer' element={<AppFooter/>} />
            <Route path='/level1' element={<StoreDirectory/>}/>
            <Route path='/level2' element={<Clothes/>}/>
            <Route path='/showProducts' element={<ShowProducts/>}/>
            <Route path='/adminAdd' element={<AdminAdd/>}/>




                    





    
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;