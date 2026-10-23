"use client";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">

        <h2 className="text-2xl font-bold text-sky-400">
          Noriel M. Cabab
        </h2>

        <p className="text-slate-400 text-center">
          Accounting Professional • Audit Officer
        </p>

        <div className="flex gap-5 text-xl">

          <a
            href="https://github.com/Chicha1005/cababshop"
            target="_blank"
            className="transition hover:text-sky-400"
          >
            <FaGithub />
          </a>

          <a
            href="http://www.linkedin.com/in/noriel-cabab-05aab5292"
            target="_blank"
            className="transition hover:text-sky-400"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.facebook.com/share/1YPogbePY9/"
            target="_blank"
            className="transition hover:text-sky-400"
          >
            <FaFacebookF />
          </a>

          <a
            href="mailto:Norielcabab@gmail.com"
            className="transition hover:text-sky-400"
          >
            <Mail size={22} />
          </a>

        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 font-medium transition hover:bg-sky-600"
        >
          <ArrowUp size={18} />
          Back to Top
        </button>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Noriel M. Cabab. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}