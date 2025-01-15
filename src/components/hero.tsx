"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import PreviewLanding from "./preview-landing";
import Starfield from "./star-field";
import { useTheme } from "next-themes";

export default function Hero() {
  const theme = useTheme();
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" w-full"
    >
      <Starfield starCount={500} speedFactor={0} />
      <div className="relative bg-background py-24 sm:py-32">
        <img
          src="/assets/landing/bg-image-2.svg"
          alt="hero-background"
          className="absolute top-[-400px]"
        ></img>
        <div className="\pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white_50%,transparent_80%)]"></div>

        <div className="container relative">
          <img
            src="/assets/landing/bg-image.svg"
            alt="Hero-background"
            className="absolute top-0"
          />
          <div className="mx-auto flex flex-col items-center text-center">
            <div className="mb-5 inline-block rounded-lg px-3 py-1 text-sm bg-violet-600/80 dark:bg-[rgb(46,39,53)] text-white">
              Now in Public Beta
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Effortless Meeting Notes
              <br />
              <span className="gradient-text">with KaraX Agent</span>{" "}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              AI-powered meeting notes with transcription, summarization, and
              smart organization for enhanced productivity and seamless
              integration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 z-10">
              <Button size="lg" className="shadow-md">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="shadow-md">
                Request Demo
              </Button>
            </div>
            <div className="mt-16 relative">
              {/* <div className="z-0 absolute bottom-[75%] left-[50%] translate-x-[-50%] w-[50vw] max-w-[700px] h-[200px] bg-gradient-to-r from-transparent dark:via-green-200 via-green-700 to-transparent dark:blur-[500px] blur-[300px] rounded-full"></div> */}
              <PreviewLanding />
            </div>
          </div>
        </div>
        {/* </BackgroundBeams> */}
      </div>
    </motion.main>
  );
}
