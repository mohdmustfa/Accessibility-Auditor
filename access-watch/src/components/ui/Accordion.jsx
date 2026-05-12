import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Accordion({
  title,
  children,
  defaultOpen = false,
}) {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-50 transition cursor-pointer"
      >
        <div className="text-lg font-semibold text-slate-800 w-full">
          {title}
        </div>

        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >

        <div className="overflow-hidden">

          <div className="px-4 pb-5 text-slate-600">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Accordion;