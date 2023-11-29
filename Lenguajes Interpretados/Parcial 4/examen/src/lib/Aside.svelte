<script>
    import Section from "../routes/Section.svelte";
    import Router from 'svelte-spa-router' 
    import {push} from 'svelte-spa-router'
    import routes from '../routes.js'
    import Home from "../routes/Section.svelte";
    import About from "../routes/AboutSection.svelte";
    import Services from "../routes/Services.svelte";
    import Portfolio from "../routes/Portfolio.svelte";
    import Contact from "../routes/Contact.svelte";
</script>

<div class="aside">
    <div class="logo">
        <span>Juanfer</span>Dev
    </div>
    <div class="nav-toggler">
        <span></span>
    </div>
    <ul class="nav">
        <nav>
            <li><button on:click={()=>push("/")}  class="active"><i class="fa fa-home"></i> Home</button></li>
            <li><button on:click={()=>push("/about")} ><i class="fa fa-user"></i> About</button></li>
            <li><button on:click={()=>push("/skills")}><i class="fa fa-list"></i>Skills</button></li>
            <li><button on:click={()=>push("/portfolio")}><i class="fa fa-briefcase"></i>Portfolio</button></li>
            <li><button on:click={()=>push("/contact")}><i class="fa fa-comments"></i>Contact</button></li>
        </nav>
    </ul>

    <Router {routes} />

</div>