"use client";
import { motion } from "framer-motion";

export function TrustedOrganizations() {
  const organizations = [
    {
      name: "Databricks",
      logo: "",
    },
    {
      name: "Accenture",
      logo: "",
    },
    {
      name: "Harvard",
      logo: "",
    },
    {
      name: "Abbott",
      logo: "",
    },
    {
      name: "Tulane University",
      logo: "",
    },
    {
      name: "Hitachi Solutions",
      logo: "",
    },
    {
      name: "Nike",
      logo: "",
    },
    {
      name: "Coca-Cola",
      logo: "",
    },
    {
      name: "Salesforce",
      logo: "",
    },
    {
      name: "Grammarly",
      logo: "",
    },
    {
      name: "Omron",
      logo: "",
    },
    {
      name: "Uber",
      logo: "",
    },
    {
      name: "CBRE",
      logo: "",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[300px] mb-16"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-8 logo-text">
        Trusted by people at
      </h2>
      <div className="flex flex-wrap justify-center mx-auto gap-4 max-w-[70%]">
        {organizations.map((org) => (
          <div
            key={org.name}
            className="flex items-center justify-center h-[70px] w-[70px] bg-white/40 rounded-lg"
          >
            {/* <Image
              src={org.logo || "/placeholder.svg"}
              alt={`${org.name} logo`}
              width={100}
              height={50}
              className="max-w-[100px] max-h-[50px] object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
            /> */}
          </div>
        ))}
      </div>
    </motion.main>
  );
}
