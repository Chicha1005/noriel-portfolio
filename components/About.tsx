"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calculator,
  FileBarChart2,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Bookkeeping & finance operations",
  },
  {
    icon: FileBarChart2,
    title: "Audit",
    description: "Internal Control & Compliance",
  },
  {
    icon: FileBarChart2,
    title: "Financial Reporting",
    description: "Accurate reports & business insights",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "8+ Years Professional Experience",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

              <Image
                   src="/profile.jpg"
                alt="Noriel Cabab"
                width={300}
                height={300}
                className="relative rounded-full border-4 border-blue-500 object-cover shadow-2xl"
              />

            </div>

          </motion.div>

          {/* CONTENT */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-400 font-semibold tracking-widest uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .1 }}
              className="text-4xl md:text-5xl font-bold mt-3"
            >
              Accounting Professional
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="mt-8 text-gray-300 leading-8"
            >
              I am an Accounting Professional with experience in financial
              reporting, auditing, and business operations. I focus on helping
              organizations maintain accurate records, strengthen internal
              controls, and make informed financial decisions.

              <br /><br />

              I enjoy using analytical thinking to support practical and
              efficient business operations.
            </motion.p>

            {/* BUTTON */}

            <motion.a
              href="/resume.pdf"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: .95
              }}
              className="inline-flex items-center gap-2 mt-10 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-xl"
            >
              <Download size={18}/>
              Download Resume
            </motion.a>

          </div>

        </motion.div>

        {/* FEATURE CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity:0,
                  y:30
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  delay:index*.15
                }}
                viewport={{
                  once:true
                }}
                whileHover={{
                  y:-8
                }}
                className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-7
                shadow-xl
                "
              >

                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-5">

                  <Icon
                    size={28}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
