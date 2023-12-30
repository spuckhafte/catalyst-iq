import Image from "next/image"

const features = [
    {
        id: 1,
        icon: "/feat1.svg",
        name: "Reliable system",
        body: "From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
    }, {
        id: 2,
        icon: "/feat1.svg",
        name: "Reliable system",
        body: "From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
    }, {
        id: 3,
        icon: "/feat1.svg",
        name: "Reliable system",
        body: "From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
    }, {
        id: 4,
        icon: "/feat1.svg",
        name: "Reliable system",
        body: "From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
    },
]

export default function Features() {
    return <div className="h-[110%] flex flex-col">
        <div className="basis-[60%] bg-gray-100 flex flex-col items-center justify-center gap-5 px-20">
            <div className="uppercase text-blue-600 font-bold">
                powerful features
            </div>
            <div className="font-extrabold text-4xl ">
                Here’s all the good stuff
            </div>
            <div className="flex gap-10 pt-10">
                {
                    features.map(feat => {
                        return <div className="flex flex-col gap-3" key={feat.id}>
                            <Image src={feat.icon} alt={feat.icon} width={50} height={50}/>
                            <div className="font-extrabold capitalize">
                                {feat.name}
                            </div>
                            <div className="font-medium">
                                {feat.body}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className="basis-[40%] px-20 flex items-center justify-center">
            <div className="flex justify-between items-stretch">
                <div className="basis-1/3 flex flex-col gap-6">
                    <div className="font-bold text-blue-600">
                        OUR CLIENTS
                    </div>
                    <div className="text-3xl uppercase font-extrabold">
                        companies we've worked with
                    </div>
                    <div className="font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                </div>
                <div className="basis-2/3 flex flex-col items-end justify-between pt-6">
                    <div>
                        <Image
                            src={"/loved1.svg"}
                            alt="loved1"
                            width={700}
                            height={200}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/loved1.svg"}
                            alt="loved2"
                            width={700}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}