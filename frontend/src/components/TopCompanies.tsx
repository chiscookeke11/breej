import { top_companies_data } from "../../data/top_companies_data"


export default function TopCompanies() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-3 py-20 px-[5%] md:py-48 " >

            <h1 className=" text-[#272927] font-bold font-times text-3xl md:text-6xl text-center max-w-172.5 leading-[120%]  "  >Today's top companies are hiring</h1>

            <p className="text-center max-w-160 font-monument text-base md:text-lg font-normal text-[#272927]  " >
                We partner with top US companies from early-stage startups to Fortune
                500 companies to bring the best jobs in tech and finance to you.</p>

            <div className=" w-full max-w-7xl  mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center justify-center gap-4  " >



                {
                    top_companies_data.map((company, i) => (
                        <div key={i} className=" p-2.5 md:p-3 flex flex-col items-start justify-between
                           w-full rounded-xl gap-5 border border-black/25 font-monument text-[#272927] " >

                            <div className="w-full flex items-center justify-between gap-6 " >
                                <div className="space-y-0.5 " >
                                    <h4 className=" font-bold text-base md:text-lg tracking-wide " > {company.job_title} </h4>
                                    <h6 className=" font-light text-sm md:text-base tracking-wide " > {company.company_name} </h6>
                                </div>

                                <img
                                    src={company.company_logo}
                                    alt={`${company.company_logo}-logo`}
                                    className=" size-10 md:size-14 shrink-0 "
                                />
                            </div>

                            <p className="text-[#757575] font-light text-sm md:text-base tracking-wide" > {company.mode} </p>

                        </div>
                    ))
                }

            </div>
        </section>
    )
}