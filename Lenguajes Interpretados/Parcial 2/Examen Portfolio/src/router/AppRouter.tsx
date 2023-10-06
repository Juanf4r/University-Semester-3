import HomeSection from "../pages/Home Section"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Aside from "./Aside"
import SnakeGame from "../pages/SnakeGame"
import {Routes,Route} from 'react-router-dom'

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
            <Route path="/SnakeGame" element={<SnakeGame/>}/>
        </Routes>
    </>
)}

export default AppRouter