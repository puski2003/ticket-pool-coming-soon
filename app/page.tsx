import Image from "next/image";
import bgImage from '@/assets/bg-image-comming-soon.jpg'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import logo from "@/assets/logo.svg"
import ribbon from "@/assets/ribbbon.png"
import pestalShape from "@/assets/pastel-shape.png"
import gradientShape from "@/assets/gradient-shape.png"
export default function Home() {
  return (
    <div className="h-screen ">
      <div className="flex justify-center mt-10">
        <div className="bg-white p-5 rounded rounded-3xl inline-flex shadow-xl">
          <Image src={logo} width={100} height={100} />
        </div>
      </div>


      <div className="flex justify-center flex-col  items-center h-[65%]" >
        <h2 className="text-black font-medium text-md lg:text-xl py-4">WE'RE STILL</h2>
        <h1 className="font-extrabold text-[#0A47DE] text-3xl sm:text-4xl  md:text-5xl  lg:text-6xl tracking-tighter ">Cooking Our Website</h1>
         <h3 className="px-2 text-gray-400 text-center  text-md sm:text-2xl pt-5">We are going to launch our website very soon.<br/>Stay Tuned .</h3>
      </div>
      <Image src={pestalShape} className=" w-[120px] sm:w-[150px]  md:w-[200px] absolute  bottom-20 left-8 md:bottom-20 md:left-16" />
      <Image src={gradientShape} className=" w-[110px] sm:w-[150px] w-[200px] absolute top-24 right-4 md:top-20 lg:right-16" />
      <div>
        
      </div>

    </div>
  );
}
