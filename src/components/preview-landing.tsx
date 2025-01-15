import Image from "next/image";

export default function PreviewLanding() {
  return (
    <div className="container w-[72rem] h-[50rem] pb-6 sm:pb-16">
      <div className="rounded-xl md:bg-muted/30 md:ring-1 md:ring-inset md:ring-border w-full backdrop-blur-3xl shadow-2xl border h-full">
        <div className="relative  overflow-hidden rounded-xl border md:rounded-lg w-full h-full">
          <Image src="/assets/landing/dashboard.png" alt="dashboard" fill />
        </div>
      </div>
    </div>
  );
}
