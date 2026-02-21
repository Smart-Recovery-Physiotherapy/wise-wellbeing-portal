import { Home, Activity } from "lucide-react";

export function FeesSection() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Home Visits */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border">
          <Home className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-4">
            Home Visit – €110 - €140 (subject to location)
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>• 30-minute session (travel time not included)</li>
            <li>• Payment required in advance</li>
            <li>• Available within approximately 5km radius of the clinic</li>
          </ul>
        </div>

        {/* Clinic Appointments */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border">
          <Activity className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-4">
            Clinic Physiotherapy – €70 (30 minutes)
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Initial assessment and consultation</li>
            <li>• Follow-up appointments</li>
            <li>• Ongoing rehabilitation sessions</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
