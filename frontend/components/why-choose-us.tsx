import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyChooseUs() {
  const comparisons = [
    {
      feature: "Dedicated Recruiter",
      nexplacers: true,
      others: false,
    },
    {
      feature: "ATS Resume + RUC",
      nexplacers: true,
      others: "maybe",
    },
    {
      feature: "Weekly Job Submissions",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Interview Coaching",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Success-Based Pricing",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Salary Negotiation",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Global Market Access",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Personal Branding",
      nexplacers: true,
      others: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Why Choose Nexplacers™?</h2>
          <p className="text-xl text-gray-600">See how we compare to other career services and agencies</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-navy-900 text-white p-6">
              <div className="text-lg font-semibold">Feature</div>
              <div className="text-lg font-semibold text-center">Nexplacers™</div>
              <div className="text-lg font-semibold text-center">Other Agencies</div>
            </div>

            {comparisons.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="font-medium text-navy-900">{item.feature}</div>
                <div className="flex justify-center">
                  {item.nexplacers === true && <Check className="h-6 w-6 text-green-500" />}
                </div>
                <div className="flex justify-center">
                  {item.others === true && <Check className="h-6 w-6 text-green-500" />}
                  {item.others === false && <X className="h-6 w-6 text-red-500" />}
                  {item.others === "maybe" && <span className="text-yellow-500 text-sm font-medium">Maybe</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#pricing" className="inline-block">
              <Button size="lg" className="bg-gold text-navy-900 hover:bg-gold/90 font-semibold px-8">
                See Plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
