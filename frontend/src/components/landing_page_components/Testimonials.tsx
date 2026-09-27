import { testimonial_data } from "../../../data/testimonials"
import TestimonialCard from "../UI/TestimonialCard"


export default function Testimonials() {
    return (
        <section className="w-full bg-white py-40 flex items-center justify-center relative flex-col  "  >



            <div className=" h-screen sticky top-0 flex items-center justify-center w-full " >
                <h1 className="text-[8em]! lg:text-[17em]! font-bold text-[#003C3C] font-times ">
                    Breej
                </h1>
            </div>

            {
                testimonial_data.map((t, i) => (
                    <div
                        key={i}
                        className="w-full h-screen flex items-center justify-center sticky top-0 px-[4%] "
                    >
                        <TestimonialCard testimonial={t} />
                    </div>
                ))
            }

        </section>
    )
}