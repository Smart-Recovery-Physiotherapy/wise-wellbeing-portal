import { CheckCircle2 } from "lucide-react";

export function ConditionsSection() {
  const conditions = [
    "Neck pain",
    "Shoulder pain",
    "Elbow pain",
    "Wrist pain",
    "Mid-back pain",
    "Lower back pain",
    "Hip pain",
    "Knee pain",
    "Ankle and foot conditions",
    "Sports injuries",
    "Orthopaedic pre- and post-surgical rehabilitation",
    "Stroke rehabilitation",
    "Parkinsonism",
    "Peripheral neuropathies",
    "Cerebral palsy",
    "Down syndrome",
    "Autism spectrum conditions"
  ];

  return (
    <section className="py-24 bg-blue-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Conditions We Help You With
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm"
            >
              <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
