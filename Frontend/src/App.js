import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
//import Users from './pages/Profile';


import CreateFeedback from './pages/CreateFeedback';
import DisplayFeedback from './pages/DisplayFeedback';
import FeedbacksByUser from './pages/FeedbacksByUser';
import AddProductForm from './pages/addProducts';


import CreatePackages from './pages/CreatePackages';
import PackagesView from './pages/PackagesView/PackagesView';
import UpdatePackageForm from "./pages/UpdatePackageForm/UpdatePackageForm";


import Shopping from './pages/shoppingPage';
import Clothes from './pages/Levels/clothes';
import Phones from './pages/Levels/phones';
import Cosmetics from './pages/Levels/cosmetics';
import Community from './pages/Community/types';
import Shoppers from './pages/Community/Shoppers';


// import Community from './pages/Community/types';

import './stylesheets/allignment.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/customcomponenets.css';
import './stylesheets/formelements.css';



import ProtectedRoute from './Components/ProtectedRoute';
import ShowProducts from './pages/showProduct';
import StoreDirectory from './pages/Levels/groceries';
import AdminAdd from './pages/adminAdd';
import ShowShopsProducts from './pages/showShopsProduct';

import AppHeader from './pages/Header';
import AppFooter from './pages/Footer';
//import UserTable from './pages/Profile';
import UserDetailsForm from './pages/Profile/viewprofile';
import ShoppingListView from './pages/shoppinglist/listview';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*Pevinya*/}
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/UserDetailsForm' element={<UserDetailsForm/>} />
          
          <Route path='/ShoppingListView' element={<ShoppingListView/>} />
        






          {/*Lakitha */}
          <Route path='/feedback' element={<CreateFeedback />} />
          <Route path='/displayFeedbacks' element={<DisplayFeedback />} /> 
          <Route path='/feedbacksByUser' element={<FeedbacksByUser />} /> 

          <Route exact path="/add-community/:name" element={<Shoppers />} />






           {/*Nishedi */}
           <Route path='/package' element={<CreatePackages />} />
           <Route path='/packagesView' element={<PackagesView />} />
           <Route path='/update-package/:id' element={<UpdatePackageForm />} />
           <Route path='/update-package-form/:id' element={<UpdatePackageForm />} />
           <Route path='/level3' element={<Phones/>}/>
           <Route path='/level4' element={<Cosmetics/>}/>
           <Route path='/community' element={<Community/>}/>
            
       


          




            {/*Lakshima */}
            <Route path='/shopping' element={<Shopping/>}/>
            <Route path='/header' element={<AppHeader/>} />
            <Route path='/footer' element={<AppFooter/>} />
            <Route path='/level1' element={<StoreDirectory/>}/>
            <Route path='/level2' element={<Clothes/>}/>
            <Route path='/showProducts' element={<ShowProducts/>}/>
            <Route path='/show-Products/:name' element={<ShowShopsProducts/>}/>
            <Route path='/adminAdd' element={<AdminAdd/>}/>
            <Route exact path="/add-product/:name" element={<AddProductForm />} />
            {/* <Route path='/showOneProduct' element={<ShowOneProduct/>}/> */}
            




          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;