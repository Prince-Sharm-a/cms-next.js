import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    try{
        const posts = await prisma.post.findMany({
            where:{
                status:'PUBLISHED'
            }
        });
        return NextResponse.json(posts, { status:200 });
    } catch (err){
        console.error(err.message);
        return NextResponse.json({status:500},{error:err.message});
    }
}