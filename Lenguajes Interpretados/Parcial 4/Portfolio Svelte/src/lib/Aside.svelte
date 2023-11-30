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
    import css from "../css/app.css"
</script>

<style>
    :root
    {
        --bg-black-900:#f2f2fc;
        --bg-black-100:#fdf9ff;
        --bg-black-50:#e8dfec;
        --text-black-900:#302e4d;
        --text-black-700: #504e70;
    }
    
    .logo{
        color: #005fd5;
        font-weight: 800;
    }
    .aside{
    width: 270px;
    background: var(--bg-black-100);
    position: fixed;
    left: 0;
    top: 0;
    padding: 30px;
    height: 100%;
    border-right: 1px solid var(--bg-black-50);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: all 0.3s ease;
}
.aside .logo{
    position: absolute;
    top: 50px;
    font-size: 3rem;
    text-transform: capitalize;
}
.aside .logo a{
    color: var(--text-black-900);
    font-weight: 700;
    padding: 15px 20px;
    font-size: 3rem;
    letter-spacing: 5px;
    position: relative;
}
.aside .logo a span{
    font-family: 'League Spartan', sans-serif;
    font-size: 3rem;
    color: var(--skin-color);
    cursor: not-allowed;
}
.aside .logo a::before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #005fd5;
    border-left: 5px solid #005fd5;
    bottom: 0;
    left: 0;
}
.aside .logo a::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-top: 5px solid #005fd5;
    border-right: 5px solid #005fd5;
    top: 0;
    right: 0;
}
.aside .nav-toggler{
    height: 40px;
    width: 45px;
    border: 1px solid #005fd5;
    cursor: pointer;
    position: fixed;
    left: 300px;
    top: 20px;
    border-radius: 5px;
    background: #005fd5;
    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}
.aside .nav-toggler span{
    height: 2px;
    width: 18px;
    background: #005fd5;
    display: inline-block;
    position: relative;
}
.aside .nav-toggler.open span{
    background-color: transparent;
}
.aside .nav-toggler span::before{
    content: '';
    height: 2px;
    width: 18px;
    background: #005fd5;
    position: absolute;
    top: -6px;
    left: 0;
}
.aside .nav-toggler.open span::before{
    transform: rotate(45deg);
    top: 0;
}
.aside .nav-toggler span::after{
    content: '';
    height: 2px;
    width: 18px;
    background: #005fd5;
    position: absolute;
    top: 6px;
    left: 0;
}
.aside .nav-toggler.open span::after{
    transform: rotate(-45deg);
    top: 0;
}
.aside .nav{
    margin-top: 50px;
}
.aside .nav li{
    margin-bottom: 20px;
    display: block;
}
.aside .nav li a{
    font-size: 1.6rem;
    font-weight: 600;
    display: block;
    border-bottom: 1px solid var(--bg-black-50);
    color: var(--text-black-900);
    padding: 5px 15px;;
}
.aside .nav .social li a{
    font-size: 2.2rem;
    display: flex;
    color: var(--text-black-900);
    border-bottom: none;
    padding: 0px 30px;
}
.aside .nav li a:hover{
    color: #005fd5;

}
.aside .nav li a i{
    margin-right: 15px;
    cursor: cell;
}

@media (max-width: 1199px){
    .aside{
        left: -40px;
    }
    .aside.open{
        left: 0;
    }
    .aside .nav-toggler{
        display: flex;
    }
    .section{
        left: 200px;
    }
    .about .about-content .personal-info .info-item p span{
        display: block;
        margin-left: 0;
    }
}
</style>

<div class="aside">
    <div class="logo">
        <span>Juanfer</span>Dev
    </div>
    <div class="nav-toggler">
        <span></span>
    </div>
    <ul class="nav">
        <nav>
            <li><a on:click={()=>push("/")} ><i class="fa fa-home"></i> Home</a></li>
            <li><a on:click={()=>push("/about")} ><i class="fa fa-user"></i> About</a></li>
            <li><a on:click={()=>push("/skills")}><i class="fa fa-list"></i>Skills</a></li>
            <li><a on:click={()=>push("/portfolio")}><i class="fa fa-briefcase"></i>Portfolio</a></li>
            <li><a on:click={()=>push("/contact")}><i class="fa fa-comments"></i>Contact</a></li>
        </nav>
    </ul>

    <Router {routes} />

</div>