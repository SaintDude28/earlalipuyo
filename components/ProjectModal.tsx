"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  software: string;
  title: string;
  image: string;
  description: string;
  skills: string[];
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ProjectModal({
  project,
  onClose,
  onPrevious,
  onNext,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onPrevious, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row flex-col"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        {/* Image */}
        <div className="relative flex flex-1 items-start justify-center bg-gray-100 p-8">
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <Image
  src={project.image}
  alt={project.title}
  width={1800}
  height={1200}
  priority
  className="w-full h-auto rounded-xl object-contain"
/>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:scale-110 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="w-full overflow-y-auto border-l border-gray-200 bg-white p-10 lg:w-[380px]">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {project.software}
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {project.title}
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            {project.description}
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">
            Skills Used
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-xl border bg-gray-50 p-5">
            <h4 className="mb-3 font-semibold text-gray-800">
              Keyboard Shortcuts
            </h4>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-white px-3 py-2 shadow">
                ← Previous
              </span>

              <span className="rounded bg-white px-3 py-2 shadow">
                → Next
              </span>

              <span className="rounded bg-white px-3 py-2 shadow">
                Esc Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}