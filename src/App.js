import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";


const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const WishList = lazy(() => import("./pages/wishlist"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Cart = lazy(() => import("./pages/cart"));

 
function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
