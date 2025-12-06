import Image from "next/image";
import Link from "next/link";

const blogConfig = [
    {
        title:"ReactJS vs NextJS",
        excerpt:"NextJS is the ultimate development framework ....",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*QSSkbuPnh7HZArGaOlogbg.png",
        url: `/blogs`
    },
    {
        title:"Dreams to be a Remote Developer",
        excerpt:"Get a job as a remote developer ....",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCbPRAGd9eYRJMGptO2SnKJLiiHbMd-wa6w&s",
        url: `/blogs`
    },
    {
        title:"Become a backend dev in no time",
        excerpt:"how to become a backend developer in 2025 ....",
        image:"https://miro.medium.com/1*7XkV_Y7RIq3u-gbbTMTBRg.png",
        url: `/blogs`
    },
]

export default function Blogs(){
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
            {
                blogConfig.map((e,i)=>(
                    <div key={i} className="flex text-center shadow shadow-zinc-700 hover:shadow-2xl hover:shadow-zinc-600 flex-col rounded-lg p-1">
                        <Image src={e.image} width={300} height={150} alt="Image" className="shadow rounded-md shadow-zinc-800 w-full"/>
                        <h2 className="mx-1 mt-2 font-bold">{e.title}</h2>
                        <p className="mx-1 text-gray-500 text-[14px]">{e.excerpt}
                            <Link href={`${e.url}/title=${e.title}&&id=${i}`} className="text-zinc-400 hover:text-blue-500 hover:underline"> Read More</Link>
                        </p>
                    </div>
                ))
            }
        </section>
    )
}