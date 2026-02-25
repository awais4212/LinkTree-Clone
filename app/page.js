"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  
  const [text, settext] = useState("LinkTree.ee/")
  return (
    <>
      <main>
        <section className="bg-[#d2e823] min-h-screen grid grid-cols-2">
          <div className=" flex  justify-center flex-col ml-[10vw]">
            <h1 className="text-[#254f1a] font-black font-[family-name:var(--font-poppins)]  text-[88px] leading-[0.95]">
              A link in bio built for you.
            </h1>
            <p className="text-[#254f1a] text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="flex gap-2">

              <input
              value={text} onChange={(e)=>settext(e.target.value)}
                className="rounded-lg px-6 py-5 border border-transparent 
              text-black bg-white text-lg 
              placeholder:text-gray-500 
                focus:outline-none 
              focus:border-[#d2e823]
                focus:ring-2 focus:ring-white 
                transition-all duration-200"
                type="text"
                placeholder="Enter Your handle"
              />

              <button onClick={()=>createTree()} className="bg-[#254f1a] p-4 rounded-full px-10 font-bold">Get started for free</button>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col mr-[10vw]">
            <img src="/home.jpg" alt="" />
          </div>
        </section>





        <section className="bg-[#2665d6] min-h-screen">
          ssfsdf
        </section>
        <section className="bg-[#780016] min-h-screen">
          ssfsdf
        </section>
      </main>
    </>
  );
}
