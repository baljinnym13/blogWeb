import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Slider from "@/components/slider";
import Trending from "@/components/trending";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Slider />
      <Trending />
    </main>
  );
}
