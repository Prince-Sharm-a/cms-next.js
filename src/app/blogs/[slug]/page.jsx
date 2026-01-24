import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";
import "../../../style/blog.css";

const fetchSingleBlog = async (slug)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get/${slug}`).then(value => value.json());

    return res;
}

export async function generateMetadata({ params }){
    const { slug } = await params;
    const post = await fetchSingleBlog(slug);
    return {
        title: post.title,
        description: post.desc,
        openGraph:{
            images:[post.thumbnail]
        }
    }
}

export default async function SingleBlog({ params }){

    const { slug } = await params;
    const post = await fetchSingleBlog(slug);
    // console.log(post);

    const tempTags = "SpaceX, Nasa, Exploration"
    const tempHtml = `<p>Demo Content</p>
    <h2>Demo Heading</h2>
    `
    return (
        <section>
            <div className="flex flex-col gap-5 items-center py-2 px-4">
                {post.thumbnail && <Image unoptimized className="rounded shadow shadow-zinc-300 w-[90%] md:w-[700px]" src={post.thumbnail} width={600} height={300} alt={post.title}/>}
                <h1 className="text-2xl md:text-4xl font-bold">{post.title}</h1>
                <div className="meta-of-a-blog w-[90%] md:w-2/3 space-y-2">
                    <div className="flex gap-2 items-center">
                        <Calendar className="text-gray-400 size-4"/>
                        <p className="text-gray-400 text-xs">Created on: {dateFormat(post.createdAt)}</p>
                    </div>
                    <div className="text-xs flex items-center gap-2">
                        <p>Categories:</p>
                        <p className="badge bg-gray-600/30 border border-gray-600 w-fit px-2 py-1 rounded">{post.catSlug}</p>
                    </div>
                    { post.keywords && <div className="text-xs flex gap-2">
                        <p className="pt-1">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                            {
                                post.keywords.split(",").map((tag,index) =>(
                                    <p className="badge font-bold bg-gray-600/30 border border-gray-600 w-fit px-2 py-1 rounded flex-nowrap" key={index}>{tag}</p>
                                ))
                            }
                        </div>
                    </div>}
                </div>
                <div className="blogContent w-[90%] md:w-2/3 text-sm text-gray-300" dangerouslySetInnerHTML={{__html:post.content}}></div>
                {/* <div className="w-[90%] md:w-2/3" >
                    <p className="text-sm text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        <br/>
                        Reiciendis, dolorem deleniti rem magnam rerum optio officia animi quis ducimus architecto? Doloribus, suscipit perferendis ratione iure quidem obcaecati eaque totam ipsa vel impedit eveniet numquam officiis quo et ducimus quisquam sed consectetur pariatur eius ipsum mollitia. Deleniti, perspiciatis? Aperiam delectus repellendus natus, quod blanditiis accusamus placeat numquam molestiae possimus vero, exercitationem corporis voluptatum. 
                        <br/>
                        Eum soluta fuga iste, id ullam aspernatur consectetur omnis facilis porro eveniet nemo nam distinctio quasi nesciunt dignissimos praesentium molestias accusantium at. Veritatis, eum ratione labore eaque possimus cupiditate aliquam at dolorem! Dicta, quibusdam! Dolores necessitatibus nihil quas illum praesentium aliquam, obcaecati suscipit consequuntur eos doloribus deserunt repellendus porro deleniti sunt ex corporis quia illo a nostrum, cum quis provident non amet. Fugiat eveniet eaque beatae aspernatur culpa! Dignissimos voluptate quasi, iusto totam dolor illo sit ullam accusamus. Labore, autem nostrum voluptatem fugiat pariatur sit dolore sed odio! Mollitia eaque, suscipit porro recusandae explicabo voluptatem aperiam animi. Iure quod soluta enim perspiciatis officia labore distinctio corporis repellat accusamus laudantium beatae quas optio vel aperiam, facilis ipsum consequatur! Harum impedit rem sequi quae modi illo aliquid similique quia quasi saepe sunt, eius aperiam at explicabo, consequatur ab. Sit repellat cumque amet? Unde molestiae consequatur assumenda eius mollitia, laborum ut nihil asperiores voluptatum nulla suscipit error deserunt sit voluptatem. Itaque doloribus, aperiam, possimus ab repellat repellendus blanditiis illum dolores delectus amet saepe quaerat quibusdam enim ratione placeat ipsam vero assumenda dolore laborum vel architecto doloremque perspiciatis aspernatur consequuntur. 
                        <br/>
                        Voluptatibus doloremque exercitationem numquam perspiciatis saepe autem enim, aut aspernatur corporis debitis nemo sed totam repellendus aliquam cupiditate eaque? Itaque possimus in tempora deleniti consequatur hic voluptatum, ut numquam voluptate quod, id esse labore, vitae maiores molestias consectetur similique enim praesentium laudantium beatae aspernatur! Fugit quis inventore, nisi cupiditate laboriosam at totam.
                    </p>
                </div> */}
            </div> 
        </section>
    )
}