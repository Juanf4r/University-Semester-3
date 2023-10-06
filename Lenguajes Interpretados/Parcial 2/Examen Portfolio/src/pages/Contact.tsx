import { AiFillLinkedin } from "react-icons/ai"
import { AiFillPhone } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { CgWebsite } from "react-icons/cg"

function Contact() {
return (
<body className="dark">
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
                    <div className="icon"><i className="fa fa-phone"><AiFillPhone/></i></div>
                    <h4>Call Me</h4>
                    <p>+52 669 212 7762</p>
                </div>
                {/* <!-- ===== Contact info item End ===== --> */}
                {/* <!-- ===== Contact info item start ===== --> */}
                <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-map-marker-alt"><AiFillLinkedin/></i></div>
                    <h4>Linkedin</h4>
                    <p>Juanfer Aispuro</p>
                </div>
                {/* <!-- ===== Contact info item End ===== --> */}
                {/* <!-- ===== Contact info item start ===== --> */}
                <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-envelope"><AiOutlineMail/></i></div>
                    <h4>Email</h4>
                    <p>Juanfernand2004@hotmail.com</p>
                </div>
                {/* <!-- ===== Contact info item End ===== --> */}
                {/* <!-- ===== Contact info item start ===== --> */}
                <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-globe-europe"><CgWebsite/></i></div>
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
</body>
)}

export default Contact