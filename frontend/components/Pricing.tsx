"use client"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Essential Pro",
      price: "$999",
      successFee: "13%",
      popular: false,
      features: [
        "ATS-Optimized Resume",
        "8 Weekly Job Submissions",
        "Basic LinkedIn Optimization",
        "Email Support",
        "Job Search Strategy Session",
      ],
    },
    {
      name: "Growth Premium",
      price: "$1,499",
      successFee: "11%",
      popular: true,
      features: [
        "Everything in Essential Pro",
        "Complete LinkedIn Overhaul",
        "Mock Interview Sessions",
        "Personal Branding Strategy",
        "Priority Support",
        "Salary Negotiation Basics",
      ],
    },
    {
      name: "Elite Impact",
      price: "$1,999",
      successFee: "10%",
      popular: false,
      features: [
        "Everything in Growth Premium",
        "A Dedicated Recruiter",
        "Advanced Negotiation Support",
        "VIP Support Channel",
        "Personal Portfolio Website",
        "Executive Interview Coaching",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Investment Plans</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your career goals and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-navy rounded-2xl shadow-lg p-8 ${
                plan.popular ? "ring-2 ring-gold scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-navy-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-navy-900 mb-2">{plan.price}</div>
                <div className="text-gold font-semibold">{plan.successFee} Success Fee</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  const message = `Hi, I'm interested in the "${plan.name}" plan priced at ${plan.price} with a ${plan.successFee} success fee. Please share more details.`;
                  const whatsappUrl = `https://wa.me/918732948070?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className={`w-full ${
                  plan.popular
                    ? "bg-gold text-navy-900 hover:bg-gold/90"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include our job placement guarantee. Success fees are only charged upon successful placement.
          </p>
        </div>
      </div>
    </section>
  )
}
