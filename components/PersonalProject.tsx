type PersonalProjectProps = {
    title: string;
    description: string;
    img: string;
    technologies: { name: string, img: string }[];
}

export default function PersonalProject({ title, description, img, technologies }: PersonalProjectProps) {
    return (
        <div className="w-full p-8 flex flex-col shrink-0 bg-black/40">
            <div className="flex h-full">
                <div className="flex flex-col w-full">
                    <h3 className="text-5xl p-6 bg-white rounded-xl text-black">{title}</h3>
                    <img src={img} alt="project preview" className="w-full" />
                </div>
                <div className="h-full w-full">
                    <p className="text-2xl text-black">{description}</p>
                </div>
            </div>

            <div className="flex gap-[10%] w-full  justify-center-safe">
                {
                    technologies.map(tech => {
                        return (
                            <div className="w-30 h-1">
                                <div className="place-items-center bg-neutral-300">
                                    <img src={tech.img} alt={tech.name} className=" h-full rounded-3xl self-center" />
                                    <p className="text-3xl text-center text-black p-1 bg-white rounded-xl mt-3">{tech.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}