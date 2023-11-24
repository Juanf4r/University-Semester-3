<script>
    import Section from "./Section.svelte";
    import {Router, Route, Link} from "svelte-routing";
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
            <li><Link to ="/" class="active"><i class="fa fa-home"></i> Home</Link></li>
            <li><Link to ="/about"><i class="fa fa-user"></i> About</Link></li>
            <li><Link to ="/skills"><i class="fa fa-list"></i>Skills</Link></li>
            <li><Link to ="/portfolio"><i class="fa fa-briefcase"></i>Portfolio</Link></li>
            <li><Link to ="/contact"><i class="fa fa-comments"></i>Contact</Link></li>
        </nav>
    </ul>

    <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Router>


</div>