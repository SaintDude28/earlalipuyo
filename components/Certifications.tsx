import Image from "next/image";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="TRUSTED CREDENTIALS"
          title="Professional Certifications"
          description="Certified in industry-leading bookkeeping software to help businesses maintain accurate financial records with confidence."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* QuickBooks */}
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-52 w-full items-center justify-center">
                <Image
                  src="/images/certifications/quickbooks.png"
                  alt="QuickBooks ProAdvisor"
                  width={300}
                  height={200}
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <span className="mb-3 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                ✔ Verified
              </span>

              <h3 className="text-2xl font-bold text-gray-900">
                QuickBooks ProAdvisor
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Certified QuickBooks Online Level 2 ProAdvisor with practical
                experience in bookkeeping, reconciliations, invoicing and
                financial reporting.
              </p>
            </div>
          </Card>

          {/* Xero */}
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-52 w-full items-center justify-center">
                <Image
                  src="/images/certifications/xero.jpg"
                  alt="Xero L3 Certified Specialist"
                  width={240}
                  height={220}
                  className="max-h-48 w-auto object-contain"
                />
              </div>

              <span className="mb-3 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                ✔ Verified
              </span>

              <h3 className="text-2xl font-bold text-gray-900">
                Xero L3 Certified Specialist
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Certified Xero specialist with hands-on experience in banking,
                reconciliation, reporting, invoicing and project accounting.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}