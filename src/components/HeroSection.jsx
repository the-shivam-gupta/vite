import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets
import svg from "../assets/Growth-corridor.svg";
import bandraWorli from "../assets/circle/Bandra-Worli.webp";
import BulletTrain from "../assets/circle/Bullet-train.webp";
import img_1 from "../assets/circle/img_1.webp";
import metroLines from "../assets/circle/Metro-Lines.webp";
import mumbaiCoastalRoad from "../assets/circle/Mumbai-Coastal-Road.webp";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const chars = el.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { color: "#9ca3af" }, // gray-400
      {
        color: "#1f2937", // gray-900
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Split text into spans for animation
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
        What are growth corridors?
      </h1>

      {/* Animated paragraph */}
      <p
        ref={textRef}
        className="max-w-3xl mt-6 text-center text-base sm:text-lg leading-relaxed text-gray-600"
      >
        {splitText(
          "A Growth Corridor is not defined by geography alone — it is the intersection of momentum, infrastructure, and aspiration. It is where four powerful forces converge to create sustainable economic, social, and urban acceleration."
        )}
      </p>

      {/* Social ecosystem */}
      <h3 className="mt-10 text-xl sm:text-2xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
        A thriving social ecosystem
      </h3>
      <p className="max-w-2xl mt-3 text-center text-sm sm:text-base text-gray-500">
        Schools, hospitals, retail, entertainment, and housing that attract
        communities.
      </p>

      {/* Illustration */}
      <div className="mt-10 flex justify-center">
        <img
          src={svg}
          alt="Growth ecosystem"
          className="w-[22rem] sm:w-[32rem]"
        />
      </div>

      {/* Corridor headline */}
      <div className="mt-12 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Great Western Growth Corridor
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          The Great Western Corridor — stretching from Andheri to Virar — is one
          of India’s most defining urban growth frontiers. It is where Mumbai’s
          potential meets its future, supercharged by once-in-a-generation
          infrastructure investments.
        </p>
      </div>

      {/* Image slider */}
      <div className="relative w-full overflow-hidden mt-12">
        <motion.div
          className="flex gap-8 px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[bandraWorli, BulletTrain, img_1, metroLines, mumbaiCoastalRoad].map(
            (src, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-40 w-40 sm:h-56 sm:w-56 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="h-full w-full object-cover"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* Closing paragraph */}
      <p className="max-w-3xl mt-10 mb-12 text-center text-sm sm:text-base text-gray-600 leading-relaxed">
        With over a dozen major transport projects underway — from the Mumbai
        Coastal Road and Bandra–Versova Sea Link to the Mumbai–Ahmedabad Bullet
        Train — the Western Suburbs are being rewired for the 21st century. The
        Great Western Growth Corridor isn’t just a stretch of land. It’s a
        stretch of time — from what Mumbai was, to what Mumbai can become.
      </p>

      {/* Divider line */}
      <div className="w-full h-px bg-gray-300" />
    </section>
  );
};

export default HeroSection;
