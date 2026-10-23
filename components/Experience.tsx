const experiences = [
  {
    company: "JJ & J Distribution Business Inc.",
    position: "Auditor",
    year: "2021 - 2025",
    highlights: [
      "Conducted sales, cashiering, AR/AP, inventory, and claims audits.",
      "Conducted physical counts across 3 branches: Isabela, Cagayan, and Nueva Vizcaya.",
      "Performed reconciliation, discrepancy checking, and truck balancing.",
      "Served as reliever for Warehouse and AR operations.",
      "Prepared monthly sales, purchases, inventory, and AR reports for management.",
      "Prepared 2307, sales, and purchase reports for the accounting firm.",
      "Conducted audits of selected fast-food accounts, including Kenny Rogers Roasters.",
    ],
  },
  {
    company: "Grupo Marilen Incorporated",
    position: "Auditor",
    year: "2021",
    highlights: [
      "Conducted sales and cashiering audits.",
      "Checked transaction records and supporting documents.",
      "Assisted in reconciliation and audit reporting.",
    ],
  },
  {
    company: "St. Joseph Drug Store",
    position: "Pharmacy Supervisor",
    year: "2017 - 2020",
    highlights: [
      "Supervised daily store operations and staff.",
      "Monitored sales and inventory.",
      "Handled stock receiving and replenishment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
        <div className="space-y-8">
          {experiences.map((job) => (
            <article
              key={`${job.company}-${job.year}`}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition hover:border-sky-500 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-sky-400">
                    {job.position}
                  </h3>
                  <p className="text-lg text-slate-300">{job.company}</p>
                </div>
                <p className="mt-4 text-slate-400 md:mt-0">{job.year}</p>
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-5 leading-7 text-slate-300">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
