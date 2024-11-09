import About from "./about/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Hero from "./hero/page";
import Skills from "./skills/page";


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