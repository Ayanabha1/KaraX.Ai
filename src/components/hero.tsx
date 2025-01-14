"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import PreviewLanding from "./preview-landing";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" w-full"
    >
      <div className="relative bg-background py-24 sm:py-32">
        <div className="dark:bg-grid-white/[0.06] bg-grid-black/[0.04] pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white_50%,transparent_80%)]"></div>

        {/* <BackgroundBeams> */}
        <div className="container">
          <div className="mx-auto flex flex-col items-center text-center">
            <div className="mb-5 inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              Now in Public Beta
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Effortless Meeting Notes
              <br />
              <span className="text-[rgb(62,207,142)]">
                with KaraX Agent
              </span>{" "}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              AI-powered meeting notes with transcription, summarization, and
              smart organization for enhanced productivity and seamless
              integration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" color="rgb(62,207,142)">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
            <div className="mt-16">
              <PreviewLanding />
            </div>
          </div>
        </div>
        {/* </BackgroundBeams> */}
      </div>
    </motion.main>
  );
}
