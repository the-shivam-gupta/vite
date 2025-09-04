import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets
import GrowthSVG from "../assets/Growth-corridor.svg?react";
import bandraWorli from "../assets/circle/Bandra-Worli.webp";
import BulletTrain from "../assets/circle/Bullet-Train.webp";
import img_1 from "../assets/circle/img_1.webp";
import metroLines from "../assets/circle/Metro-Lines.webp";
import mumbaiCoastalRoad from "../assets/circle/Mumbai-Coastal-Road.webp";
import arrow from "../assets/arrow.webp";

const corridorData = [
  {
    title: "Great Western Growth Corridor",
    text: "The Great Western Corridor — stretching from Andheri to Virar — is one of India’s most defining urban growth frontiers. It is where Mumbai’s potential meets its future.",
  },
  {
    title: "Eastern Growth Corridor",
    text: "The Eastern Growth Corridor is rapidly transforming with major road, port, and metro connectivity, redefining Mumbai’s logistics and residential hubs.",
  },
  {
    title: "Northern Growth Corridor",
    text: "With the expansion of metro lines and expressways, the Northern Corridor is becoming a magnet for IT parks, housing, and industrial clusters.",
  },
  {
    title: "Southern Growth Corridor",
    text: "The Southern Growth Corridor blends heritage and innovation, linking Mumbai’s historic core with modern infrastructure projects.",
  },
];

const images = [
  { src: mumbaiCoastalRoad, label: "Mumbai Coastal Road" },
  { src: BulletTrain, label: "Bullet Train" },
  { src: bandraWorli, label: "Bandra Worli" },
  { src: metroLines, label: "Metro Lines" },
  { src: img_1, label: "Growth Corridor" },
];

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);
  const svgRef = useRef(null);

  // slider animation
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % corridorData.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? corridorData.length - 1 : prev - 1));
  };

  // slidder images
  const [indexImage, setIndexImage] = useState(0);
  const handlePrevImage = () => {
    setIndexImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextImage = () => {
    setIndexImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const current = images[indexImage];
  const next = images[(indexImage + 1) % images.length];

  useEffect(() => {
    const el = textRef.current;
    const chars = el.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { color: "#9ca3af" }, // start gray-400
      {
        color: "#000000", // animate to black
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true, // links animation to scroll
        },
      }
    );

    // SVG stroke animation
    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: "none",
        stroke: "#3d9c49",
        strokeWidth: 2,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      });
    });
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
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold font-serif text-center text-green-600 tracking-tight transform scale-y-140">
        Growth Corridors: Engines of the Future
      </h1>

      {/* Animated paragraph */}
      <p
        ref={textRef}
        className="max-w-3xl mt-18 sm:mt-8 text-center text-base sm:text-lg leading-6 tracking-tight font-medium transform scale-y-125"
      >
        {splitText(
          "A Growth Corridor is not defined by geography alone — it is the intersection of momentum, infrastructure, and aspiration. It is where four powerful forces converge to create sustainable economic, social, and urban acceleration:"
        )}
      </p>

      <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 sm:py-24">
        {/* Illustration with arrows */}
        <div className="relative flex justify-center items-center w-full">
          {/* Left arrow */}
          <img
            src={arrow}
            alt="left arrow"
            className="absolute -left-6 w-2 sm:w-4 md:w-6 lg:w-7 cursor-pointer transform rotate-180"
            onClick={handlePrev}
          />

          {/* SVG */}
          <div
            ref={svgRef}
            className="w-[14rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem]"
          >
            <GrowthSVG />
          </div>

          {/* Right arrow */}
          <img
            src={arrow}
            alt="right arrow"
            className="absolute -right-6 w-2 sm:w-4 md:w-6 lg:w-7 cursor-pointer"
            onClick={handleNext}
          />
        </div>

        {/* Corridor headline + paragraph (slider) */}
        <div className="mt-12 text-center max-w-4xl min-h-[10rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-green-600 tracking-tight transform scale-y-140">
                {corridorData[index].title}
              </h2>
              <p className="mt-18 sm:mt-8 text-green-600 font-medium sm:px-20 text-center text-sm sm:text-lg leading-6 tracking-tight transform scale-y-150">
                {corridorData[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div>
        {/* Social ecosystem */}
        <h3 className="text-xl sm:text-2xl md:text-6xl tracking-tight leading-loose transform scale-y-140 font-medium text-center text-green-600">
          The Great Western Mumbai
        </h3>
        <div className="max-w-3xl mt-18 sm:mt-8 text-center text-base sm:text-lg leading-loose tracking-tight font-medium transform scale-y-135 text-black">
          <p className="leading-5">
            The Great Western Corridor — stretching from Andheri to Virar — is
            one of India's most defining urban growth frontiers. lt is where
            Mumbai's potential meets its future.
          </p>
          <br />
          <p className="leading-5">
            Supercharged by once-in-a-generation infrastructure investments,
            this corridor is undergoing a tectonic shift—rapidly evolving from a
            string of suburbs into an integrated, high-speed economic and
            lifestyle zone.
          </p>
        </div>
      </div>

      {/* Image slider */}
      <div className="relative flex justify-center items-center w-full mt-20 overflow-hidden px-4">
        {/* Left arrow */}
        <img
          src={arrow}
          alt="left arrow"
          onClick={handlePrevImage}
          className="absolute left-0 sm:left-4 md:left-18 w-2 sm:w-4 md:w-6 lg:w-7 cursor-pointer transform rotate-180 z-20"
        />

        {/* Images container */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Main image */}
          <div
            className="relative rounded-full overflow-hidden shadow-lg 
                    w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-120 lg:h-120 
                    flex-shrink-0"
          >
            <img
              src={current.src}
              alt={current.label}
              className="w-full h-full object-cover"
            />
            <p
              className="absolute bottom-10 sm:bottom-15 lg:bottom-20 transform scale-y-120 w-full text-center text-white 
                    text-sm sm:text-base md:text-lg font-medium drop-shadow-lg px-2"
            >
              {current.label}
            </p>
          </div>

          {/* Next image smaller */}
          <div
            className="hidden sm:block relative rounded-full overflow-hidden shadow-md 
                    w-20 h-20 sm:w-28 sm:h-28 md:w-55 md:h-55 flex-shrink-0"
          >
            <img
              src={next.src}
              alt={next.label}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right arrow */}
        <img
          src={arrow}
          alt="right arrow"
          onClick={handleNextImage}
          className="absolute right-0 sm:right-4 md:right-18 w-2 sm:w-4 md:w-6 lg:w-7 cursor-pointer z-20"
        />
      </div>

      {/* Closing paragraph */}
      <div className="max-w-3xl mt-28 md:mt-18 text-center text-base sm:text-lg leading-loose tracking-tight font-medium transform scale-y-140 text-black">
        <p className="leading-5">
          With over a dozen major transport projects underway or completed —
          from the Mumbai Coastal Road and Bandra-Versova Sea Link to the
          Mumbai-Ahmedabad Bullet Train and Metro lines 2A, 7, and 9 — the
          Western Suburbs are being rewired for the 21st century.
        </p>
        <br />
        <p className="leading-5">
          But it's not just about movement — its about momentum. This corridor
          is becoming home to new industries. smart housing. booming retail, and
          aspirational lifestyles. The Great Western isn't a stretch of land.
          It's a stretch of time — from what Mumbai was to what Mumbai can
          become..
        </p>
        <div className="mb-10">
          {/* add margin bottom */}
          <button className="relative mt-4 text-green-600 cursor-pointer text-xl group">
            KNOW MORE
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
