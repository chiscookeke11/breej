import { Link } from "react-router-dom"
import { footer_navigation_links, social_links } from "../../../data/footer_links"
import { IonIcon } from "@ionic/react";



export default function Footer() {
    return (
        <footer className="bg-[#ebf4f6] w-full flex flex-col items-start justify-center gap-10 md:gap-50 py-8 md:py-16 px-[4%] md:px-[13%] font-monument " >
            <ul className=" self-end flex flex-row md:items-center justify-end gap-5 md:gap-10 text-[#272927] " >

                {
                    social_links.map((social, i) => (
                        <li key={i}>
                            <Link to={social.path} className="tracking-wide font-medium text-base md:text-lg bg-gray-200 hover:bg-gray-300 transition-all duration-200 ease-in-out size-9
                             flex items-center justify-center rounded-full " >
                                <IonIcon icon={social.icon} color="#272927" />
                            </Link>
                        </li>
                    ))
                }

            </ul>



            <ul className=" flex flex-col md:flex-row md:items-center justify-start gap-5 md:gap-10 text-[#272927] " >

                {
                    footer_navigation_links.map((l, i) => (
                        <li key={i}>
                            <Link to={l.path} className="tracking-wide font-medium text-sm md:text-lg " > {l.label} </Link>
                        </li>
                    ))
                }

            </ul>
        </footer>
    )
}