import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import CompareProduct from "./Pages/CompareProduct";
import Contact from "./Pages/Contact";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import OurStore from "./Pages/OurStore";
import PrivecyPolicy from "./Pages/PrivecyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ResetPassword from "./Pages/ResetPassword";
import ShippingPolicy from "./Pages/ShippingPolicy";
import SignUp from "./Pages/SignUp";
import SingleBlog from "./Pages/SingleBlog";
import SingleProduct from "./Pages/SingleProduct";
import TermAndConditions from "./Pages/TermAndConditions";
import Wishlist from "./Pages/Wishlist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="/ourstore" element={<OurStore />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="blog/:id" element={<SingleBlog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/compare" element={<CompareProduct />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/privecy-policy" element={<PrivecyPolicy />}></Route>
          <Route path="/refund-policy" element={<RefundPolicy />}></Route>
          <Route path="/shipping-policy" element={<ShippingPolicy />}></Route>
          <Route
            path="/terms-and-conditions"
            element={<TermAndConditions />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
