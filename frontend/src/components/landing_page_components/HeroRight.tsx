import { top_jobs_data } from "../../../data/top_jobs"


export default function HeroText() {
  return (
    <section className="h-fit w-full rounded-lg bg-[#FAF9F6] text-white  max-w-112.5 font-monument ">
      <div className="flex flex-row gap-2 rounded-t-lg bg-[#191A19] px-2 py-3 md:gap-3 md:px-3 md:py-3">

        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="size-2 shrink-0 rounded-full bg-[#363836] md:size-4  "
          />
        ))}
      </div>

      <div className="flex flex-col gap-5 px-2 py-5 font-monument md:gap-3 md:px-4 md:py-6">


        {top_jobs_data.map((job, i) => (
          <div key={i} className="flex  w-full flex-row items-center gap-2 rounded-lg border-[2px] border-gray-300 p-2 text-black md:gap-4 md:p-2 ">
            <div
              style={{
                backgroundColor: job.logo_bg
              }}
              className="size-9 shrink-0 rounded-md  md:size-12.5 " />

            <h3 className="shrink-0 font-semibold text-base md:text-lg text-[#525252] ">
              {job.company_name}
            </h3>

            <span className="size-1 shrink-0 rounded-full bg-black"></span>

            <p className="min-w-0 flex-1 truncate text-xs md:text-base text-[#5a5a5a]  ">
              {job.job}
            </p>

            <button
              style={{
                borderColor: job.button_color,
                color: job.button_color
              }}
              className={`shrink-0 cursor-pointer rounded-lg border-[1.5px]
            px-2 py-1 text-xs font-semibold  md:px-3 md:py-1.5 md:text-sm tracking-wider`} >
              Offer!
            </button>
          </div>
        ))}


      </div>
    </section>
  );
}