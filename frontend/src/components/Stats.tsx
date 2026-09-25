import { stats_data } from "../../data/stats_data"



export default function StatsComponent() {
    return (
        <section className="w-full bg-[#ebf4f6] py-20 px-[4%] flex flex-col md:flex-row items-center justify-center
          text-center gap-14 md:gap-24 lg:gap-40 font-monument " >
            {
                stats_data.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center gap-1" >
                        <h2 className="text-5xl font-light md:text-[72px]   text-[#272927]  "> {stat.metric} </h2>
                        <h4 className="text-base md:text-lg " > {stat.subtext} </h4>
                    </div>
                ))
            }
        </section>
    )
}