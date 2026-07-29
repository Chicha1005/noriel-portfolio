const experiences = [
  {
    company: "JJ & J Distribution Business Inc.",
    position: "Audit Officer",
    year: "2021 - Present",
    description:
      "Conducted financial and operational audits, inventory monitoring, accounts receivable analysis, and business process improvements.",
  },
  {
    company: "Grupo Marilen Inc.",
    position: "Audit & Accounts Specialist",
    year: "2021",
    description:
      "Performed sales audits, cashier audits, inventory reconciliation, and financial reporting using Excel and Google Sheets.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((job, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition hover:border-sky-500 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-sky-400">
                    {job.position}
                  </h3>

                  <p className="text-lg text-slate-300">
                    {job.company}
                  </p>
                </div>

                <p className="mt-4 text-slate-400 md:mt-0">
                  {job.year}
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                {job.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}