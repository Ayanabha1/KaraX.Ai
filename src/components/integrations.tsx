"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Integrations() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[300px] w-full flex flex-col items-start relative"
      viewport={{ once: true }}
    >
      {/* Main Content */}
      <div className="space-y-4 flex justify-between w-full items-start">
        <div>
          <h1 className="gradient-text text-3xl md:text-4xl font-semibold mb-2">
            Download KaraX Chrome extension
          </h1>

          {/* Subheading with gradient */}
          <p className="text-xl font-medium">
            One Extension for Google Meet, MS Teams and Zoom
          </p>
        </div>

        <Button
          variant="outline"
          className="bg-white text-black hover:bg-white/90 flex items-center"
        >
          <div className="relative size-5">
            <Image
              src="/assets/landing/chrome.png"
              alt="Google Chrome"
              className="w-5 h-5 mr-2"
              fill
            />
          </div>
          Get It On Chrome
        </Button>
      </div>
      {/* Platform Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <Button
          variant="outline"
          className="bg-white/10 hover:bg-white/20 border-0"
        >
          <div className="relative size-5">
            <Image
              src="/assets/landing/MicrosoftTeams.png"
              alt="Teams"
              className="w-5 h-5 mr-2"
              fill
            />
          </div>
          Microsoft Teams
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 hover:bg-white/20 border-0"
        >
          <div className="relative size-5">
            <Image
              src="/assets/landing/GoogleMeet.png"
              alt="Google Meet"
              className="w-5 h-5 mr-2"
              fill
            />
          </div>
          Google Meet
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 hover:bg-white/20 border-0"
        >
          <div className="relative size-5">
            <Image
              src="/assets/landing/Zoom.png"
              alt="Zoom"
              className="w-5 h-5 mr-2"
              fill
            />
          </div>
          Zoom
        </Button>
      </div>
    </motion.main>
  );
}
