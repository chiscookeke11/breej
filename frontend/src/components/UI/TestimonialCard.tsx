import type { Testimonial_Interface } from "../../../types/type";
import { Star } from "lucide-react";

type TestimonialCardProps = {
    testimonial: Testimonial_Interface;
};


export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div
            style={{
                rotate: `${testimonial.tilt}deg`,
            }}
            className=" w-full max-w-[581px] min-h-[230px] md:min-h-[280px] bg-white rounded-[44.62px]
         p-[18px] md:p-[26.77px] gap-[13px] md:gap-[26.77px] border-2 border-[#003C3C]
         flex flex-col items-start  justify-start
         "
        >
            <div className="w-full flex items-center justify-start gap-[16.73px] ">
                <img
                    src={testimonial.image}
                    alt="user-image"
                    height={500}
                    width={500}
                    className=" size-[45px] md:size-[66.93px] rounded-full "
                />

                <div className="space-y-[1px] ">
                    <h3 className="text-[#272927] text-lg! md:text-[27px]! font-extrabold font-times ">
                        {" "}
                        {testimonial.name}{" "}
                    </h3>
                    <h4 className="text-[#666666] text-base! md:text-lg! font-monument ">
                        {testimonial.role}
                    </h4>
                </div>
            </div>

            <p className="text-[#272927] font-normal! text-sm! md:text-lg! font-monument ">
                {testimonial.message}
            </p>

            <div className="w-full flex items-center justify-start gap-[8.92px] text-xs! md:text-[17.85px] text-[#666666] ">

                {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                        key={index}
                        size={20}
                        fill="#FF8A00"
                        color="#FF8A00"
                    />
                ))}

            </div>
        </div>
    );
}
