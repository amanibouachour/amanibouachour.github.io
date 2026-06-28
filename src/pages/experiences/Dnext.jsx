import { Navbar } from "@/layout/Navbar";


export default function Dnext() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-5xl">

        {/* HEADER */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Data Engineering for Global Trade Intelligence
          </h1>

          <p className="text-muted-foreground mt-3">
            DNEXT Intelligence SA — Sousse, Tunisia
          </p>

          <p className="text-sm text-muted-foreground mt-1">
            March 2024 — Present
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            At DNEXT Intelligence, I work as a Data Engineer on large-scale
            international datasets related to customs, tariffs, and livestock
            production across multiple countries.
          </p>

          <p>
            My role focuses on building scalable data pipelines, automating
            data collection from complex sources, and transforming raw data
            into analytics-ready datasets used in business dashboards.
          </p>
        </div>

        {/* IMAGE 1 - TEAM / CONTEXT */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-muted">
          <img
            src="/dnext2.jpg"
            alt="Team collaboration"
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* PROJECTS SECTION */}
        <div className="mt-16 space-y-10">

          {/* CUSTOMS PROJECT */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Customs Data Pipeline
            </h2>

            <p className="mt-3 text-muted-foreground">
              Built automated pipelines to collect import/export data
              (quantities, prices, values) from official and commercial sources
              across 40+ countries.
            </p>

            <p className="mt-2 text-muted-foreground">
              Designed ETL workflows using Dagster and stored structured data
              in Snowflake and PostgreSQL for analytics use.
            </p>
          </div>

          {/* TARIFFS PROJECT */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Tariffs & Taxes Intelligence System
            </h2>

            <p className="mt-3 text-muted-foreground">
              Developed a dedicated data pipeline for tariffs and customs taxes,
              enabling structured analysis of trade costs across regions.
            </p>

            <p className="mt-2 text-muted-foreground">
              Built automated dashboards in Power BI for pricing intelligence
              and trade flow visualization.
            </p>
          </div>

          {/* LIVESTOCK PROJECT */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Livestock & Agriculture Data Platform
            </h2>

            <p className="mt-3 text-muted-foreground">
              Developed pipelines to collect livestock production data from
              multiple global sources, including slaughter statistics and feed
              consumption.
            </p>

            <p className="mt-2 text-muted-foreground">
              Delivered cleaned datasets used for international agricultural
              analytics dashboards.
            </p>
          </div>
        </div>

        {/* IMAGE 2 - YOUR WORK / PRESENTATION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">

          <div className="rounded-2xl overflow-hidden border border-muted">
            <img
              src="/dnext3.png"
              alt="Presentation session"
              className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold text-white">
              Engineering & Leadership
            </h3>

            <p>
              I designed and maintained data pipelines responsible for ingestion,
              cleaning, and validation of heterogeneous datasets.
            </p>

            <p>
              I solved key technical challenges such as CAPTCHA-protected scraping
              and unreliable data sources using Selenium automation strategies.
            </p>

            <p>
              I also mentored interns and led internal sessions on scraping,
              pipeline architecture, and data integration workflows.
            </p>
          </div>
        </div>

        {/* KEY RESPONSIBILITIES */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-4">
            Key Responsibilities
          </h3>

          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>Built scalable ETL pipelines for trade & customs data</li>
            <li>Developed web scrapers using Selenium & BeautifulSoup</li>
            <li>Handled CAPTCHA-protected data extraction workflows</li>
            <li>Ensured data quality (completeness, freshness, consistency)</li>
            <li>Designed Power BI dashboards for business insights</li>
            <li>Supported analysts with ad-hoc trade investigations</li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-14">
          {[
            "Python",
            "Dagster",
            "Snowflake",
            "PostgreSQL",
            "Power BI",
            "Selenium",
            "BeautifulSoup",
            "Pandas",
            "FastAPI",
            "Docker",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 border rounded-lg text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
