"use client";

import Image from "next/image";
import {
  Mail,
  MapPin,
  Download,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-gray-50 to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">

          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="p-12 lg:p-16">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Available for Remote Work
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                Let's Work Together
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm a certified bookkeeper with experience in
                <strong> QuickBooks Online</strong> and
                <strong> Xero</strong>, helping businesses maintain accurate
                financial records, reconcile accounts, manage payables and
                receivables, and generate meaningful financial reports.
              </p>

              <div className="mt-10 grid gap-4">

                <div className="rounded-xl bg-gray-50 p-4">
                  ✅ QuickBooks Online Certified
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✅ Xero Certified
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✅ 4+ Years Accounting Experience
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✅ Detail-Oriented & Reliable
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="mailto:earlalipuyo@gmail.com"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="bg-gray-50 p-12 lg:p-16">

  <h3 className="text-3xl font-bold text-gray-900">
    Contact Information
  </h3>

  <p className="mt-3 text-gray-500">
    Feel free to reach out for bookkeeping opportunities,
    freelance projects, or long-term remote work.
  </p>

  <div className="mt-10 space-y-5">

    {/* Email */}

    <a
      href="mailto:earlalipuyo@gmail.com"
      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Mail className="h-7 w-7 text-blue-600" />

      <div>
        <p className="font-semibold text-gray-900">
          Email
        </p>

        <p className="text-gray-600">
          earlalipuyo@gmail.com
        </p>
      </div>
    </a>

    {/* WhatsApp */}

    <a
      href="https://wa.me/639953153032"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
  src="/images/icons/whatsapp.png"
  alt="WhatsApp"
  width={30}
  height={30}
  className="h-7 w-7 object-contain"
      />

      <div>
        <p className="font-semibold text-gray-900">
          WhatsApp
        </p>

        <p className="text-gray-600">
          +63 995 315 3032
        </p>
      </div>
    </a>

    {/* LinkedIn */}

    <a
      href="https://www.linkedin.com/in/earlalipuyo/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
  src="/images/icons/linkedin.png"
  alt="LinkedIn"
  width={30}
  height={30}
  className="h-7 w-7 object-contain"
      />

      <div>
        <p className="font-semibold text-gray-900">
          LinkedIn
        </p>

        <p className="text-gray-600">
          linkedin.com/in/earlalipuyo
        </p>
      </div>
    </a>

    {/* OnlineJobs.ph */}

    <a
      href="https://www.onlinejobs.ph/jobseekers/info/5006892"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src="/images/icons/onlinejobs.png"
        alt="OnlineJobs"
        width={30}
        height={30}
        className="h-7 w-7 object-contain"
      />

      <div>
        <p className="font-semibold text-gray-900">
          OnlineJobs.ph
        </p>

        <p className="text-gray-600">
          View my profile
        </p>
      </div>
    </a>

    {/* Upwork */}

    <a
      href="https://www.upwork.com/freelancers/~01ea8bbfdc32a4d338"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
  src="/images/icons/upwork.png"
  alt="Upwork"
  width={30}
  height={30}
  className="h-7 w-7 object-contain"
/>

      <div>
        <p className="font-semibold text-gray-900">
          Upwork
        </p>

        <p className="text-gray-600">
          View my profile
        </p>
      </div>
    </a>

    {/* Location */}

    <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

      <MapPin className="h-7 w-7 text-blue-600" />

      <div>
        <p className="font-semibold text-gray-900">
          Location
        </p>

        <p className="text-gray-600">
          Philippines • Available for Remote Work
        </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}