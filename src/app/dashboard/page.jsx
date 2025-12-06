"use client"
import { Button } from "@/components/ui/button";
import { authOptions, getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Dashboard(){
    const [user,setUser]=useState();
    useEffect(()=>{
        toast.promise(async ()=>{
            try{
                const sess = await fetch("http://localhost:3000/api/getAuth").then(data=>data.json());
                // console.log("user",sess?.user)
                setUser(sess?.user)  
                return sess;              
            } catch(err){
                toast.error(`${err.message}`);
                console.error(err.message)
            }
        },{
            loading:"Loading........",
            success:(sess)=> sess ?`Hi, ${sess?.user.name} You Successfully Logged In`: `Hey Welcome to GeekForGeek CMS`,
            error:"Error"
        }
    )
    },[setUser])
    // console.log("user out",user);

    return (
        <div>
            {
                user ? 
                <h2 className="flex flex-col text-center">Wellcome to The GeekForGeek CMS! <p> {user.name}</p></h2> :
                <Link href={"/sign-in"} ><Button variant={"outline"}>LogIn</Button></Link>
            }
        </div>        
    )
}