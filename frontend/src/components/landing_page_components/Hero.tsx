import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="flex min-h-[50vh]  flex-col items-center justify-center gap-10 px-[5%] py-20 md:flex-row  md:py-48">
      {/* LEFT SIDE */}
      <div className="w-full max-w-155 flex flex-col gap-6 text-center md:text-left  ">
        <h1 className="text-5xl font-bold md:text-[80px] font-times  text-[#272927]  ">
          <span className="block">Where jobs</span>
          <span className="block">find you.</span>
        </h1>

        <p className="font-monument text-lg  text-[#272927] max-w-120 ">
          Untapped is a recruiting platform where candidate find jobs{" "}
          and get hired by the world's top tech companies.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className=" w-full max-w-155 flex items-center justify-center  " >
        <HeroRight />
      </div>
    </section >
  );
}
