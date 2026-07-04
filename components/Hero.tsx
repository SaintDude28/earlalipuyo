import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            👋 Available for Remote Bookkeeping
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Hope Earl{" "}
            <span className="text-blue-600">
              Alipuyo
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-700">
            Bookkeeper | QuickBooks ProAdvisor | Xero L3 Certified Specialist
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Helping businesses maintain accurate financial records,
            reconcile accounts, manage invoices, and produce reliable
            financial reports using modern cloud accounting software.
          </p>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">
                4+
              </p>

              <p className="text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">
                2
              </p>

              <p className="text-sm text-gray-500">
                Certifications
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">
                Remote
              </p>

              <p className="text-sm text-gray-500">
                Worldwide
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a href="#projects">
              <Button>
                View Projects
              </Button>
            </a>

            <a
              href="/documents/resume.pdf"
              download
            >
              <Button variant="secondary">
                Download Resume
              </Button>
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="overflow-hidden rounded-[40px] bg-white p-5 shadow-2xl">

            <Image
              src="/images/profile/Profile.png"
              alt="Hope Earl Alipuyo"
              width={430}
              height={560}
              priority
              className="rounded-[32px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}