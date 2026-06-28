import { Mail, Phone, MapPin, Copy, Linkedin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Amani.hmidene1@gmail.com",
    copy: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 51684918",
    copy: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/Amani-hmidene",
    href: "https://www.linkedin.com/in/Amani-hmidene/",
    copy: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sousse, Tunisia",
    copy: false,
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Contact Information
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {contactInfo.map((item, i) => {
            const Content = (
              <div className="flex items-center justify-between gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300">

                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium text-lg select-text">
                      {item.value}
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                {item.copy ? (
                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-primary/30 
                    hover:bg-primary hover:text-white transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    {copied === item.label ? "Copied!" : "Copy"}
                  </button>
                ) : item.href ? (
                  <span className="text-sm text-primary font-medium">
                    Open Profile →
                  </span>
                ) : null}
              </div>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block" // ✅ FIXED SPACING
              >
                {Content}
              </a>
            ) : (
              <div key={i}>{Content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
