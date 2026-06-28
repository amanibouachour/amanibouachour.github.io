import { Navbar } from "@/layout/Navbar";


export default function NachdIT() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-5xl">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Jira Analytics & Performance Dashboards
          </h1>

          <p className="text-muted-foreground mt-3">
            Nachd-IT — Sousse, Tunisia
          </p>

          <p className="text-sm text-muted-foreground mt-1">
            June 2022 — August 2022 (Internship)
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            During my internship at Nachd-IT, I worked on building automated
            data pipelines from Jira API to analyze team productivity and
            performance metrics.
          </p>

          <p>
            The goal was to transform raw project management data into
            meaningful KPIs and interactive dashboards for stakeholders.
          </p>
        </div>

        {/* DASHBOARD IMAGE (IMPORTANT PART) */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-muted">
          <img
            src="/nachdit.png"
            alt="Power BI Dashboard"
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* PROJECT IMPACT SECTION */}
        <div className="mt-16 space-y-10">

          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Jira Data Automation Pipeline
            </h2>

            <p className="mt-3 text-muted-foreground">
              Built automated extraction pipelines using Jira API to
              continuously collect project and productivity data.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              KPI Modeling & Data Transformation
            </h2>

            <p className="mt-3 text-muted-foreground">
              Modeled and transformed data using Power Query and DAX to
              compute KPIs such as performance evolution, task completion
              rates, and employee rankings.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Business Intelligence Dashboards
            </h2>

            <p className="mt-3 text-muted-foreground">
              Designed interactive Power BI dashboards enabling managers
              to track productivity trends and make data-driven decisions.
            </p>
          </div>
        </div>

        {/* SECOND VISUAL SECTION */}
        <div className="mt-16 p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <h3 className="text-xl font-semibold text-white mb-3">
            Key Outcome
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Delivered a full end-to-end BI system that automated Jira data
            collection, transformed it into analytical KPIs, and visualized
            insights through dynamic dashboards used by stakeholders for
            performance tracking.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-14">
          {[
            "Power BI",
            "Jira API",
            "Power Query",
            "DAX",
            "SQL",
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
