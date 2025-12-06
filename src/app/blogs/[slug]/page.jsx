import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingleBlog(){
    const tempTags = "SpaceX, Nasa, Exploration"
    const tempHtml = `<p>Demo Content</p>
    <h2>Demo Heading</h2>
    `
    return (
        <section>
            <div className="flex flex-col gap-5 items-center py-2 ">
                <Image className="rounded shadow shadow-zinc-600 w-[90%] md:w-[700px]" src={"https://miro.medium.com/1*7XkV_Y7RIq3u-gbbTMTBRg.png"} width={600} height={300} alt="Blog Cover Image"/>
                <div className="meta-of-a-blog space-y-2">
                    <div className="flex gap-2 items-center">
                        <Calendar className="text-gray-400 size-4"/>
                        <p className="text-gray-400 text-xs">Created on: {dateFormat(new Date())}</p>
                    </div>
                    <div className="text-xs flex items-center gap-2">
                        <p>Categories:</p>
                        <p className="badge bg-gray-600/30 border border-gray-600 w-fit px-2 py-1 rounded">Space exploration</p>
                    </div>
                    <div className="text-xs flex items-center gap-2">
                        <p>Tags:</p>
                        {
                            tempTags.split(",").map((tag,index) =>(
                                <p className="badge font-bold bg-gray-600/30 border border-gray-600 w-fit px-2 py-1 rounded" key={index}>{tag}</p>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="content" dangerouslySetInnerHTML={{__html:tempHtml}}></div> */}
                <div className="w-[90%] md:w-2/3" >
                    <p className="text-sm text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        <br/>
                        Reiciendis, dolorem deleniti rem magnam rerum optio officia animi quis ducimus architecto? Doloribus, suscipit perferendis ratione iure quidem obcaecati eaque totam ipsa vel impedit eveniet numquam officiis quo et ducimus quisquam sed consectetur pariatur eius ipsum mollitia. Deleniti, perspiciatis? Aperiam delectus repellendus natus, quod blanditiis accusamus placeat numquam molestiae possimus vero, exercitationem corporis voluptatum. 
                        <br/>
                        Eum soluta fuga iste, id ullam aspernatur consectetur omnis facilis porro eveniet nemo nam distinctio quasi nesciunt dignissimos praesentium molestias accusantium at. Veritatis, eum ratione labore eaque possimus cupiditate aliquam at dolorem! Dicta, quibusdam! Dolores necessitatibus nihil quas illum praesentium aliquam, obcaecati suscipit consequuntur eos doloribus deserunt repellendus porro deleniti sunt ex corporis quia illo a nostrum, cum quis provident non amet. Fugiat eveniet eaque beatae aspernatur culpa! Dignissimos voluptate quasi, iusto totam dolor illo sit ullam accusamus. Labore, autem nostrum voluptatem fugiat pariatur sit dolore sed odio! Mollitia eaque, suscipit porro recusandae explicabo voluptatem aperiam animi. Iure quod soluta enim perspiciatis officia labore distinctio corporis repellat accusamus laudantium beatae quas optio vel aperiam, facilis ipsum consequatur! Harum impedit rem sequi quae modi illo aliquid similique quia quasi saepe sunt, eius aperiam at explicabo, consequatur ab. Sit repellat cumque amet? Unde molestiae consequatur assumenda eius mollitia, laborum ut nihil asperiores voluptatum nulla suscipit error deserunt sit voluptatem. Itaque doloribus, aperiam, possimus ab repellat repellendus blanditiis illum dolores delectus amet saepe quaerat quibusdam enim ratione placeat ipsam vero assumenda dolore laborum vel architecto doloremque perspiciatis aspernatur consequuntur. 
                        <br/>
                        Voluptatibus doloremque exercitationem numquam perspiciatis saepe autem enim, aut aspernatur corporis debitis nemo sed totam repellendus aliquam cupiditate eaque? Itaque possimus in tempora deleniti consequatur hic voluptatum, ut numquam voluptate quod, id esse labore, vitae maiores molestias consectetur similique enim praesentium laudantium beatae aspernatur! Fugit quis inventore, nisi cupiditate laboriosam at totam.
                    </p>
                </div>
            </div>
        </section>
    )
}