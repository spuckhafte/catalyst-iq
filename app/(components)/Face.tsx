import Image from "next/image"

export default () => {
    return <div className="flex justify-between items-center px-[5rem] h-full">
        <div className="flex flex-col basis-1/3 gap-10 ps-8 pb-5">
            <div className="text-5xl font-extrabold">
                All your marketing metrics in one place
            </div>
            <div className="text-lg font-medium">
                Visualize your marketing campaigns with concrete metrics that you can pull into any report or presentation.
            </div>
            <div className="flex gap-7">
                <button className="px-5 py-3 bg-blue-500 text-white uppercase font-bold rounded-md">
                    get started
                </button>
                <button className="p-1 font-bold uppercase">
                    learn more
                </button>
            </div>
        </div>

        <div className="basis-2/3 flex justify-center items-center">
            <Image 
                src={"/Dashboard.svg"}
                alt="dashboard"
                width={900}
                height={500}
            />
        </div>
    </div>
}