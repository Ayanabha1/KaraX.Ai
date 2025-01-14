import { features } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-16 w-full">
      <div className="space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          {/* <div className="inline-block px-4 py-1 bg-gray-800 rounded-full text-sm">
            Features
          </div> */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Essential tools for your
            <br />
            <span className="text-gray-400">financial growth</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock your financial potential with SwiftFunds powerful suite of
            tools designed to drive your financial success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "rounded-xl overflow-hidden cursor-pointer",
                `col-span-${feature.cols}`
              )}
            >
              {/* Blank Container */}
              <div className="h-80 bg-muted relative group">
                {/* Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-transparent">
                  <div className="">
                    <h3 className="text-xl font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                    <p className="text-[14px] mt-2 transition-all duration-300 ease-in-out group-hover:max-h-[20px] max-h-0 overflow-hidden w-full flex items-center gap-2">
                      Learn more <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
