import { Link } from "react-router-dom"

function About() {
return (
<body className="dark">
    <div className="main-container">
        <section className="about section" id="about">
            <div className="container">
                <div className="row">	
                    <div className="section-title padd-15">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>I'm Juan Fernando Aispuro a <span>Software Engineer</span></h3>
                                <p>I'm a 3rd semester student in Interactive Software Engineering in Video
                                    Games in preparation for the future seeking a job opportunity in the
                                    Field of Gaming Development.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birtday : <span>04 sep 2004</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Age : <span>19</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Website : <span>juanf4r.github.io</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span>Juanfernand2004@hotmail</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Degree : <span>CS</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Phone : <span>+52 669 212 7762</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>City : <span>Zapopan, Jalisco, Mexico</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Freelance : <span>Available</span></p>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="buttons padd-15">
                                        <i><Link data-section-index="1" className="btn hire-me" to={"/contact"}>Hire me</Link></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            {/* <!-- ===== timeline item ===== --> */}
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2019-2022
                                                    </h3>
                                                    <h4 className="timeline-title">High School</h4>
                                                    <p className="timeline-text">Instituto Anglo Moderno, ubicated in Mazatlan, Sinaloa, Mexico</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022-2026
                                                    </h3>
                                                    <h4 className="timeline-title">Degree in Software Engineer</h4>
                                                    <p className="timeline-text">Universidad Amerike, ubicated in Zapopan, Jalisco, Mexico</p>
                                            </div>
                                            {/* <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2013-2015
                                                    </h3>
                                                    <h4 className="timeline-title">Master in Computer Science</h4>
                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Id porro ad placeat deserunt? Sint, accusamus 
                                                    eveniet nostrum harum corporis dolores enim blanditiis iure iusto mollitia?</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                {/* <!-- <h3 className="title">Experience</h3> -->
                                <!-- <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            ===== timeline item ===== 
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2013-2015
                                                    </h3>
                                                    <h4 className="timeline-title">Master in Computer Science</h4>
                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Id porro ad placeat deserunt? Sint, accusamus 
                                                    eveniet nostrum harum corporis dolores enim blanditiis iure iusto mollitia?</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2013-2015
                                                    </h3>
                                                    <h4 className="timeline-title">Master in Computer Science</h4>
                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Id porro ad placeat deserunt? Sint, accusamus 
                                                    eveniet nostrum harum corporis dolores enim blanditiis iure iusto mollitia?</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2013-2015
                                                    </h3>
                                                    <h4 className="timeline-title">Master in Computer Science</h4>
                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Id porro ad placeat deserunt? Sint, accusamus 
                                                    eveniet nostrum harum corporis dolores enim blanditiis iure iusto mollitia?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <p className="footer">Created by JuanFer Aispuro Sanchez</p>
        </footer>
    </div>
</body>
)}

export default About