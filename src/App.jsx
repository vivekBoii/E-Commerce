
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import SignUp from './Pages/SignUp';
import Login from "./Pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth, db } from "./Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import { setActiveUser } from "./Redux/User/UserReducer";
import Resetpassword from "./Pages/Resetpassword";
import AddProductForm from "./Pages/AddProduct";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import User from "./Pages/User";
import Description from "./Pages/Description";
import { doc, getDoc } from "firebase/firestore";
import DashboardAdmin from "./Pages/DashboardAdmin";
import Checkout from "./Pages/Checkout";
import ProductListAdmin from "./Pages/ProductListAdmin";
import OrdersAdmin from "./Pages/OrdersAdmin";
import UsersAdmin from "./Pages/UsersAdmin";
import ReviewAdmin from "./Pages/ReviewAdmin";
import Payment from "./Pages/Payment";
import AllProductAdmin from "./Pages/AllProductAdmin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        const uid = user.uid;
        const querySnapshot = await getDoc(doc(db, "Users",uid));
        const query = querySnapshot.data();
        console.log(query);
        dispatch(setActiveUser({
          email:user.email,
          userName:user.displayName,
          userId:user.uid,
          createdAt:query.createdAt,
          wishList:query.wishList,
          role:query.Role,
        }))
      } else {
        console.log("logged out");
      }
      console.log(new Date()*1000)
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='auth/SignUp' element={<SignUp />} />
            <Route path='auth/Login' element={<Login />} />
            <Route path='auth/Reset' element={<Resetpassword />} />
            <Route path='admin/product/new' element={<AddProductForm/>} />
            <Route path='admin/product' element={<AllProductAdmin/>} />
            <Route path='product' element={<Products/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='profile' element={<User/>} />
            <Route path='description/:id' element={<Description/>} />
            <Route path='admin/dashboard' element={<DashboardAdmin/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/admin/allproducts' element={<ProductListAdmin/>} />
            <Route path='/admin/orders' element={<OrdersAdmin/>} />
            <Route path='/admin/users' element={<UsersAdmin/>} />
            <Route path='/admin/review' element={<ReviewAdmin/>} />
            <Route path='/payment' element={<Payment/>} />
            {/* <Route path='resumeTemplates' element={<ResumeTemplates />} />
            <Route path='create' element={<Create />} />
            <Route path='create/template1' element={<Template1 />} />
            <Route path='create/template2' element={<Template2 />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
