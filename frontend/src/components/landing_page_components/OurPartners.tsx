import { partner_data } from "../../../data/partners_data"



export default function OurPartners() {





  return (
    <section className="h-fit w-full overflow-hidden bg-[#003C3C] px-4 py-12 md:py-20 gap-7 flex items-center justify-center flex-col ">
      <h2 className="py-2 text-center text-base md:text-[20px] font-medium text-white md:py-6  font-monument ">
        Our Partners
      </h2>

      <div className="partner-marquee w-full " aria-label="Our partners">
        <div className="partner-marquee__track">
          {partner_data.map((partner, index) => (
            <span
              title={partner.partner_name}
              aria-label={partner.partner_name}
              className="partner-marquee__item text-white"
              key={index}
            >

              <img
                src={partner.partner_logo}
                alt={`${partner.partner_name}-logo`}
                className="w-full max-w-[150px] md:max-w-[220px] h-auto "
              />

            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
