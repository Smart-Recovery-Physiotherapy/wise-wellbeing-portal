export function CancellationPolicy() {
  return (
    <section className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Cancellation Policy
        </h2>

        <div className="space-y-4 mb-4">
        <p className="text-gray-600 leading-relaxed">
          We kindly request a minimum of 24 hours’ notice should you need to cancel
          or reschedule your appointment. This allows us to offer the time slot to
          another patient awaiting treatment.
        </p>
            <p>
        Home visits provide a convenient and efficient solution, particularly for
        older adults and individuals with reduced mobility. Our fees reflect the
        clinical expertise of our physiotherapists, the comprehensive nature of
        our assessments, and the time dedicated to understanding each patient’s
        individual needs and treatment goals.
      </p>

      <p>
        Where applicable, fees may be eligible for partial reimbursement through
        major health insurance providers, depending on your individual policy.
        Tax relief may also be claimed in accordance with local regulations.
      </p>

        </div>

        <div className="space-y-6 text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-800">Late Cancellations</h4>
            <p>
              Appointments cancelled with less than 24 hours’ notice will incur
              the full session fee.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Missed Appointments</h4>
            <p>
              Failure to attend without prior notice will result in the full
              appointment fee being charged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
