import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";


export async function PUT(request,{ params }){
    try{
        const { slug } = await params;
        const body = await request.json();
        const { title, ogImage, content, excerpt, metaDescription, category, keywords, status} = body;

        const isAdmin = true;
        const session = await getAuthSession();

        const post = await prisma.post.findUnique({
            where: { slug },
            select: { authorId: true }
        })

        if(!post){
            return NextResponse.json({message:"Post Not Found"},{status:404});
        }

        const isAuthor = post.authorId === session.user.id;

        if(!isAuthor && !isAdmin){
            return NextResponse.json({message:"Not Authorized"},{status:403});
        }

        const updatedPost = await prisma.post.update({
            where: { slug },
            data: {
                title,
                content,
                thumbnail: ogImage || null,
                desc: metaDescription || null,
                keywords: keywords || null,
                excerpt: excerpt || null,
                status: status
            }
        })

        revalidateTag(slug);

        return NextResponse.json(updatedPost,{status:200});
    } catch(err){
        console.error(err);
        return NextResponse.json({message:'Failed to Update Post Due to Error',error:err.message},{status:500});
    }
}