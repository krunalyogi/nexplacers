"use client";

import { useState } from "react";
import {
  DollarSign,
  Users,
  Headphones,
  Briefcase,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplyModal from "@/components/ApplyModal";
import * as React from "react";

type Position = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  type: string;
  description: string;
  requirements: string[];
};

export default function Careers() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const positions: Position[] = [
    {
      icon: DollarSign,
      title: "Sales Executive",
      type: "Commission-based role",
      description:
        "Drive growth by connecting with high-potential professionals seeking career transformation.",
      requirements: [
        "2+ years sales experience",
        "Excellent communication skills",
        "Results-driven mindset",
      ],
    },
    {
      icon: Users,
      title: "Resume Writer",
      type: "Freelance",
      description:
        "Craft compelling, ATS-optimized resumes that get our clients noticed by top employers.",
      requirements: [
        "Professional writing experience",
        "HR/Recruiting background preferred",
        "Portfolio required",
      ],
    },
    {
      icon: Headphones,
      title: "Client Success Rep",
      type: "Full-time",
      description:
        "Ensure our clients have an exceptional experience throughout their career transformation journey.",
      requirements: [
        "Customer success experience",
        "Strong problem-solving skills",
        "Empathetic communication",
      ],
    },
  ];

  return (
    <section id="careers" className="py-32 bg-luxe-off-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-gold-luxe/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            Join Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray luxury-stagger-item leading-relaxed">
            Help us transform careers while building your own success story
          </p>
        </div>

        {/* Position Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {positions.map((position, index) => {
            const IconComponent = position.icon;
            return (
              <div
                key={index}
                className="luxury-card p-10 rounded-3xl luxury-hover-lift group luxury-stagger-item"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-luxury-gold rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <IconComponent className="h-10 w-10 text-jet-black" />
                </div>

                <h3 className="text-2xl font-bold text-jet-black mb-3">{position.title}</h3>
                <div className="text-gold-luxe font-semibold mb-6 text-lg">{position.type}</div>
                <p className="text-warm-prestige-gray mb-8 leading-relaxed text-lg">
                  {position.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-jet-black mb-4 text-lg">Requirements:</h4>
                  <ul className="space-y-3">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-warm-prestige-gray flex items-start">
                        <span className="w-3 h-3 bg-gold-luxe rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-jet-black text-ivory-white hover:bg-rich-charcoal luxury-btn luxury-hover-lift font-bold py-4"
                  onClick={() => {
                    setSelectedPosition(position.title);
                    setModalOpen(true);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-gradient-luxury-dark rounded-3xl p-16 text-ivory-white luxury-stagger-item">
          <h3 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <Briefcase className="h-10 w-10 mr-4 text-gold-luxe" />
            Ready to Make an Impact?
          </h3>
          <p className="text-warm-prestige-gray mb-10 text-xl leading-relaxed">
            Join a team that's revolutionizing how professionals find their dream careers
          </p>
          <div className="flex justify-center space-x-12 text-center">
            <div className="group luxury-hover-lift cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-gold-luxe mr-3" />
                <div className="text-3xl font-bold text-gold-luxe">Remote-First</div>
              </div>
              <div className="text-warm-prestige-gray text-lg">Work from anywhere</div>
            </div>
            <div className="group luxury-hover-lift cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-gold-luxe mr-3" />
                <div className="text-3xl font-bold text-gold-luxe">Growth-Focused</div>
              </div>
              <div className="text-warm-prestige-gray text-lg">Continuous learning</div>
            </div>
            <div className="group luxury-hover-lift cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-gold-luxe mr-3" />
                <div className="text-3xl font-bold text-gold-luxe">Impact-Driven</div>
              </div>
              <div className="text-warm-prestige-gray text-lg">Transform lives daily</div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        role={selectedPosition}
      />
    </section>
  );
}
