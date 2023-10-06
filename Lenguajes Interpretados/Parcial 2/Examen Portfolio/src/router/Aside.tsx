import { Link } from "react-router-dom"

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
                </ul>
                <ul>
                    {/* <li></li> Aqui van mis redes Sociales */}
                </ul>
            </div>
        </div>
    </body>
)}

export default Aside