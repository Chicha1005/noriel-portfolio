"use client";

const skillGroups = [
  {
    title: "📊 Accounting & Business Tools",
    skills: [
      { name: "Microsoft Excel", level: 80, icon: "📈" },
      { name: "Google Sheets", level: 75, icon: "📊" },
      { name: "QuickBooks", level: 65, icon: "💰" },
      { name: "Inventory Audit", level: 80, icon: "📦" },
      { name: "ERP / POS Systems", level: 75, icon: "🧾" },
    ],
  },
  {
    title: "💻 Development & Deployment Tools",
    skills: [
      { name: "Git & GitHub", level: 65, icon: "🐙" },
      { name: "Next.js", level: 60, icon: "▲" },
      { name: "React", level: 60, icon: "⚛️" },
      { name: "TypeScript", level: 55, icon: "🔷" },
      { name: "Tailwind CSS", level: 65, icon: "🎨" },
      { name: "Supabase", level: 55, icon: "🗄️" },
      { name: "Vercel", level: 70, icon: "▲" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">My Skills</h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl"
            >
              <h3 className="mb-8 text-2xl font-bold text-sky-400">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="font-semibold text-sky-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-3 overflow-hidden rounded-full bg-slate-800"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
