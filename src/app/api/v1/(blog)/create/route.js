import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(request){
    try{
        const session = await getAuthSession();
        // console.log(session.user.id)
        // console.log("type",typeof session.user.id)
        
        const body = await request.json();
        // console.log(body);
        const {title, slug, ogImage, content, excerpt, description, keywords, status, category}=body;

        if(!title || !content || !slug || !category){
            if(!title){
                return NextResponse.json({message:"title required"},{status:400});
            }
            if(!content){
                return NextResponse.json({message:"content is not avilable"},{status:400});
            }
            if(!slug){
                return NextResponse.json({message:"slug is required"},{status:400});
            }
            if(!category){
                return NextResponse.json({message:"enter category before publishing your blog"},{status:400});
            }
        }

        const statusOfPost = status || 'DRAFT';

    
        let categoryCheck = await prisma.category.findUnique({
            where: { slug:category }
        });

        if(!categoryCheck){
            categoryCheck = await prisma.category.create({
                data:{
                    title: category.charAt(0).toUpperCase() + category.slice(1),
                    slug: category,
                }
            })
        }

        const post = await prisma.post.create({
            data:{
                title: title,
                content: content,
                slug: slug,
                thumbnail:ogImage || null,
                desc: description || null,
                keywords: keywords || null,
                excerpt: excerpt || null,
                status: statusOfPost,
                catSlug: categoryCheck.slug,
                authorId: session.user.id
            }
        })

        return NextResponse.json(post, {status:201});
    } catch(error){
        console.error(error.message)
        return NextResponse.json({message:"failed to save post",error:error.message},{status:500});
    }
}