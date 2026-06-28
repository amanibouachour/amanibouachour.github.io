import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "I had the pleasure of working closely with Amani during his tenure as a Business Partnerships Manager. Amani is a highly skilled professional with a solid grasp of project management, negotiation, and communication. His ability to effectively manage projects, navigate complex negotiations, and communicate clearly and persuasively make him a valuable asset to any team. I confidently recommend Amani for any role where these qualities are valued and essential.",
    author: "Amir Boujelben",
    role: "Integration Engineer at AdDefend GmbH",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQFV8CDUffJg9A/profile-displayphoto-scale_400_400/B4EZnshnLxIoAk-/0/1760609860180?e=1777507200&v=beta&t=dBWSVCim-jCKlyjr1UUq-9HE-YxbI22_7meOmwpQgMI",
  },
  {
    quote:
      "I worked with Amani on building an AI model for HS code classification, and it was a great experience. He has strong skills in data engineering and machine learning, and he understands international trade data very well. He helped organize complex datasets and improve the model results. Amani is a reliable and hardworking person, and I recommend him for roles in AI, data engineering, or trade analytics.",
    author: "Mohamed Rokbeni",
    role: "CEO & Founder at LogScale",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQHW8ZIexlw3Ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635718456052?e=1777507200&v=beta&t=0EzvnE-sg2pKUybbsM87td5pjG_BLx1RzGnNvRpd5JU",
  },
  {
    quote:
      "I supervised Amani during his final year internship at Brainstack. He showed strong skills in Python, machine learning, and data processing, and built reliable web data extraction pipelines. Amani is motivated, detail-oriented, and delivers quality work. I recommend him for roles in data science and data engineering.",
    author: "Najemeddine Abdennour",
    role: "Postdoctoral Researcher at BCBL",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQG1lt81R4UsOw/profile-displayphoto-scale_400_400/B4EZxMgXhEK0Ak-/0/1770810085503?e=1777507200&v=beta&t=5mCUXZTfy-tU40jlYPswXsME3VHzKUeF9bn2byjmf4w",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
