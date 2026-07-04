"use client";

import { useState } from "react";
import Image from "next/image";

import QuickBooksProjects from "./QuickBooksProjects";
import XeroProjects from "./XeroProjects";

type Software = "quickbooks" | "xero" | null;

export default function PortfolioTabs() {
  const [selected, setSelected] = useState<Software>(null);

  const handleSelect = (software: Software) => {
    setSelected((prev) => (prev === software ? null : software));
  };

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Bookkeeping Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Choose an accounting software to explore real bookkeeping workflows
            completed using QuickBooks Online and Xero.
          </p>
        </div>

        {/* Software Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* QuickBooks */}
          <button
            onClick={() => handleSelect("quickbooks")}
            className={`group rounded-3xl border bg-white p-10 text-center transition-all duration-300 ${
              selected === "quickbooks"
                ? "border-green-500 shadow-2xl -translate-y-1"
                : "border-gray-200 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
            }`}
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                src="/images/logos/quickbooks.png"
                alt="QuickBooks Online"
                width={220}
                height={70}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              QuickBooks Online
            </h3>

            <p className="mt-2 text-gray-500">
              6 Portfolio Projects
            </p>

            <p className="mt-5 text-sm font-medium text-green-600">
              {selected === "quickbooks"
                ? "▲ Click again to hide"
                : "▼ Click to explore"}
            </p>
          </button>

          {/* Xero */}
          <button
            onClick={() => handleSelect("xero")}
            className={`group rounded-3xl border bg-white p-10 text-center transition-all duration-300 ${
              selected === "xero"
                ? "border-sky-500 shadow-2xl -translate-y-1"
                : "border-gray-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
            }`}
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                src="/images/logos/xero.png"
                alt="Xero"
                width={170}
                height={70}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Xero
            </h3>

            <p className="mt-2 text-gray-500">
              6 Portfolio Projects
            </p>

            <p className="mt-5 text-sm font-medium text-sky-600">
              {selected === "xero"
                ? "▲ Click again to hide"
                : "▼ Click to explore"}
            </p>
          </button>
        </div>

        {/* Projects */}
        <div className="mt-20">
          {selected === null && (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Select an Accounting Software
              </h3>

              <p className="mt-4 text-gray-500">
                Click one of the cards above to view my bookkeeping portfolio.
              </p>
            </div>
          )}

          {selected === "quickbooks" && (
  <div className="animate-fadeIn">
    <QuickBooksProjects />
  </div>
)}

{selected === "xero" && (
  <div className="animate-fadeIn">
    <XeroProjects />
  </div>
)}
        </div>
      </div>
    </section>
  );
}