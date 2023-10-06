function Home() {
return (
        <section className="home active section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, my name is <span className="name">Juan Fernando Aispuro</span></h3>
                        <h3 className="my-profession">I'm a <span className="typing">Software Engineer</span></h3>
                        <p>I'm a Software Developer with extensive experience for over 2 years. My expertise is related to
                        Game Development, Game Design, Software Development and many more...</p>
                        <a href="https://drive.google.com/drive/folders/1Te8OojDhtpI-DQuM3wwI-YUzXRLTm3lj?usp=sharing" target="_blank" className="btn">See my CV</a>
                    </div>
                    <div className="home-img padd-15">
                        <img src="public/img/hero.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
)}

export default Home