import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-100 h-[100vh] bg-white">
      <Header />
      <div className="perspective-distant border-test w-[100px] h-[100px]">
        <div className="transform-3d rotate-x-51 rotate-z-43 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl"></div>
      </div>
    </div>
  );
}
