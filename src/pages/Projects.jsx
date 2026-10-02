import ProjectsHero from "../sections/Projects/ProjectsHero";
import ProjectGrid from "../sections/Projects/ProjectGrid";

function Projects() {
  return (
    <div className="page bg-[#111] text-[#F4F1EA]">
      <ProjectsHero />
      <ProjectGrid />
    </div>
  );
}

export default Projects;