import teamMembersData from "./data";

export default function TeamSection (){
    return(
        <section className="container">
            <h4 className="text-2xl mb-10 text-center">Nossos principais colaboradores</h4>
            <div className="grid justify-arround align-middle grid-cols-1 md:grid-cols-2 md:gap-x-0 lg:max-w-[90%] lg:m-auto lg:gap-10 xl:grid-cols-4 xl:gap-x-8 gap-8">
                {
                    teamMembersData.map((member) => {
                        return (
                            <div className="flex justify-center border-2 border-gray-300 items-center rounded-2xl flex-col w-80 lg:w-full xl:h-[480px] xl:w-auto m-auto" key={member.id}>
                                <div className="w-full rounded-t-2xl h-[60%]">
                                    <img className="h-auto rounded-t-2xl w-full md:h-[400px] xl:h-[250px] object-full" src={member.imageSrc} alt={member.imageAlt}></img>
                                </div>
                                <div className="text-center px-4 py-3 xl:h-full my-auto">
                                    <p className="font-semibold text-lg xl:text-">{member.name}</p>
                                    <p className="leading-6 xl:text-[0.9rem]">{member.description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}