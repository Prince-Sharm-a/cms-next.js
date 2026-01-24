import Image from "next/image";
import Link from "next/link";

// const blogConfig = [
//     {
//         title:"ReactJS vs NextJS",
//         excerpt:"NextJS is the ultimate development framework ....",
//         image:"https://miro.medium.com/v2/resize:fit:1400/1*QSSkbuPnh7HZArGaOlogbg.png",
//         url: `/blogs`
//     },
//     {
//         title:"Dreams to be a Remote Developer",
//         excerpt:"Get a job as a remote developer ....",
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCbPRAGd9eYRJMGptO2SnKJLiiHbMd-wa6w&s",
//         url: `/blogs`
//     },
//     {
//         title:"Become a backend dev in no time",
//         excerpt:"how to become a backend developer in 2025 ....",
//         image:"https://miro.medium.com/1*7XkV_Y7RIq3u-gbbTMTBRg.png",
//         url: `/blogs`
//     },
// ]

const fetchAllBlogs = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`).then((data)=>data.json());
    return res;
}

export default async function Blogs(){
    const blogData = await fetchAllBlogs();
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
            {
                blogData.map((e,i)=>(
                    <BlogCard title={e.title} excerpt={e.excerpt} image={e.thumbnail} url={e.slug} key={e.id} />
                ))
            }
        </section>
    )
}

function BlogCard({ title, excerpt, image, url, id }){
    return (
        <div className="flex text-center shadow shadow-zinc-700 hover:shadow-2xl duration-300 hover:shadow-zinc-600 flex-col rounded-lg p-1">
            <Image unoptimized src={image} width={300} height={150} alt="Image" className="shadow rounded-md shadow-zinc-800 w-full"/>
            <h2 className="mx-1 mt-2 font-bold">{title}</h2>
            <p className="mx-1 text-gray-500 text-[14px]">{excerpt}
                <Link href={`/blogs/${url}`} className="text-zinc-400 hover:text-blue-500 hover:underline"> Read More</Link>
            </p>
        </div>
    )
}