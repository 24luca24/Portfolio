import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="max-w-6xl mx-auto px-4 pb-2 pt-2">
      {/* Clickable header (same style as Internship header) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full gap-2 px-3 py-4 bg-indigo-100 rounded-lg mb-8 hover:bg-indigo-200 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center">{title}</h2>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-700" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: isOpen ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </section>
  );
}