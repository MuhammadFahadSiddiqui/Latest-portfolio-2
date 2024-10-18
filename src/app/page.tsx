import Hero from "./component/hero";
import About from "./component/about";
import Skills from "./component/skills";
import Education from "./component/education";
import Contact from "./component/contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  )
}
