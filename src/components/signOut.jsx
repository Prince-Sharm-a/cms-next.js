"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { toast } from "sonner"
import { resolve } from "styled-jsx/css"

export default function SignOut(){
    const logout= async (e)=>{
        e.preventDefault()
        toast.promise(async ()=> {
            await signOut({callbackUrl:"/sign-in"})
            return new Promise((resolve,reject)=>resolve({name:"Event"}))
        },{
            loading:"Loading........",
            success:"Logged Out Successfully",
            error:"Error",
        })
    }
    return (
        <>
        <div className="flex gap-2" onClick={logout}>
            <LogOut /> Log out
        </div>
        </>
    )
}