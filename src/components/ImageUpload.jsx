"use client"
import { storage } from "@/static/firebaseConfig";
import { supabase } from "@/lib/supabaseClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function ImageUpload({setCoverImage}){
    const [ imageURL, setImageURL ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const handleImageChange= async (e)=>{
        const image = e.target.files[0];
        if(image){
            uploadToSupaBase(image);
        }
        // console.log(e.target.files[0])
    }
    const uploadToSupaBase = async (image)=>{
        setLoading(true);
        // console.log(image)
        const imageName = `${image.name}-${Date.now()}`;
        // const storageRef = ref(storage,`images/${image.name}`)
        try{
            // await uploadBytes(storageRef,image);
            const { error } = await supabase.storage.from("images").upload(imageName, image);
            if(error){
                toast.error(`${error.message}`)
                setLoading(false)
                return
            }
            // const url = await getDownloadURL(storageRef)
            const { data } = supabase.storage.from("images").getPublicUrl(imageName);
            setImageURL(data.publicUrl);
            setCoverImage(data.publicUrl);
            toast.success(`Image Uploaded`)
            console.log(data)
        } catch(error){
            toast.error(`ERROR:${error.message}`);
            console.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex gap-x-4">
            <div className="w-60">
                <label className="cursor-pointer w-60">
                    <span className="border flex gap-4 flex-wrap border-gray-400 border-dashed h-10 bg-gray-500/2 justify-center items-center rounded">
                        Upload Cover Image
                        <UploadIcon />
                    </span>
                    <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} hidden disabled={loading} />
                </label>
            </div>
            <div className="">
                {
                    loading && <span>Uploading...</span>
                }
                {
                    imageURL.length > 0 && 
                    <img src={imageURL} alt="img" className="h-10"/>
                    // <Image alt="img" width={24} height={24} src={imageURL} />
                }
            </div>
        </div>
    )
}