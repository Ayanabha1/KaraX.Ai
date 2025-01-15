import {
  CheckCircle,
  Briefcase,
  Users,
  ClipboardList,
  Menu,
  Send,
  Calendar,
  LucideIcon,
  SendHorizontal,
} from "lucide-react";
import Image from "next/image";

export default function AskKaraX() {
  return (
    <div className="min-h-screen dark:text-white flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1  flex gap-12 w-full">
        {/* Left Content */}
        <div className="w-[60%]">
          <h1 className="text-5xl font-bold mb-6 dark:text-emerald-400 text-emerald-500">
            Ask Acta Agent
          </h1>

          <p className="dark:text-gray-300 text-black text-lg mb-12 leading-relaxed">
            Get instant insights from your meeting conversations. Ask Acta to
            help you track key decisions, tasks, and contributions from your
            meetings with ease.
          </p>

          <div className="space-y-8">
            <Feature
              icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}
              title="Track Decisions"
              description="Ask Acta to summarize the key decisions made during the meeting."
            />

            <Feature
              icon={<Briefcase className="w-6 h-6 text-emerald-600" />}
              title="Monitor Deals"
              description="Ask Acta to check if any marketing deals were finalized during the call."
            />

            <Feature
              icon={<Users className="w-6 h-6 text-emerald-600" />}
              title="Review Contributions"
              description="Ask Acta to provide insights on Mark's contributions during the meeting."
            />

            <Feature
              icon={<ClipboardList className="w-6 h-6 text-emerald-600" />}
              title="Evaluate Candidates"
              description="Ask Acta if the candidate can proceed to the technical interview stage."
            />
          </div>
        </div>

        {/* Right Content - Mobile App Preview */}
        <div className="flex-1 max-w-md w-[40%] relative">
          <div className="z-[-1] absolute top-[60%] right-[50%] translate-x-[50%] w-[250px] h-[250px] bg-gradient-to-r from-transparent dark:via-green-300 via-green-700 to-transparent rounded-full  dark:blur-[200px] blur-[300px]"></div>

          <div className="rounded-3xl  bg-muted p-4 shadow-2xl h-full flex flex-col justify-between">
            {/* Top portion */}
            <div className="">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Menu className="w-6 h-6 text-gray-400" />
                <div className="text-lg font-semibold">Ask KaraX</div>
                <div className="w-8 h-8 dark:bg-emerald-400 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">A</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                <ChatMessage
                  color="bg-lime-500/20"
                  text="How is progressing with their curre..."
                  icon={CheckCircle}
                />
                <ChatMessage
                  color="bg-purple-500/20"
                  text="Are we on track to meet our goals?"
                  icon={Calendar}
                />
                <ChatMessage
                  color="bg-pink-500/20"
                  text="How can we improve collaboration?"
                  icon={ClipboardList}
                />
              </div>
            </div>

            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Message to KaraX.Ai........."
                className="w-full bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.2)] rounded-full py-3 px-6 pr-12 text-gray-300 placeholder-gray-800 dark:placeholder-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                <SendHorizontal className="w-5 h-5 text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.4)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-strat">
      <div className="text-emerald-400">{icon}</div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="dark:text-gray-400 text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function ChatMessage({
  color,
  text,
  icon: Icon,
}: {
  color: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div
      className={`p-4 rounded-xl bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.2)]`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full">
          <Icon className="size-5 dark:text-emerald-400 text-emerald-600" />
        </div>
        <p className="dark:text-gray-200 text-gray-800">{text}</p>
      </div>
    </div>
  );
}
