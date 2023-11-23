<script>
    import Aside from './lib/Aside.svelte';
    import Section from './lib/Section.svelte';
    import AboutSection from './lib/AboutSection.svelte';
    import Services from './lib/Services.svelte';
    import Portfolio from './lib/Portfolio.svelte';
    import Contact from './lib/Contact.svelte';
    import color from "./css/skins/color-1.css"
    import appcss from "./css/app.css"
</script>

<main>
    <body class="dark">
        <div class="main-container">
            <Aside/>
            <div class="main-content">
                <Section/>
                <AboutSection/>
                <Services/>
                <Portfolio/>
                <Contact/>
            </div>
        </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.16/typed.umd.js" 
    integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/script.js"></script>
    <script src="js/style-switcher.js"></script> 
    </body>
</main>