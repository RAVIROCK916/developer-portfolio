import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="max-x-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />},
        ]} />
        <Hero />
      </div>
    </main>
  );
}
