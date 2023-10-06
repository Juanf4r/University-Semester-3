import HomeSection from "../pages/Home Section"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Aside from "./Aside"
import {Routes,Route} from 'react-router-dom'
import Calculator from "../pages/Calculator"

const AppRouter = () => {
return (
    <>
        <Aside/>
        <Routes>
            <Route path="/*" element={<HomeSection/>}/>
            <Route path="/home" element={<HomeSection/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Services/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
        </Routes>
    </>
)}

export default AppRouter