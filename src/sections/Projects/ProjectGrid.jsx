import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function ProjectGrid() {
  return (
    <section className="pb-[15vh]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;