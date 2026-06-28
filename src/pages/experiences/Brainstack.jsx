import { Navbar } from "@/layout/Navbar";

export default function Brainstack() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-5xl">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            AI Web Data Extraction & Automation
          </h1>

          <p className="text-muted-foreground mt-3">
            BRAINSTACK — Sousse, Tunisia
          </p>

          <p className="text-sm text-muted-foreground mt-1">
            February 2023 — September 2023 (Internship)
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            During my end-of-year internship at Brainstack, I worked on
            building AI-driven automation systems for web data extraction.
            The goal was to support intelligent web agents capable of
            understanding and interacting with dynamic web pages.
          </p>

          <p>
            This project combined web scraping, machine learning, and
            automation engineering to build a full pipeline from raw web
            content to structured datasets.
          </p>
        </div>

        {/* IMAGE 1 - UNIVERSITY PRESENTATION */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-muted">
          <img
            src="/brainstack1.jpg"
            alt="University project presentation"
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* PROJECT BREAKDOWN */}
        <div className="mt-16 space-y-10">

          {/* PIPELINE */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Web Data Extraction Pipeline
            </h2>

            <p className="mt-3 text-muted-foreground">
              Built automated pipelines using Python and Selenium to extract
              structured data from dynamic and complex web pages.
            </p>
          </div>

          {/* ML PART */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Machine Learning for Web Understanding
            </h2>

            <p className="mt-3 text-muted-foreground">
              Designed feature engineering workflows and applied ML models
              to improve web element detection accuracy and automation reliability.
            </p>
          </div>

          {/* NLP */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Data Preprocessing & NLP
            </h2>

            <p className="mt-3 text-muted-foreground">
              Processed raw web content using Pandas and NLP techniques to
              transform unstructured data into structured datasets for model training.
            </p>
          </div>

          {/* DEVOPS */}
          <div className="p-6 rounded-2xl border border-muted hover:border-primary/40 transition">
            <h2 className="text-xl font-semibold text-primary">
              Reproducible ML Workflows
            </h2>

            <p className="mt-3 text-muted-foreground">
              Containerized the entire system using Docker and Bash scripts
              to ensure reproducibility and easy deployment.
            </p>
          </div>
        </div>

        {/* IMAGE 2 - TEAM */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">

          <div className="rounded-2xl overflow-hidden border border-muted">
            <img
              src="/dnext1.jpg"
              alt="Brainstack team"
              className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold text-white">
              Collaboration & Research Environment
            </h3>

            <p>
              I worked closely with a team of engineers in a research-oriented
              environment focused on AI automation systems.
            </p>

            <p>
              We collaborated on improving web agent intelligence and testing
              automation strategies for real-world applications.
            </p>

            <p>
              This experience strengthened my skills in teamwork, AI systems
              design, and experimental development.
            </p>
          </div>
        </div>

        {/* YOUTUBE VIDEO */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-4">
            Project Demo
          </h3>

          <div className="rounded-2xl overflow-hidden border border-muted">
            <iframe
              className="w-full h-[420px]"
              src="https://www.youtube.com/embed/Mf4R8YqBaMw"
              title="Brainstack Demo"
              allowFullScreen
            />
          </div>
        </div>

        {/* KEY RESPONSIBILITIES */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-4">
            Key Responsibilities
          </h3>

          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>Built automated web scraping pipelines using Selenium</li>
            <li>Designed ML models for web element detection</li>
            <li>Developed NLP preprocessing workflows using Pandas</li>
            <li>Improved automation reliability through model evaluation</li>
            <li>Containerized workflows using Docker & Bash</li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-14">
          {[
            "Python",
            "Selenium",
            "Pandas",
            "Scikit-learn",
            "Keras",
            "Docker",
            "Bash",
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
