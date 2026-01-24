"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import ImageUpload from "./ImageUpload";
// it showing error while reloading page 
// import ReactQuill from "react-quill-new";

const ReactQuill = dynamic(()=>import("react-quill-new"),{ssr:false});


export default function Editor(){
    const { register, handleSubmit } = useForm();
    const [ content, setContent ] = useState("");
    const [ ogImage, setOgImage ] = useState("");


    const formSubmit = async (data)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({...data,ogImage,content,slug:data?.title.toLowerCase().replaceAll(" ","-")})
        });
        // console.log(content);
        // console.log(ogImage);
        // console.log(data);
        
    }
    return (
        <section>
            <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                <input required {...register('title')} type="text" className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm w-full" placeholder="Enter The Post Title..."/>
                <ReactQuill 
                value={content} 
                onChange={setContent} 
                modules={{
                    toolbar:[
                        [{header:"1"},{header:"2"},{header:"3"}],
                        [{size:[]}],
                        ["bold","italic","underline","strike"],
                        [{list:"ordered"},{list:"bullet"}],
                        ["link","image","code-block"]
                    ]
                }}
                formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "list",
                    "link",
                    "image",
                    "code-block"
                ]}
                />
                <input required {...register('excerpt')} type="text" className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm w-full" placeholder="Enter excerpt..."/>
                <input required {...register('category')} type="text" className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm w-full" placeholder="Enter Category..."/>
                <h2 className="text-xl font-bold">SEO DATA</h2>
                <ImageUpload setCoverImage={setOgImage} />
                <input {...register('keywords')} type="text" className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm w-full" placeholder="Enter Keywords..."/>
                <input {...register('description')} type="text" className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm w-full" placeholder="Enter Meta Description..."/>
                <div className="flex gap-4">
                    <select
                    {...register('status')}
                    className="shadow-md hover:bg-gray-900/90 transition-colors duration-200 cursor-pointer font-bold shadow-gray-600 px-4 py-2 rounded-2xl"
                    >
                        <option value="DRAFT">Draft</option>
                        <option value="PUBLISHED">Publish</option>
                    </select>
                    <button className="shadow-md hover:bg-gray-900/90 transition-colors duration-200 cursor-pointer font-bold shadow-gray-600 px-4 py-2 rounded-2xl">Save</button>
                </div>
            </form>
        </section>
    )
}