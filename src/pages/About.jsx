import AboutHero from "../sections/About/AboutHero";
import AboutStory from "../sections/About/AboutStory";
import Skills from "../sections/About/Skills";
import Experience from "../sections/About/Experience";

function About() {
  return (
    <div className="page bg-[#F4F1EA]">
      <AboutHero />
      <AboutStory />
      <Skills />
      <Experience />
    </div>
  );
}

export default About;