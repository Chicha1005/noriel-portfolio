"use client";

import Image from "next/image";

const projects = [
  {
    title: "LedgerPH Accounting Suite",
    image: "/projects/ledgerph.svg",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    description:
      "Accounting and inventory app with customer/vendor records, invoices, bills, and general-ledger entries. Produces Trial Balance, Income Statement, Balance Sheet, and cash/bank movement reports, with Excel/CSV import and Excel/PDF export.",
    live: "",
    github: "",
    featured: true,
  },
  {
    title: "CABABSHOP E-Commerce",
    image: "/projects/cababshop.jpg",
    tech: ["Next.js", "React", "Tailwind CSS"],
    description:
      "A modern e-commerce website with shopping cart, responsive design, and clean user interface.",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Google Sheets Audit Dashboard",
    image: "/projects/dashboard.jpg",
    tech: ["Google Sheets", "Excel"],
    description:
      "Automated audit reports, inventory monitoring, accounts receivable tracking, and financial summaries.",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Inventory Monitoring System",
    image: "/projects/inventory.jpg",
    tech: ["Excel", "Google Sheets"],
    description:
      "A reporting system for inventory reconciliation, warehouse monitoring, and stock analysis.",
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-black">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-sky-400">
                  {project.title}
                </h3>
                <p className="mt-4 text-slate-300 leading-7">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {((project.live && project.live !== "#") ||
                  (project.github && project.github !== "#")) && (
                  <div className="mt-8 flex gap-3">
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-sky-500 px-5 py-2 font-medium transition hover:bg-sky-400"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-slate-600 px-5 py-2 font-medium transition hover:border-sky-400 hover:text-sky-400"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
