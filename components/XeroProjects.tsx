"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    software: "Xero",
    title: "Bank Reconciliation",
    image: "/images/portfolio/xero/xero-bank-reconciliation.png",
    description:
      "Performed accurate bank reconciliations in Xero by matching imported bank feed transactions with invoices, bills, and expense claims. Maintained clean books and resolved discrepancies efficiently.",
    skills: [
      "Bank Feeds",
      "Reconciliation",
      "Matching",
      "Accuracy",
    ],
  },
  {
    software: "Xero",
    title: "Xero Dashboard",
    image: "/images/portfolio/xero/xero-dashboard.png",
    description:
      "Utilized the Xero dashboard to monitor cash flow, account balances, outstanding invoices, bills, and key financial metrics.",
    skills: [
      "Dashboard",
      "Cash Flow",
      "Reporting",
      "Insights",
    ],
  },
  {
    software: "Xero",
    title: "Contact Management",
    image: "/images/portfolio/xero/xero-contacts.png",
    description:
      "Managed customer and supplier records, organized contact groups, maintained payment histories, and ensured accurate client information.",
    skills: [
      "Contacts",
      "Customers",
      "Suppliers",
      "Organization",
    ],
  },
  {
    software: "Xero",
    title: "Inventory Management",
    image: "/images/portfolio/xero/xero-inventory.png",
    description:
      "Tracked inventory items, monitored stock quantities, updated product records, and maintained accurate inventory valuation.",
    skills: [
      "Inventory",
      "Products",
      "Stock",
      "Valuation",
    ],
  },
  {
    software: "Xero",
    title: "Profit & Loss Reporting",
    image: "/images/portfolio/xero/xero-profit-loss.png",
    description:
      "Generated and reviewed Profit & Loss reports to analyze revenue, expenses, and overall business performance.",
    skills: [
      "Reporting",
      "Income",
      "Expenses",
      "Profit",
    ],
  },
  {
    software: "Xero",
    title: "Project Tracking",
    image: "/images/portfolio/xero/xero-projects.png",
    description:
      "Managed project budgets, tracked billable time, allocated expenses, monitored profitability, and generated project reports.",
    skills: [
      "Projects",
      "Budgeting",
      "Time Tracking",
      "Profitability",
    ],
  },
];

export default function XeroProjects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <>
      <section className="space-y-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            software={project.software}
            title={project.title}
            image={project.image}
            description={project.description}
            skills={project.skills}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <ProjectModal
        project={selectedProject}
        onPrevious={() =>
          setSelectedIndex((prev) =>
            prev === null
              ? 0
              : (prev - 1 + projects.length) % projects.length
          )
        }
        onNext={() =>
          setSelectedIndex((prev) =>
            prev === null
              ? 0
              : (prev + 1) % projects.length
          )
        }
      />
    </>
  );
}