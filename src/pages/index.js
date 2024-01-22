import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, Left, Right } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
