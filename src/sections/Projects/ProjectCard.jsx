import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block ${
        index % 2 !== 0 ? "md:translate-y-32" : ""
      }`}
      data-cursor="VIEW"
    >
      <div className="relative aspect-[4/3] bg-[#1d1d1d] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl text-white/20">
            {project.title}
          </div>
        )}

        <div className="absolute top-5 right-5 w-12 h-12 bg-[#D7FF3F] text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="flex justify-between border-b border-white/15 py-5">
        <div>
          <span className="text-[10px] text-white/30">
            {project.id} / {project.year}
          </span>

          <h2 className="display-font text-4xl tracking-[-0.05em] mt-2">
            {project.title}
          </h2>
        </div>

        <span className="text-[9px] uppercase text-white/40 mt-3 text-right">
          {project.category}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;