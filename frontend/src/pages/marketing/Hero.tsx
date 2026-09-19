import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-8 py-10 md:flex-row md:justify-around md:py-8">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 text-center md:text-left md:gap-10">
        <h1 className="font-monument text-6xl font-medium md:text-[9.5rem]">
          Where jobs
          <br />
          find you.
        </h1>

        <p className="font-times text-md font-medium md:text-3xl">
          Untapped is a recruiting platform where candidate find
          <br />
          jobs and get hired by the world's top tech companies.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <HeroRight />
      </div>
    </section>
  );
}
