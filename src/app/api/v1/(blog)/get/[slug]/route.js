import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request,{ params }) {
    try{
        const { slug } = await params;
        const post = await prisma.post.findUnique({
            where:{
                status:'PUBLISHED',
                slug: slug
            },
            include: {
                author: {
                    select: {
                        name: true,
                        image: true,
                    }
                }
            }
        });
        if(!post){
            return NextResponse.json({ message: "Not Found Any Post" },{status:404})
        }
        return NextResponse.json(post,{status:200});
    } catch(err){
        return NextResponse.json({status:500},{error:err.message});
    }
}