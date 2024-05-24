import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Components/Contact'
import About from './Components/About'
import Home from './Components/Home'
import Products from "./Components/Products";
import Login from './Components/Login'
import Register from './Components/Register'
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route key="Home" path="/" element={<Home />} />
          <Route key="Home" path="/Home" element={<Home />} />
          <Route key="Products" path="/Products" element={<Products />} />
          <Route key="Contact" path="/Contact" element={<Contact />} />
          <Route key="About" path="/About" element={<About />} />
         <Route key="Login" path="/Login" element={<Login />} />
         <Route key="Register" path="/Register" element={<Register />} />

        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App