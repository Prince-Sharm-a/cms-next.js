"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export default function SignOut(){
    const logout= async (e)=>{
        e.preventDefault()
        await signOut({callbackUrl:"/sign-in"})
    }
    return (
        <>
        <div className="flex gap-2" onClick={logout}>
            <LogOut /> Log out
        </div>
        </>
    )
}