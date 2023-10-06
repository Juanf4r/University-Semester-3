import { Link } from "react-router-dom"
import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillHome} from "react-icons/ai"
import {BiSolidUser} from "react-icons/bi"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {BsBriefcaseFill} from "react-icons/bs"
import {FaComments} from "react-icons/fa"
import {FaUserSecret} from "react-icons/fa"

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
                    <li><Link to={"/home"}><AiFillHome/>  Home</Link></li>
                    <li><Link to={"/about"}><BiSolidUser/>  About</Link></li>
                    <li><Link to={"/skills"}><AiOutlineUnorderedList/>  Skills</Link></li>
                    <li><Link to={"/portfolio"}><BsBriefcaseFill/>  Portfolio</Link></li>
                    <li><Link to={"/contact"}><FaComments/>  Contact</Link></li>
                    <li><Link to={"/calculator"}><FaUserSecret/>  Secret</Link></li>
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