"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    software: "QuickBooks Online",
    title: "Bank Reconciliation",
    image: "/images/portfolio/quickbooks/bank-reconciliation.png",
    description:
      "Imported bank feeds and reconciled transactions by matching deposits, withdrawals, and expenses while ensuring accurate financial records.",
    skills: ["Bank Feed", "Reconciliation", "Matching", "Accuracy"],
  },
  {
    software: "QuickBooks Online",
    title: "Dashboard",
    image: "/images/portfolio/quickbooks/dashboard.png",
    description:
      "Monitored company performance using the QuickBooks dashboard, tracking income, expenses, cash flow, and financial health.",
    skills: ["Dashboard", "Cash Flow", "Income", "Expenses"],
  },
  {
    software: "QuickBooks Online",
    title: "Bills Management",
    image: "/images/portfolio/quickbooks/bills.png",
    description:
      "Managed supplier bills, tracked due dates, and maintained accurate accounts payable records.",
    skills: ["Accounts Payable", "Bills", "Expenses", "Vendors"],
  },
  {
    software: "QuickBooks Online",
    title: "Invoice List",
    image: "/images/portfolio/quickbooks/invoice-list.png",
    description:
      "Created customer invoices, monitored payment status, and managed outstanding receivables.",
    skills: ["Invoices", "Accounts Receivable", "Payments", "Customers"],
  },
  {
    software: "QuickBooks Online",
    title: "Profit & Loss Report",
    image: "/images/portfolio/quickbooks/profit-loss.png",
    description:
      "Prepared Profit & Loss reports to analyze revenue, expenses, and profitability.",
    skills: ["Reporting", "Income", "Expenses", "Profit"],
  },
  {
    software: "QuickBooks Online",
    title: "Balance Sheet",
    image: "/images/portfolio/quickbooks/balance-sheet.png",
    description:
      "Generated Balance Sheet reports showing assets, liabilities, and equity for financial review.",
    skills: ["Assets", "Liabilities", "Equity", "Reporting"],
  },
];

export default function QuickBooksProjects() {
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
    </>
  );
}