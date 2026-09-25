import { matters_data } from "../../data/matters_data_"

export default function WhatMatters() {
    return (
        <section className=" w-full  flex flex-col items-center justify-center gap-4 py-20 px-[5%] md:py-48 text-[#272927]" >
            <h2 className="font-times text-4xl md:text-[60px] font-semibold tracking-wider text-center w-full max-w-[650px] leading-[90%]  " >What matters to you matters to us.</h2>
            <p className="text-center font-monument text-sm md:text-base " >Salary. Benefits. Location. Everything you’re looking for.</p>

            <div className="w-full max-w-5xl mt-10 flex items-center justify-center flex-wrap gap-5 " >

                {
                    matters_data.map((matter, i) => (
                        <div key={i} className="bg-[#f4f4f4] p-2 md:p-4 rounded-md flex items-center justify-center gap-1.5 "  >
                            <img
                                src={matter.image}
                                alt="icon"
                                className=" size-[18px] md:size-6.25 shrink-0 border-none outline-none "
                            />
                            <h6 className="text-xs md:text-lg font-monument text-[#272927] " > {matter.title} </h6>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}