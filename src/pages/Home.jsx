import Hero from "../sections/Home/Hero";
import Intro from "../sections/Home/Intro";
import FeaturedProjects from "../sections/Home/FeaturedProjects";
import Marquee from "../sections/Home/Marquee";
import HomeCTA from "../sections/Home/HomeCTA";

function Home() {
  return (
    <div className="page">
      <Hero />
      <Intro />
      <FeaturedProjects />
      <Marquee />
      <HomeCTA />
    </div>
  );
}

export default Home;