<script>
    import Aside from './lib/Aside.svelte';
    import Section from './lib/Section.svelte';
    import AboutSection from './lib/AboutSection.svelte';
    import Services from './lib/Services.svelte';
    import Portfolio from './lib/Portfolio.svelte';
    import Contact from './lib/Contact.svelte';
    import appcss from "./css/skins/color-1.css";
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
    </body>
</main>