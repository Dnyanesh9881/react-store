import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import lazyLoad from "./lazyLoad";
import Loading from "./components/Loading";
// import Navbar from "./components/Navbar";
// import Home from "./pages/home";

const Home = lazyLoad("./pages/home");
const About = lazyLoad("./pages/about");
const WishList = lazyLoad("./pages/wishlist");
const Signup = lazyLoad("./pages/signup");
const Login = lazyLoad("./pages/login");
const Cart = lazyLoad("./pages/cart");


function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
