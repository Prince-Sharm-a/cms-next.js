"use client"
import GoogleIcon from "@/components/Icons/googleIcon";
import { Anvil, SignatureIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

export default function SignIn(){
    const [ loading, setloading ] = useState(false)
    const onSignin = async ()=>{
        try {
            setloading(true);
            await signIn("google")
        } catch (error){
            console.error(error.message)
            toast.error({
                title: "ERROR",
                description: error.message,
            })
        } finally {
            setloading(false);
        }
    }
    
    return(
        <section className="w-full flex h-[90vh] items-center">
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/3 rounded mx-auto bg-zinc-800 p-4 flex flex-col items-center gap-3">
                <Anvil className="size-16 text-gray-300"/>
                <p className="text-gray-200 text-sm">Welcome, by continuing with GeekForGeek CMS sign in, you'll be a Geek</p>
                <button onClick={onSignin} className="flex items-center gap-2 shadow-md hover:bg-gray-900/70 transition-colors duration-200 cursor-pointer font-bold shadow-gray-600 px-4 py-2 rounded-2xl">
                    <GoogleIcon className="size-8" /> { loading ? "Loading......." : "Sign In" }
                </button>
            </div>
        </section>
    )
}