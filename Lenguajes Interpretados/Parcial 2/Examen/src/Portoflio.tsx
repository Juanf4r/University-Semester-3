import './css/Style.css' 
import './css/normalize.css' 
import './css/StyleSwitcher.css' 
import './css/Skins/Color-1.css' 
import './css/Skins/Color-2.css' 
import './css/Skins/Color-3.css' 
import './css/Skins/Color-4.css' 
import './css/Skins/Color-5.css' 

function Portoflio() {
  return (
    <div>
      <body className="dark">
        <div className="main-container">
            {/* ==== Aside Start ===== */}
            <div className="aside">
                <div className="logo">
                    <a href="#"><span>Juanfer</span>Dev</a>
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    <li><a href="#home" className="active"><i className="fa fa-home"></i> Home</a></li>
                    <li><a href="#about"><i className="fa fa-user"></i> About</a></li>
                    <li><a href="#services"><i className="fa fa-list"></i>Skills</a></li>
                    <li><a href="#portfolio"><i className="fa fa-briefcase"></i>Portfolio</a></li>
                    <li><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
                </ul>
            </div>
            {/* <!-- ==== Aside End ===== --> */}
            {/* <!-- ==== Main Content Start ===== --> */}
            <div className="main-content">
                {/* <!-- ==== Home Section Start ===== --> */}
                <section className="home active section" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="home-info padd-15">
                                <h3 className="hello">Hello, my name is <span className="name">Juan Fernando Aispuro</span></h3>
                                <h3 className="my-profession">I'm a <span className="typing"></span></h3>
                                <p>I'm a Software Developer with extensive experience for over 2 years. My expertise is related to
                                Game Development, Game Design, Software Development and many more...</p>
                                <a href="https://drive.google.com/drive/folders/1Te8OojDhtpI-DQuM3wwI-YUzXRLTm3lj?usp=sharing" target="_blank" className="btn">See my CV</a>
                            </div>
                            <div className="home-img padd-15">
                                <img src="img/hero.jpg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ==== Home Section End ===== --> */}
                {/* <!-- ==== About Section Start ===== --> */}
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
                                                <a href="#contact" data-section-index="1" className="btn hire-me">Hire me</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skills padd-15">
                                        <div className="row">
                                            <div className="skill-item padd-15">
                                                <h5>C++</h5>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Unity</h5>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>HTML</h5>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>CSS</h5>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Python</h5>
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
                {/* <!-- ==== About Section End ===== --> */}
                {/* <!-- ==== Services Section Start ===== --> */}
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
                                        <i className="fa fab fa-free-code-camp"></i>
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
                                        <i className="fa fa-gamepad"></i>
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
                                        <i className="fa fab fa-python"></i>
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
                                        <i className="fa fa-code"></i>
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
                                        <i className="fa fa-mobile-alt"></i>
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
                                        <i className="fa fa-server"></i>
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
                {/* <!-- ==== Services Section End ===== --> */}
                {/* <!-- ==== Portfolio Section Start ===== --> */}
                <section className="portfolio section" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portfolio-heading padd-15">
                                <h2>My Last Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!-- ===== portfolio item Start =====--> */}
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <a href="https://play.google.com/store/apps/details?id=com.Juanfer.Taptostream&hl=es_419&gl=US" target="_blank">
                                            <img src="img/imagen1.png" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ===== portfolio item End =====--> */}
                            {/* <!-- ===== portfolio item Start =====--> */}
                            {/* <!--<div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src="img/imagen2.jpeg" alt=""></img>
                                    </div>
                                </div>
                            </div>-->
                            <!-- ===== portfolio item End =====-->
                            <!-- ===== portfolio item Start =====-->
                            <!--<div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src="img/imagen3.jpg" alt="">
                                    </div>
                                </div>
                            </div> -->
                            <!-- ===== portfolio item End =====-->
                            <!-- ===== portfolio item Start =====-->
                            <!--<div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src="img/imagen4.jpg" alt="">
                                    </div>
                                </div>
                            </div>-->
                            <!-- ===== portfolio item End =====-->
                            <!-- ===== portfolio item Start =====-->
                            <!--<div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src="img/imagen5.jpg" alt="">
                                    </div>
                                </div>
                            </div>-->
                            <!-- ===== portfolio item End =====-->
                            <!-- ===== portfolio item Start =====-->
                            <!--<div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src="img/imagen6.jpeg" alt="">
                                    </div>
                                </div>
                            </div>-->
                            <!-- ===== portfolio item End =====--> */}
                        </div>
                    </div>
                </section>
                {/* <!-- ==== Portfolio Section End ===== --> */}
                {/* <!-- ==== Contact Section Start ===== --> */}
                <section className="contact section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Contact Me</h2>
                            </div>
                        </div>
                        <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                        <div className="row">
                            {/* <!-- ===== Contact info item start ===== --> */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-phone"></i></div>
                                <h4>Call Me</h4>
                                <p>+52 669 212 7762</p>
                            </div>
                            {/* <!-- ===== Contact info item End ===== --> */}
                            {/* <!-- ===== Contact info item start ===== --> */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                                <h4>Office</h4>
                                <p>Zapopan, Jalisco</p>
                            </div>
                            {/* <!-- ===== Contact info item End ===== --> */}
                            {/* <!-- ===== Contact info item start ===== --> */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-envelope"></i></div>
                                <h4>Email</h4>
                                <p>Juanfernand2004@hotmail.com</p>
                            </div>
                            {/* <!-- ===== Contact info item End ===== --> */}
                            {/* <!-- ===== Contact info item start ===== --> */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-globe-europe"></i></div>
                                <h4>website</h4>
                                <p>juanf4r.github.io</p>
                            </div>
                            {/* <!-- ===== Contact info item End ===== --> */}
                        </div>
                        <h3 className="contact-title padd-15">SEND ME A MESSAGE</h3>
                        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE</h4>
                        {/* <!-- ===== Contact Form ===== --> */}
                        <form action="https://formsubmit.co/juanfernand2004@hotmail.com" method="POST">
                            <div className="row">
                                <div className="contact-form padd-15">
                                    <div className="row">
                                        <div className="form-item col-6 padd-15">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
                                            </div>
                                        </div>
                                        <div className="form-item col-6 padd-15">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder="Subject" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <textarea name ="message" placeholder ="Your Message" className = "form-control" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-item col-12 padd-15">
                                            <button type="submit" className="btn">SUBMIT MESSAGE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer>
                        <p className="footer">Created by JuanFer Aispuro Sanchez</p>
                    </footer>
                </section>
                {/* <!-- ==== Contact Section End ===== --> */}
            </div>
            {/* <!-- ==== Main Content End ===== --> */}
        </div>
        {/* <!-- ==== Main Container End ===== --> */}
        {/* <!-- ==== Style Switcher Start ==== --> */}
        {/* <div className="style-switcher">
            <div className="style-switcher-toggler s-icon">
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon">
                <i className="fas fa "></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                <span className="color-1" onclick={"setActiveStyle('color-1')"}></span>
                <span className="color-2" onclick="setActiveStyle('color-2')"></span>
                <span className="color-3" onclick="setActiveStyle('color-3')"></span>
                <span className="color-4" onclick="setActiveStyle('color-4')"></span>
                <span className="color-5" onclick="setActiveStyle('color-5')"></span>
            </div>
        </div> */}
        
        {/* <!-- ==== Style Switcher End ==== --> */}
    </body>
    </div>
  )
}

export default Portoflio