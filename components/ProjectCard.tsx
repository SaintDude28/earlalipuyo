"use client";

import Image from "next/image";

type ProjectCardProps = {
  software: string;
  title: string;
  image: string;
  description: string;
  skills: string[];
  reverse?: boolean;
};

export default function ProjectCard({
  software,
  title,
  image,
  description,
  skills,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
        <Image
          src={image}
          alt={title}
          width={1400}
          height={900}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div>
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {software}
        </span>

        <h3 className="mt-6 text-4xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}