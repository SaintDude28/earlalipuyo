import Image from "next/image";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const software = [
  {
    name: "QuickBooks Online",
    image: "/images/logos/quickbooks.png",
  },
  {
    name: "Xero",
    image: "/images/logos/xero.png",
  },
  {
    name: "Microsoft Excel",
    image: "/images/logos/excel.png",
  },
  {
    name: "Google Sheets",
    image: "/images/logos/google-sheets.png",
  },
];

export default function Software() {
  return (
    <section id="software" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          eyebrow="SOFTWARE EXPERTISE"
          title="Tools I Work With"
          description="Professional bookkeeping software and productivity tools I use to help businesses maintain accurate financial records."
        />

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">

          {software.map((item) => (
            <Card key={item.name}>

              <div className="flex flex-col items-center">

                <div className="h-20 flex items-center justify-center">
  <Image
    src={item.image}
    alt={item.name}
    width={70}
    height={70}
    className="object-contain max-h-16 w-auto"
  />
</div>

                <h3 className="mt-5 text-lg font-semibold text-center">
                  {item.name}
                </h3>

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}