import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Python",
  "Power BI",
  "Databricks",
  "SQL",
  "Apache Spark",
  "Delta Lake",
  "Dagster",
  "PostgreSQL",
  "Snowflake",
  "Docker",
  "AWS",
  "FastAPI",
  "REST APIs",
  "Web Scraping",
  "Selenium",
  "BeautifulSoup",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "DAX",
  "Git",
  "Linux",
];

const skillCategories = [
  {
    title: "Data Engineering & Big Data",
    skills: [
      "Apache Spark",
      "Databricks",
      "Power BI",
      "Delta Lake",
      "Dagster",
      "ETL/ELT",
      "Data Lakes",
      "Data Warehousing",
    ],
  },
  {
    title: "Programming & Databases",
    skills: [
      "Python",
      "SQL",
      "Java",
      "PostgreSQL",
      "Snowflake",
    ],
  },
  {
    title: "Cloud, DevOps & Environment",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "Linux",
      "Anaconda",
    ],
  },
  {
    title: "APIs, Automation & Data Extraction",
    skills: [
      "FastAPI",
      "REST APIs",
      "Web Scraping",
      "Selenium",
      "BeautifulSoup",
      "Camelot",
      "Dropbox API",
    ],
  },
  {
    title: "Analytics, ML & Visualization",
    skills: [
      "Pandas",
      "NumPy",
      "Statistics",
      "Scikit-learn",
      "Machine Learning",
      "Power BI",
      "Excel",
      "DAX",
    ],
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Data Analytics Engineer • Data Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Transforming <span className="text-primary glow-text">data</span>
                <br />
                into actionable
                <br />
                <span className="font-serif italic font-normal text-white">
                  insights.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Amani Bouachour a Data Engineer & Analytics Engineer. I design automated pipelines, clean and structure data, and build dashboards that help businesses make informed decisions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Amani_Hmidene_Resume.docx.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                // { icon: Github, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/Amani-hmidene/" },
                // { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo2.png"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Focused on impact
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-8 text-center">
            Skills & Technologies
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-muted hover:border-primary transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl border border-muted 
                      text-sm font-medium text-muted-foreground
                      bg-background/50 backdrop-blur-sm
                      hover:text-white hover:border-primary hover:bg-primary/10
                      transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
