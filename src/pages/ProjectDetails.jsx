import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">Project not found.</h1>

          <Link to="/projects" className="underline mt-5 block">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#111] text-[#F4F1EA] min-h-screen">
      <section className="min-h-screen flex items-end pb-[10vh]">
        <div className="container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/40 mb-16"
          >
            <ArrowLeft size={13} />
            Back to work
          </Link>

          <span className="section-label text-white/40 block">
            {project.id} / {project.year}
          </span>

          <h1 className="display-font text-[clamp(75px,15vw,220px)] font-semibold tracking-[-0.1em] leading-[0.7] mt-6">
            {project.title}
            <span className="text-[#D7FF3F]">.</span>
          </h1>

          <p className="max-w-[550px] text-white/50 mt-12 text-lg leading-[1.6]">
            {project.description}
          </p>
        </div>
      </section>

      <section className="container pb-[15vh]">
        <div className="aspect-video bg-[#1d1d1d] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full flex items-center justify-center text-5xl text-white/20">
              {project.title}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16 border-t border-white/15 pt-10">
          <div>
            <span className="section-label text-white/30">
              Category
            </span>

            <p className="mt-4">{project.category}</p>
          </div>

          <div>
            <span className="section-label text-white/30">
              Technologies
            </span>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/15 rounded-full px-4 py-2 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="section-label text-white/30">
              Year
            </span>

            <p className="mt-4">{project.year}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#D7FF3F] text-[#111] py-[15vh]">
        <div className="container">
          <span className="section-label">Next</span>

          <Link
            to="/projects"
            className="group flex items-end justify-between mt-10"
            data-cursor="GO"
          >
            <h2 className="display-font text-[clamp(60px,11vw,170px)] tracking-[-0.09em] leading-[0.75]">
              MORE
              <br />
              WORK<span className="text-black/30">.</span>
            </h2>

            <ArrowUpRight
              size={70}
              className="group-hover:rotate-45 transition-transform duration-500"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;