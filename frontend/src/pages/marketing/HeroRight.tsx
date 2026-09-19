
export default function HeroText() {
  return (
    <section className="h-fit w-full rounded-b-lg bg-[#FAF9F6] text-white md:w-[24vw]">
      <div className="flex flex-row gap-2 rounded-tl-lg rounded-tr-lg bg-black px-2 py-3 md:px-3 md:py-5">
        {/* FIRST CIRCLE */}
        <div className="h-4 w-4 shrink-0 rounded-full bg-gray-500 md:h-6 md:w-6"></div>

        {/* SECOND CIRCLE */}
        <div className="h-4 w-4 shrink-0 rounded-full bg-gray-500 md:h-6 md:w-6"></div>

        {/* THIRD CIRCLE */}
        <div className="h-4 w-4 shrink-0 rounded-full bg-gray-500 md:h-6 md:w-6"></div>
      </div>

      <div className="flex flex-col gap-5 px-6 py-8 md:py-14">
        {/* FIRST BOX */}
        <div className="flex min-w-0 flex-row items-center gap-3 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-7 md:px-4 md:py-4">
          <div className="h-12 w-12 shrink-0 rounded-md bg-red-400 md:h-16 md:w-16"></div>

          <h3 className="shrink-0 font-bold md:text-4xl">Airbnb</h3>

          <span className="h-1 w-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-base md:text-2xl">
            Congrates! ...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-green-600 px-3 py-1 font-semibold text-green-600 md:text-2xl md:hover:bg-green-500 md:hover:text-white">
            Offer!
          </button>
        </div>

        {/* SECOND BOX */}
        <div className="flex min-w-0 flex-row items-center gap-3 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-7 md:px-4 md:py-4">
          <div className="h-12 w-12 shrink-0 rounded-md bg-blue-400 md:h-16 md:w-16"></div>

          <h3 className="shrink-0 font-bold md:text-4xl">Dropbox</h3>

          <span className="h-1 w-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-base md:text-2xl">
            We saw ...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-blue-400 px-3 py-1 font-semibold text-blue-400 md:text-2xl md:hover:bg-blue-500 md:hover:text-white">
            Offer!
          </button>
        </div>

        {/* THIRD BOX */}
        <div className="flex min-w-0 flex-row items-center gap-3 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-7 md:px-4 md:py-4">
          <div className="h-12 w-12 shrink-0 rounded-md bg-pink-500 md:h-16 md:w-16"></div>

          <h3 className="shrink-0 font-bold md:text-4xl">Lyft</h3>

          <span className="h-1 w-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-base md:text-2xl">
            Hi Alicia! I'm Ka...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-pink-600 px-3 py-1 font-semibold text-pink-500 md:text-2xl md:hover:bg-pink-500 md:hover:text-white">
            Offer!
          </button>
        </div>
      </div>
    </section>
  );
}

