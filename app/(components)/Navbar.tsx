import { NavLinks } from "@/types"
import { link } from "fs";
import Image from "next/image";

type Links = {
    [index in NavLinks]: string
}

export default function Navbar() {
    const links: Links = {
        product: "",
        pricing: "",
        resources: "",
        blog: "",
        about: "",
    };

    return <nav className="fixed z-50 w-full flex items-center justify-between ps-[8rem] max-xl:ps-2 pe-[8rem] max-xl:pe-2 shadow-lg shadow-gray-300">
        <div className="flex items-center gap-10 max-xl:gap-8">
            <Image
                src={"/logo.svg"}
                alt="logo"
                width={150}
                height={150}
                className="pt-2"
            />
            {
                Object.entries(links).map(link => {
                    return <div className="uppercase font-semibold cursor-pointer select-none">
                        <a>{link[0]}</a>
                    </div>
                })
            }
        </div>
        <div className="flex gap-5 items-center">
            <button className="uppercase font-semibold p-1 rounded-md h-fit">sign in</button>
            <button className="uppercase font-semibold text-white bg-blue-600 p-3 ps-5 pe-5 rounded-md">get a demo</button>
        </div>
    </nav>
}