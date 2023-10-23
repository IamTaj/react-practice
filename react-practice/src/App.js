import "./App.css";
import Product1 from "./api_fetching/Product1";
import ButtonMUI from "./dummyfiles/ButtonMUI";
import DataFetch from "./dummyfiles/DataFetch";
import Cart from "./api_fetching/Cart";
import NavBar from "./router/NavBar";
import Home from "./router/Home";
import About from "./router/About";
import Error from "./Error";
import Signup from "./router/Signup";
import Login from "./router/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
