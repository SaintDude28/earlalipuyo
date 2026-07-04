"use client";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Hope Earl Alipuyo
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-600">
            Certified Bookkeeper specializing in
            <span className="font-semibold text-gray-900">
              {" "}QuickBooks Online{" "}
            </span>
            and
            <span className="font-semibold text-gray-900">
              {" "}Xero
            </span>.
            Helping businesses maintain accurate financial records,
            streamline bookkeeping processes, and produce reliable
            financial reports.
          </p>

          <a
            href="#home"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            <ChevronUp size={20} />
            Back to Top
          </a>

        </div>

      </div>

      <div className="border-t border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hope Earl Alipuyo.
            All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with Next.js 15 • Tailwind CSS • Vercel
          </p>

        </div>

      </div>

    </footer>
  );
}