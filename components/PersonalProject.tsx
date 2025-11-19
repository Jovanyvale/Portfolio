type PersonalProjectProps = {
    title: string;
    description: string;
    img: string;
    technologies: { name: string, img: string }[];
}

export default function PersonalProject({ title, description, img, technologies }: PersonalProjectProps) {

    return (
        <div className="p-8 bg-white w-auto rounded-2xl shadow-black/60 shadow-lg border-4 border-[#4B2814]">
            <h3 className="text-5xl text-[#4B2814] p-2 bg-white rounded-2xl font-semibold text-center mb-5">{title}</h3>

            <div className="flex gap-4 mb-6">
                <div className="w-full justify-items-center relative">
                    <img src={img} alt={title} className="h-210 w-230 object-cover rounded-2xl object-top" />
                    <div className="absolute flex flex-col inset-0 w-full h-full lg:opacity-0 hover:opacity-100 bg-black/70 rounded-2xl transition duration-500 justify-around items-center text-center p-[5%]">
                        <p className="text-2xl lg:text-3xl">{description}</p>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex gap-3 w-auto h-15 bg-white py-2 px-4 rounded-full">
                                <img src="assets/icons/link.svg" alt="Link to site" className="max-w-[30%]" />
                                <a href="https://tekzone-phi.vercel.app" target="blank"
                                    className="text-lg lg:text-3xl text-black self-center ">Visit Site</a>
                            </div>
                            <div className="flex gap-3 w-auto h-15 bg-white py-2 px-4 rounded-full">
                                <img src="assets/icons/github.svg" alt="Link to github repo" className="max-w-[30%]" />
                                <a href="" target="blank" className="text-lg lg:text-3xl text-black self-center">Visit Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-10 content-center justify-center-safe columns-3">
                {
                    technologies.map(tech => {
                        return (
                            <div className="w-20 rounded-2xl p-3 h-auto bg-linear-to-t from-[#4B2814]/15 to-neutral-100">
                                <img src={tech.img} alt={tech.name} className="rounded-xl drop-shadow-sm" />

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}