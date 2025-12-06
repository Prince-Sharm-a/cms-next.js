import PostIcon from "@/components/Icons/postsicon";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return ( 
    <main className="w-full">
      <section className="flex justify-center h-[50vh] sm:h-[70vh] w-full">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex-col flex px-2">
            <h1 className="text-2xl  tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Manage your content with Ease
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publish with confidence.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/sign-in"><Button variant={"default"} className="bg-gray-400">Try it out!</Button></Link>
            <Button variant={"outline"}>Learn more</Button>
          </div>          
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[80vh] bg-gray-600/30 justify-center items-center flex px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          <span className="flex flex-col items-center gap-2">
            <PostIcon className="w-[50px] h-[50px]" />
            <h3 className="text-xl font-bold text-gray-100">Intuitive Editor</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Layers size={50}/>
            <h3 className="text-xl font-bold text-gray-100">Flexible Tools</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50}/>
            <h3 className="text-xl font-bold text-gray-100">Blazing fast</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
          </span>
        </div>
      </section>
      <section className="flex justify-center flex-col w-full h-[50vh] sm:h-[70vh]">
        <div className="flex justify-center items-center flex-col gap-2 py-2">
          <div className="max-w-[50%] text-center" >
            <h4 className="font-bold text-2xl">Ready to transform your content Journey?</h4>
            <p className="text-sm text-gray-400">Join thousands of content creators like you who choose GeekForGeek CMS</p>
          </div>
          <div >
            <input type="email" placeholder="Enter you Email" className="bg-zinc-800 h-7 focus:outline-none rounded px-1 text-sm text-gray-500"/>
          </div>
          <div>
            <Button variant={"outline"}>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
