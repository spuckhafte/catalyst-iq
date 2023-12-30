import Image from "next/image"

type Card = {
    id: number,
    type: "basic" | "pro" | "enterprise",

    price: string,
    perMonth?: boolean,

    text1: string,
    text2: string,
    features: string[],

    mostPopular?: boolean,
}

const pricings: Card[] = [
    {
        id: 1,
        type: "basic",
        price: "$30",
        perMonth: true,
        text1: "Flat fee for up to 200 users",
        text2: "Set the foundation with all your team needs for basic data integrations.",
        features: [
            "Up to 200 users",
            "Up to 35 automatic data pushes",
            "Limited access to T2D3 API",
            "Assign user-level permissions",
            "3 solution templates",
        ],
    }, {
        id: 2,
        type: "pro",
        price: "$90",
        perMonth: true,
        text1: "Flat fee for up to 200 users",
        text2: "Set the foundation with all your team needs for basic data integrations.",
        features: [
            "Up to 200 users",
            "Up to 35 automatic data pushes",
            "Limited access to T2D3 API",
            "Assign user-level permissions",
            "3 solution templates",
            "Up to 200 users",
            "Up to 35 automatic data pushes",
            "Limited access to T2D3 API",
            "Assign user-level permissions",
            "3 solution templates",
        ],
        mostPopular: true,
    }, {
        id: 3,
        type: "enterprise",
        price: "Custom",
        text1: "Flat fee for up to 200 users",
        text2: "Set the foundation with all your team needs for basic data integrations.",
        features: [
            "Up to 200 users",
            "Up to 35 automatic data pushes",
            "Limited access to T2D3 API",
            "Assign user-level permissions",
            "3 solution templates",
        ],
    },
]

export default function Pricing() {
    return <div className="h-[140%] flex flex-col justify-center items-center gap-3 mb-8">
        <div className="uppercase font-bold text-blue-600">
            pricing
        </div>
        <div className="font-bold text-3xl pb-10">
            Select your plan and enjoy
        </div>
        <div className="flex gap-[4rem] px-[6rem]">
            {pricings.map(pricing => <Card {...pricing} key={pricing.id} />)}
        </div>
    </div>
}

function Card(props: Card) {
    return <div className="border shadow-xl rounded-lg h-fit px-8 flex flex-col items-center">
        {
            props.mostPopular &&
            <div>
                <button className="bg-slate-100 px-8 py-2 rounded-3xl font-bold transform translate-y-[-50%]">
                    Most Popular
                </button>
            </div>
        }
        <div className={`${!props.mostPopular ? "pt-10" : ""} pb-5 text-md capitalize  font-bold`}>
            {props.type}
        </div>
        <div className="text-blue-600 font-bold flex items-end pb-5">
            <div className="text-4xl">
                {props.price}
            </div>
            {
                props.perMonth &&
                <div className="pb-[0.15rem]">
                    /mo
                </div>
            }
        </div>
        <div className="font-medium pb-5 text-center">
            {props.text1}
        </div>
        <div className="font-medium pb-5 text-center">
            {props.text2}
        </div>
        <div className="h-[2px] w-full bg-slate-100 mb-5"></div>
        <div className="w-full flex flex-col gap-3 pb-[3.5rem]">
            {
                props.features.map((feat, i) => {
                    return <div className="flex gap-3" key={i}>
                        <Image
                            src="/pricing-tick.svg"
                            alt="tick"
                            width={15}
                            height={15}
                        />
                        <div className="font-medium">
                            {feat}
                        </div>
                    </div>
                })
            }
        </div>
        <button className="w-full py-3 bg-blue-600 text-white mb-8 rounded-md font-bold">
            GET STARTED
        </button>
    </div>
}