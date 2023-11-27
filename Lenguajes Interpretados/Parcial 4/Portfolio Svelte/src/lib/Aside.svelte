<script>
    import Section from "./Section.svelte";
    import Router from 'svelte-spa-router' 
    import {push} from 'svelte-spa-router'
    import routes from '../routes.js'
    import Home from "./Section.svelte";
    import About from "./AboutSection.svelte";
    import Services from "./Services.svelte";
    import Portfolio from "./Portfolio.svelte";
    import Contact from "./Contact.svelte";
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
            <!-- <li><Link to ="/" class="active"><i class="fa fa-home"></i> Home</Link></li>
            <li><Link to ="/about"><i class="fa fa-user"></i> About</Link></li>
            <li><Link to ="/skills"><i class="fa fa-list"></i>Skills</Link></li>
            <li><Link to ="/portfolio"><i class="fa fa-briefcase"></i>Portfolio</Link></li>
            <li><Link to ="/contact"><i class="fa fa-comments"></i>Contact</Link></li> -->
            <li><button on:click={()=>push("/")}  class="active"><i class="fa fa-home"></i> Home</button></li>
            <li><button on:click={()=>push("/about")} ><i class="fa fa-user"></i> About</button></li>
            <li><button on:click={()=>push("/skills")}><i class="fa fa-list"></i>Skills</button></li>
            <li><button on:click={()=>push("/portfolio")}><i class="fa fa-briefcase"></i>Portfolio</button></li>
            <li><button on:click={()=>push("/contact")}><i class="fa fa-comments"></i>Contact</button></li>
        </nav>
    </ul>

    <Router {routes} />

</div>