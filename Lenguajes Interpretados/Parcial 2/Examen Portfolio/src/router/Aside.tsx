import { Link } from "react-router-dom"
import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

const Aside = () => {
return (
    
    <body className="dark">
        <div className="main-container">
            <div className="aside">
                <div className="logo">
                    <a href="#"><span>Juanfer</span>Dev</a>
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/skills"}>Skills</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/calculator"}>Secret</Link></li>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/juan-fernando-aispuro-sanchez-05008b224/" target="_blank"><AiFillLinkedin/></a></li>
                        <li><a href="https://github.com/Juanf4r" target="_blank"><AiFillGithub/></a></li>
                    </ul>
                </ul>
                
            </div>
        </div>
    </body>
)}

export default Aside