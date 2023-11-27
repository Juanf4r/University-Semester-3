import Home from "./lib/Section.svelte";
import About from "./lib/AboutSection.svelte";
import Services from "./lib/Services.svelte";
import Portfolio from "./lib/Portfolio.svelte";
import Contact from "./lib/Contact.svelte";

const routes = {
  '/': Home,
  '/about': About,  
  '/skills': Services,
  '/portfolio':Portfolio,
  '/contact':Contact,
  '*': Home
}

export default routes;