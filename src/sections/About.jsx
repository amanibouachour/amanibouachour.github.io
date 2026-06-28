import { Code2, Database, BarChart2, Zap } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Designing scalable ETL/ELT pipelines to ingest, process, and clean data from multiple sources.",
  },
  {
    icon: BarChart2,
    title: "Analytics & BI",
    description:
      "Building dashboards and analytics-ready datasets that empower stakeholders to make data-driven decisions.",
  },
  {
    icon: Code2,
    title: "Data Quality",
    description:
      "Implementing checks for freshness, completeness, gap detection, and anomaly detection to ensure reliable data.",
  },
  {
    icon: Zap,
    title: "Automation & Web Scraping",
    description:
      "Automating data extraction and transformation from APIs and web sources using Python, Selenium, and FastAPI.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering data pipelines and dashboards
              <span className="font-serif italic font-normal text-white">
                {" "}that empower decision-making.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Data Engineer & Analytics Engineer with experience building scalable data pipelines
                and analytics solutions. I specialize in transforming raw and complex datasets into structured,
                reliable data that supports business decision-making.
              </p>

              <p>
                My work focuses on data ingestion, ETL/ELT pipelines, and data quality using tools such as
                Python, SQL, Databricks, and Dagster. I have worked with international trade, livestock,
                and invoice data from multiple global sources.
              </p>

              <p>
                I also design analytics-ready datasets and dashboards using Power BI, enabling stakeholders
                to monitor performance, analyze trends, and make data-driven decisions with confidence.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build reliable and scalable data systems that transform complex
                data into clear, actionable insights for better decision-making."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
