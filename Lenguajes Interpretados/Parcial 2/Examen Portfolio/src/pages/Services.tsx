import {FaGamepad} from 'react-icons/fa'
import {FaFreeCodeCamp} from 'react-icons/fa'
import {BiLogoPython} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillMobile} from 'react-icons/ai'
import {BiSolidServer} from 'react-icons/bi'

function Services() {
return(
<body className="dark">
    <div className="main-container">
                <section className="service section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fab fa-free-code-camp"><FaFreeCodeCamp/></i>
                                    </div>
                                    <h4>C++</h4>
                                    <p>1 Year & 6 Months of Experience on Development in console applications projects.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-gamepad"><FaGamepad/></i>
                                    </div>
                                    <h4>C# Unity</h4>
                                    <p>1 Year of Experience on Game Development, creating 2D Games for Mobile and Pc.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fab fa-python"><BiLogoPython/></i>
                                    </div>
                                    <h4>Python</h4>
                                    <p>Just starting, Very Enthusiastic to learn Python for Web Development and Console Applications Projects.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-code"><BsCodeSlash/></i>
                                    </div>
                                    <h4>HTML/CSS/JavaScript</h4>
                                        <p>1 Year of Experience on Front end Development, creating templates and updating my Portfolio.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-mobile-alt"><AiFillMobile/></i>
                                    </div>
                                    <h4>Flutter</h4>
                                    <p>Just starting, Very Enthusiastic to learn Dart for App Development for ios and Android.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                            {/* <!-- ===== Service item Start ===== --> */}
                            <div className="service-item padd-15">
                                <div className="service-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-server"><BiSolidServer/></i>
                                    </div>
                                    <h4>Java</h4>
                                    <p>Just starting, Very Enthusiastic to learn Java to create Minecraft Mods and Servers.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ===== Service item End ===== --> */}
                        </div>
                    </div>
                </section>
    </div>
    <footer>
        <p className="footer">Created by JuanFer Aispuro Sanchez</p>
    </footer>
</body>
)}

export default Services