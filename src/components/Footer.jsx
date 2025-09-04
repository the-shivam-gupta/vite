import Contact from "./Contact";
import {
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    const icons = iconsRef.current.querySelectorAll("a");

    gsap.set(icons, { opacity: 0, y: 50 });

    gsap.to(icons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: iconsRef.current,
        start: "top 90%", // when icons are 90% into viewport
        end: "top 0%", // fully visible
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <footer className="w-full bg-black text-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-4">
            {/* Left Logo Block */}
            <div className="flex flex-col text-white">
              <span className="text-3xl font-extrabold tracking-tight leading-none">
                GROWTH
              </span>
              <span className="text-[10px] leading-0 text-end font-semibold tracking-widest mt-1">
                HOUSING
              </span>
            </div>

            {/* Divider Line */}
            <div className="h-12 w-px bg-white/70"></div>

            {/* Right Text Block */}
            <div className="flex flex-col text-[10px] uppercase tracking-widest text-white">
              {/* Top Line */}
              <span className="h-px w-10 bg-white mb-1"></span>

              {/* Text Block */}
              <div className="leading-tight">
                <div>THE</div>
                <div>HOUSE OF</div>
                <div>ABHINANDAN</div>
                <div>LODHA</div>
              </div>

              {/* Bottom Line */}
              <span className="h-px w-10 bg-white mt-1"></span>
            </div>
          </div>

          {/* Address */}
          <div className="mt-8 text-sm leading-relaxed">
            <p className="font-semibold text-lg tracking-tight transform scale-y-125">
              Corporate office –
            </p>
            <p className="mt-6 font-medium tracking-tight leading-4 transform scale-y-130">
              4<sup>th</sup> Floor, Lodha Excelus, Apollo Mills Compound, <br />
              NM Joshi Marg, Mahalaxmi, Mumbai – 400011
            </p>
            {/* Social Icons */}
            <div
              ref={iconsRef}
              className="flex gap-6 mt-18 text-gray-500"
            >
              <a className="hover:text-gray-600 transition ease-in-out">
                <Instagram size={34} />
              </a>
              <a className="hover:text-gray-600 transition ease-in-out">
                <Youtube size={34} />
              </a>
              <a className="hover:text-gray-600 transition ease-in-out">
                <Linkedin size={34} />
              </a>
              <a className="hover:text-gray-600 transition ease-in-out">
                <Facebook size={34} />
              </a>
              <a className="hover:text-gray-600 transition ease-in-out">
                <MessageCircle size={34} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide">
            Get In Touch
          </h2>

          <div className="mt-6">
            <Contact />
          </div>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="mt-[15rem] text-center text-xs sm:text-sm md:text-xl tracking-tight font-medium transform scale-y-125 text-zinc-500">
        2025 - © HOUSE OF ABHINANDAN LODHA PRIVATE LIMITED
      </div>
    </footer>
  );
};

export default Footer;
