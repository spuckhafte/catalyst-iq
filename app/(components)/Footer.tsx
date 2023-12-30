import Image from "next/image";

type Field = {
    id: number,
    name: string,
    links: [linkName: string, linkLocation: string][],
};

const fields: Field[] = [
    {
        id: 1,
        name: "product",
        links: [
            ["login", ""],
            ["overview", ""],
            ["feedback", ""],
            ["meetings", ""],
            ["action items", ""],
        ]
    }, {
        id: 2,
        name: "product",
        links: [
            ["login", ""],
            ["overview", ""],
            ["feedback", ""],
            ["meetings", ""],
            ["action items", ""],
        ]
    }, {
        id: 3,
        name: "product",
        links: [
            ["login", ""],
            ["overview", ""],
            ["feedback", ""],
            ["meetings", ""],
            ["action items", ""],
        ]
    }, {
        id: 4,
        name: "product",
        links: [
            ["login", ""],
            ["overview", ""],
            ["feedback", ""],
            ["meetings", ""],
            ["action items", ""],
        ]
    },
]

export default function Footer() {
    return <div className="h-[70%] bg-black text-white flex flex-col justify-center items-center">
        <div className="basis-5/6 pt-[6rem] px-[15rem] pb-[6rem] w-full flex justify-between">
            <div className="w-fit h-full flex flex-col justify-between">
                <div className="text-3xl font-extrabold">
                    Logo
                </div>
                <div>
                    Company <br></br>
                    1234 5th AVE N. <br></br>
                    Seattle, WA 98101 <br></br>
                </div>
                <div className="flex gap-5">
                    <Image
                        src="/fb.svg"
                        alt="fb"
                        width={11}
                        height={21}
                        className="cursor-pointer"
                    />
                    <Image
                        src="/insta.svg"
                        alt="insta"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                    />
                    <Image
                        src="/x.svg"
                        alt="x"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                    />

                </div>
            </div>
            <div className="flex gap-10">
                {
                    fields.map(field => {
                        return <div className="flex  flex-col justify-between " key={field.id}>
                            <div className="font-bold capitalize">
                                {field.name}
                            </div>
                            {
                                field.links.map((fieldLink, i) => {
                                    return <div
                                        className="capitalize cursor-pointer select-none"
                                        key={i}
                                    >
                                        <a>{fieldLink}</a>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
        <div className="flex gap-10">
            <div>
                © 2021 Company. All rights reserved.
            </div>
            <div>
                Privacy Policy
            </div>
        </div>
    </div>
}