import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import {
  BookOpen,
  Landmark,
  CreditCard,
  Receipt,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    description:
      "Maintain accurate financial records and organize day-to-day transactions.",
    icon: BookOpen,
  },
  {
    title: "Bank Reconciliation",
    description:
      "Reconcile bank accounts and resolve discrepancies with accuracy.",
    icon: Landmark,
  },
  {
    title: "Accounts Payable",
    description:
      "Manage supplier bills, due dates, and payment schedules.",
    icon: CreditCard,
  },
  {
    title: "Accounts Receivable",
    description:
      "Track customer invoices and ensure timely collections.",
    icon: Receipt,
  },
  {
    title: "Financial Reporting",
    description:
      "Prepare Profit & Loss, Balance Sheet, and financial reports.",
    icon: BarChart3,
  },
  {
    title: "Project Cost Accounting",
    description:
      "Monitor project expenses, budgets, and overall cost performance.",
    icon: BriefcaseBusiness,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="WHAT I DO"
          title="Bookkeeping Services"
          description="Helping businesses maintain organized, accurate, and reliable financial records."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <div className="group">
                  <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-600">
                    <Icon
                      size={34}
                      className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}