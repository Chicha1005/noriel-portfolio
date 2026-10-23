"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "sent" | "activation" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/Norielcabab@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: { success?: boolean | string; message?: string } = await response.json();

      if (!response.ok || String(result.success) !== "true") {
        if (/activat/i.test(result.message ?? "")) {
          setSubmissionStatus("activation");
          return;
        }
        throw new Error(result.message ?? "Form submission failed");
      }

      form.reset();
      setSubmissionStatus("sent");
    } catch {
      setSubmissionStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-sky-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Whether you have a project, job opportunity, or simply want to
            connect, feel free to reach out. I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">

              {/* Email */}

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-sky-500/20">
                  <Mail className="text-sky-400" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:Norielcabab@gmail.com"
                    className="hover:text-sky-400 transition"
                  >
                    Norielcabab@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-sky-500/20">
                  <Phone className="text-sky-400" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Phone
                  </p>

                  <a
                    href="tel:+639687577134"
                    className="hover:text-sky-400 transition"
                  >
                    +63 968 757 7134
                  </a>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-sky-500/20">
                  <MapPin className="text-sky-400" />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Location
                  </p>

                  <p>
                    Philippines
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Chicha1005/cababshop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-800 hover:bg-sky-500 transition text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="http://www.linkedin.com/in/noriel-cabab-05aab5292"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-800 hover:bg-sky-500 transition text-xl"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/share/1YPogbePY9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-800 hover:bg-sky-500 transition text-xl"
              >
                <FaFacebookF />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-sky-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-sky-500"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Your Message..."
                aria-label="Your Message"
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none resize-none focus:border-sky-500"
              />

              {submissionStatus === "sent" && (
                <p role="status" className="text-sm text-emerald-400">
                  Message sent. Thank you for reaching out.
                </p>
              )}
              {submissionStatus === "activation" && (
                <p role="status" className="text-sm text-amber-300">
                  Check your inbox or Spam for the FormSubmit activation email, then click its confirmation link. After activating, send your message again.
                </p>
              )}
              {submissionStatus === "error" && (
                <p role="alert" className="text-sm text-rose-400">
                  Sorry, the message could not be sent. Please try again or email Norielcabab@gmail.com directly.
                </p>
              )}

              <button
                type="submit"
                disabled={submissionStatus === "sending"}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-sky-500 py-4 font-semibold hover:bg-sky-600 transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={18} />
                {submissionStatus === "sending" ? "Sending..." : "Send Message"}
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}