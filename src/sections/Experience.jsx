import { useNavigate } from "react-router-dom";

const experiences = [
  {
    period: "March 2024 — Present",
    role: "Data Analytics Engineer",
    company: "DNEXT Intelligence SA",
    link: "/experience/dnext",
    description:
      "Built and maintained automated data pipelines for livestock, trade, and invoice data from 40+ international sources. Designed ETL workflows with Dagster, integrated Snowflake and PostgreSQL, and modeled analytics-ready datasets for dynamic Power BI dashboards.",
    technologies: [
      "Python",
      "Dagster",
      "Snowflake",
      "PostgreSQL",
      "Docker",
      "Selenium",
      "BeautifulSoup",
      "Power BI",
    ],
    current: true,
  },
  {
    period: "Feb 2023 — Sep 2023",
    role: "Data Scientist Intern",
    company: "BRAINSTACK",
    link: "/experience/brainstack",
    description:
      "Automated web data extraction pipelines to support AI-driven agents. Prepared structured datasets from raw web content using Pandas and NLP techniques. Developed ML models to improve web element detection reliability and containerized workflows for reproducibility.",
    technologies: [
      "Python",
      "Selenium",
      "Pandas",
      "Scikit-learn",
      "Keras",
      "Docker",
      "Bash",
    ],
    current: false,
  },
  {
    period: "June 2022 — Aug 2022",
    role: "Data Scientist Intern",
    company: "Nachd-IT",
    link: "/experience/nachd",
    description:
      "Automated data extraction from Jira API, transformed and modeled data to compute KPIs and performance metrics, and developed dynamic Power BI dashboards to provide actionable insights into team productivity and trends.",
    technologies: ["Power BI", "Jira API", "Power Query", "DAX", "SQL"],
    current: false,
  },
];

export const Experience = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth as a Data Engineer, from
            internship projects to building robust pipelines and analytics
            solutions that drive business insights.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 🔥 Button */}
                    <div
                      className={`mt-6 ${
                        idx % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <button
                        onClick={() => navigate(exp.link)} // ✅ THIS IS THE KEY
                        className="px-4 py-2 text-sm font-medium rounded-lg border border-primary/40 
                        text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        See more details →
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
