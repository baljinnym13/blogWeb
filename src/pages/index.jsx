import { Inter } from "next/font/google";
import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Slider />
      <Trending />
      <Blogpost />
    </main>
  );
}
