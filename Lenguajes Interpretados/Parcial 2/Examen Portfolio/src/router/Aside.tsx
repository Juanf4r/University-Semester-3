import { Link } from "react-router-dom"

const Aside = () => {
return (
        <div className="aside">
            <div className="logo">
                <a href="#"><span>Juanfer</span>Dev</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li><Link to={"/home"}></Link><a className="active"><i className="fa fa-home"></i>Home</a></li>
                <li><Link to={"/about"}></Link><a href="#about"><i className="fa fa-user"></i>About</a></li>
                <li><Link to={"/skills"}></Link><a href="#services"><i className="fa fa-list"></i>Skills</a></li>
                <li><Link to={"/portfolio"}></Link><a href="#portfolio"><i className="fa fa-briefcase"></i>Portfolio</a></li>
                <li><Link to={"/contact"}></Link><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
            </ul>
        </div>
)}

export default Aside