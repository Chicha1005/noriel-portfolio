"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
  src="/profile.jpg"
  alt="Noriel Cabab"
  width={240}
  height={240}
  priority
  className="rounded-full border-4 border-sky-500 shadow-2xl mb-8 transition-all duration-500 hover:scale-105 hover:rotate-2"
/>

        <p className="text-sky-400 text-xl mb-2">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
          Noriel M. Cabab
        </h1>

        <div className="mt-4 text-2xl md:text-3xl font-semibold text-sky-400 h-10">
          <TypeAnimation
            sequence={[
              "Accounting Professional",
              2000,
              "Web Developer",
              2000,
              "Audit Officer",
              2000,
              "Next.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-2xl mt-8 text-lg leading-8 text-slate-300">
          Passionate about finance, technology, and building modern web
          applications that help businesses become smarter, faster, and more
          efficient.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Button
            size="lg"
            className="
bg-sky-500
hover:bg-sky-400
px-8
py-6
rounded-xl
shadow-xl
transition-all
duration-300
hover:scale-105
hover:shadow-sky-500/40
"
          >
            Download Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
border-sky-500
text-sky-400
px-8
py-6
rounded-xl
hover:bg-sky-500
hover:text-white
transition-all
duration-300
hover:scale-105
"
          >
            Contact Me
          </Button>
        </div>
      </div>
    <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
  <span className="text-slate-500 text-sm mb-2">
    Scroll Down
  </span>

  <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center">
    <div className="w-1.5 h-3 bg-sky-400 rounded-full mt-2" />
  </div>
</div>
</section>
  );
}