import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import { FaSave } from "react-icons/fa";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
  
       <BrowserRouter>
       <Header/>
        
        <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
         <Route path="/contact-us" element={<ContactUs/>} />
          {/* <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} /> */}

        </Routes>
       
       </BrowserRouter>
       <button className="btn btn-primary d-flex gap-2 align-align-items-center"><FaSave className="fs-4 text-dark" /><span>Save</span></button>
    </>
  );
}
export default App;
