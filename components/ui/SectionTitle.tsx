interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}