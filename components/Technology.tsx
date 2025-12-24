import { technologies } from "../data/technologies"

type technologies = {
    name: string
    img: string
}

export default function Technology({ name, img }: technologies) {

    return (
        <div className="bg-white flex flex-col gap-3 w-30 lg:w-50 h-auto content-center lg:p-5 p-2 rounded-2xl shadow-black/60 shadow-lg hover:scale-105 duration-150">
            <img src={img} alt={name} className="rounded-xl" />
            <p className=" bg-[#4B2814] p-2 rounded-xl w-full text-center lg:text-2xl text-md text-white place-self-center-safe">{name}</p>
        </div>
    )
}