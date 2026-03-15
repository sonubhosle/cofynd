import Image from "next/image"
import { SectionHeader } from "./SectionHeader"

const newsMedia = [
    { "media": "https://cofynd.com/assets/images/newsLogo/your-story.png" },
    { "media": "https://cofynd.com/assets/images/newsLogo/the-statesman.png" },
    { "media": "https://cofynd.com/assets/images/newsLogo/et-prime.png" },
    { "media": "https://cofynd.com/assets/images/newsLogo/daily-hunt.png" },
    { "media": "https://cofynd.com/assets/images/newsLogo/inc42.png" },
    { "media": "https://cofynd.com/assets/images/newsLogo/tech-circle.png" },
]

export const NewsMedia = () => {
    return (
        <div className="py-8 px-6 w-full">
            <SectionHeader highlight={'CoFynd'} rest={'in the News'} />
            <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
                {
                    newsMedia.map((news, indx) => (
                        <Image key={indx} src={news.media} alt="Media Logo" width={150} height={60} className="object-contain" />
                    ))
                }
            </div>
            <div className=" py-10 pt-20 flex items-center justify-center flex-col">
                <Image src="https://img.cofynd.com/images/latest_images_2024/32f79af3c08e7b594f25c03f8af6c4c9f1f6ab3e.webp" alt="Founder" width={300} height={300} className="object-contain" />
                <h1 className="text-2xl font-semibold text-slate-900 pt-4">What's the CoFynd Desk?</h1>
                <p className="text-slate-600 max-w-4xl py-3 text-center">
                    CoFynd is helping professionals find their perfect WorkSpace, Living Space & Everything in between.
                    As we grow, we think of ourselves as creating a shared Ecosystem, one that lets the Cofynd community Breathe, Connect and Climb to their highest in life.
                </p>
                <h2 className="text-xl font-semibold text-blue-600">Add Founder & CEO</h2>

            </div>
          
        </div>
    )
}