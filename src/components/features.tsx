// import { features } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardList,
  FileText,
  Icon,
  Video,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Meeting Summary",
    description:
      "Receive a concise summary of your meeting's key points, decisions, and takeaways.",
    cols: 2,
    icon: FileText,
    imageSrc: "/assets/landing/meeting-summary.svg",
  },
  {
    title: "Action Items",
    description:
      "Automatically generate a list of action items, ensuring accountability and follow-through.",
    cols: 1,
    icon: ClipboardList,
    imageSrc: "/assets/landing/action-points.svg",
  },
  {
    title: "Key Topics",
    description:
      "Automatically generate a list of Key Topics discussed during the meeting.",
    cols: 1,
    icon: ClipboardList,
    imageSrc: "/assets/landing/key-topics.svg",
  },
  {
    title: "Takeaways",
    description: "Able to define key Takeaways from meetings.",
    cols: 2,
    icon: CheckCircle,
    imageSrc: "/assets/landing/takeways.svg",
  },

  {
    title: "Integrations",
    description:
      "Integrates with popular video conferencing platforms like Google Meet, Zoom, and Microsoft Teams.",
    cols: 2,
    icon: Video,
    imageSrc: "/assets/landing/integrations.png",
  },
  {
    title: "Calendar Integration",
    description: "Able to integrate with Google and MS Teams calendars.",
    cols: 1,
    icon: Calendar,
    imageSrc: "/assets/landing/calender-integration.svg",
  },
];

export default function FeaturesPage() {
  return (
    <div className="w-full">
      <div className="space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          {/* <div className="inline-block px-4 py-1 bg-gray-800 rounded-full text-sm">
            Features
          </div> */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Essential tools for your
            <br />
            <span className="logo-text">financial growth</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Unlock your financial potential with SwiftFunds powerful suite of
            tools designed to drive your financial success
          </p>
        </div>

        {/* Features Grid */}
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "rounded-xl overflow-hidden cursor-pointer border",
                `col-span-${feature.cols}`
              )}
            >
              {/* Blank Container */}
              <div className="h-80 bg-muted overflow-hidden relative group">
                {/* Text Overlay */}
                <div className="relative w-full h-full overflow-hidden">
                  {feature.imageSrc && (
                    <Image
                      src={feature.imageSrc || ""}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-transparent">
                  <div className="w-full">
                    <feature.icon className="mb-4 size-8 group-hover:size-6 transition-all duration-100 ease-in-out" />
                    <h3 className="text-xl font-medium mb-2 max-w-[60%]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 w-[75%]">
                      {feature.description}
                    </p>
                    <p className="text-[14px] mt-2 transition-all duration-100 ease-in-out group-hover:max-h-[20px] max-h-0 overflow-hidden flex items-center gap-2">
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
