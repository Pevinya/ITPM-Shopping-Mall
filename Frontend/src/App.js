import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Users from "./pages/Profile";

import CreateFeedback from "./pages/CreateFeedback";
import DisplayFeedback from "./pages/DisplayFeedback";
import FeedbacksByUser from "./pages/FeedbacksByUser";
import AddProductForm from "./pages/addProducts";

import CreatePackages from "./pages/CreatePackages";
import PackagesView from "./pages/PackagesView/PackagesView";
import UpdatePackageForm from "./pages/UpdatePackageForm/UpdatePackageForm";
import Shopping from "./pages/shoppingPage";
import Clothes from "./pages/Levels/clothes";
import Phones from "./pages/Levels/phones";
import Cosmetics from "./pages/Levels/cosmetics";
import Community from "./pages/Community/types";
import PackagesViewUser from "./pages/PackagesViewUser/index";

//import Shoppers from './pages/Community/Shoppers';

// import types from "./pages/Community/types";
import Shoppers from "./pages/Community/Shoppers";
import Foodies from "./pages/Community/Foodies";
import KidsFamily from "./pages/Community/KidsFamily";
import Leisure from "./pages/Community/Leisure";

// import Community from './pages/Community/types';

import "./stylesheets/allignment.css";
import "./stylesheets/theme.css";
import "./stylesheets/sizes.css";
import "./stylesheets/customcomponenets.css";
import "./stylesheets/formelements.css";

import ProtectedRoute from "./Components/ProtectedRoute";
import ShowProducts from "./pages/showProduct";
//import StoreDirectory from "./pages/Levels/groceries";
import AdminAdd from "./pages/adminAdd";
import ShowShopsProducts from "./pages/showShopsProduct";

import AppHeader from "./pages/Header";
import AppFooter from "./pages/Footer";
//import UserTable from './pages/Profile';
import UserDetailsForm from "./pages/Profile/viewprofile";
// import ShoppingListView from "./pages/shoppinglist/listview";
import AdminManageProfiles from "./pages/admindashbaord/viewadmindash";
import AdminHome from "./pages/Home/adminhome";
// import { Header } from "antd/es/layout/layout";
import AppHeader1 from "./pages/Header1";
import ViewProductForm from "./pages/addProducts/userview";


import UpdateShoppingList from './pages/shoppinglist/updateShopping'
import CreateShoppingList from './pages/shoppinglist/createShoppingList';
import ViewShoppingList from './pages/shoppinglist/viewShoppingList';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* {/Pevinya/} */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/UserDetailsForm" element={<UserDetailsForm />} />
          <Route path="/admindash" element={<AdminManageProfiles />} />
          {/* <Route path="/ShoppingListView" element={<ShoppingListView />} /> */}
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminheader" element={<AppHeader1 />} />
          <Route path="/viewproducts" element={<ViewProductForm />} />


          

          



          {/*Lakitha */}
          <Route path="/feedback" element={<CreateFeedback />} />
          <Route path="/displayFeedbacks" element={<DisplayFeedback />} />
          <Route path="/feedbacksByUser" element={<FeedbacksByUser />} />

          {/* <Route exact path="/joining-community/:name" element={<Shoppers />} /> */}

          {/*Nishedi */}
          <Route path="/package" element={<CreatePackages />} />
          <Route path="/packagesView" element={<PackagesView />} />
          <Route path="/update-package/:id" element={<UpdatePackageForm />} />
          <Route
            path="/update-package-form/:id"
            element={<UpdatePackageForm />}
          />
          <Route path="/packagesViewUser" element={<PackagesViewUser />} />
          <Route path="/level3" element={<Phones />} />
          <Route path="/level4" element={<Cosmetics />} />
          <Route path="/community" element={<Community />} />
          <Route path="/" element={<types />} />
          <Route path="/shoppers" element={<Shoppers />} />
          <Route path="/foodie" element={<Foodies />} />
          <Route path="/kidsfamily" element={<KidsFamily />} />
          <Route path="/leisure" element={<Leisure />} />
          <Route path="/home" element={<Home />} />

          {/*Lakshima */}
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/header" element={<AppHeader />} />
          <Route path="/footer" element={<AppFooter />} />
          <Route path="/level1" element={<StoreDirectory />} />
          <Route path="/level2" element={<Clothes />} />
          <Route path="/showProducts" element={<ShowProducts />} />
          <Route path="/show-Products/:name" element={<ShowShopsProducts />} />
          <Route path="/adminAdd" element={<AdminAdd />} />
          <Route exact path="/add-product/:name" element={<AddProductForm />} />
          {/* <Route path='/showOneProduct' element={<ShowOneProduct/>}/> */}

          <Route path='/createShoppingList' element={<CreateShoppingList/>} />
          <Route path='/viewShoppingList' element={<ViewShoppingList/>} />
          <Route path='/updateShoppingList' element={<UpdateShoppingList/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

