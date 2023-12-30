import Image from "next/image"

type Blog = {
    img?: string,
    topic: string,
    body: string,
    download?: boolean,
}

type Card = {
    msg: string,
    pfp: string,
    job: string,
    name: string,
}

const blogs: Blog[] = [
    {
        img: "/blog-placeholder.jpg",
        topic: "ebook",
        body: "How to create your first marketing dashboard",
    }, {
        topic: "ebook",
        body: "How to create your first marketing dashboard",
        download: true,
    }, {
        topic: "ebook",
        body: "How to create your first marketing dashboard",
        download: true,
    }
];

const testies: Card[] = [
    {
        msg: "I didn’t have the time or expertise to undertake marketing. Kalungi has a very well thought out approach… and the fact that you can get their team on a fractional basis is unbelievable.”",
        pfp: "/fake-pfp.png",
        job: "Co-founder, Kalungi",
        name: "Shivansh Kalra",
    }, {
        msg: "I didn’t have the time or expertise to undertake marketing. Kalungi has a very well thought out approach… and the fact that you can get their team on a fractional basis is unbelievable.”",
        pfp: "/fake-pfp.png",
        job: "Co-founder, Kalungi",
        name: "Shivansh Kalra",
    }, {
        msg: "I didn’t have the time or expertise to undertake marketing. Kalungi has a very well thought out approach… and the fact that you can get their team on a fractional basis is unbelievable.”",
        pfp: "/fake-pfp.png",
        job: "Co-founder, Kalungi",
        name: "Shivansh Kalra",
    },
]

export default () => {
    return <div className="h-[200%] flex flex-col">
        <div className="basis-3/6 bg-gray-100 flex flex-col gap-2 justify-center items-center">
            <div className="text-blue-600 font-bold">
                BLOG
            </div>
            <div className="text-3xl font-extrabold mb-5">
                Read our latest news
            </div>
            <div className="flex gap-5">
                <div>
                    <Blog {...blogs[0]} />
                </div>
                <div className="flex flex-col justify-between h-full gap-3">
                    <div className="basis-1/2">
                        <Blog {...blogs[1]} />
                    </div>
                    <div className="basis-1/2">
                        <Blog {...blogs[2]} />
                    </div>
                </div>
            </div>
        </div>
        <div className="basis-2/6 p-20 flex flex-col justify-center gap-3">
            <div className="uppercase font-bold text-blue-600">
                testimonials
            </div>
            <div className="font-extrabold text-3xl">
                What our customers say
            </div>
            <div className="flex w-full h-full p-5 pt-8 justify-center items-center gap-10">
                {
                    testies.map(testy => <Card {...testy} />)
                }
            </div>
        </div>
        <div className="basis-1/6 bg-gray-100 flex flex-col justify-between items-center p-10 gap-5">
            <div className="uppercase text-blue-600 font-bold">
                start converting today
            </div>
            <div className="font-extrabold text-3xl">
                One tool for all your metrics
            </div>
            <div className="flex gap-8">
                <button className="py-3 px-5 bg-blue-500 text-white font-bold rounded-md text-sm">
                    GET A DEMO
                </button>
                <button className="py-3 px-5 border-[2px] border-blue-500  text-blue-600 hover:bg-blue-500 hover:text-white transition-all rounded-md font-bold text-sm">
                    TRY FOR FREE
                </button>
            </div>
        </div>
    </div>
}

function Card(props: Card) {
    return <div className="h-full border p-8 rounded-2xl shadow-lg flex flex-col gap-5">
        <Image src="/quote.svg" alt="quote" width={42} height={35} />
        <div className="font-medium">
            {props.msg}
        </div>
        <div className="flex items-center gap-3">
            <Image
                src="/fake-pfp.png"
                alt="someone"
                width={55}
                height={55}
                className="rounded-[100%] "
            />
            <div>
                <div className="uppercase font-bold text-blue-600 text-sm">
                    {props.job}
                </div>
                <div className="text-lg font-bold">
                    {props.name}
                </div>

            </div>
        </div>
    </div>
}

function Blog(props: Blog) {
    return <div className="h-full shadow-lg rounded-xl">
        {
            props.img &&
            <Image
                src={props.img}
                alt="blog img"
                width={500}
                height={200}
                className="rounded-ss-xl rounded-se-xl"
            />
        }
        <div className={`bg-white px-4 py-5 flex flex-col gap-1 justify-center rounded-xl ${props.img ? "rounded-ss-none rounded-se-none" : "h-full"}`}>
            <div className="uppercase text-blue-600 font-bold">
                {props.topic}
            </div>
            <div className="font-bold">
                {props.body}
            </div>
            {
                props.download &&
                <button className="w-fit font-medium">
                    DOWNLOAD
                </button>
            }
        </div>
    </div>
}