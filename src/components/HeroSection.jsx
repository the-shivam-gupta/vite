import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const chars = el.querySelectorAll("span"); 

    gsap.fromTo(
      chars,
      { color: "#374151" },
      {
        color: "#ffffff", 
        duration: 0.3,
        stagger: 0.019, 
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  
  // Function to split text into spans
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div className="min-h-screen w-full">
      {/* header text 1 */}
      <h1 className="text-4xl font-serif z-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-200 sm:text-5xl">
        What are growth corridors?
      </h1>
      <p
        ref={textRef}
        className="text-lg leading-5 mt-3 text-center text-gray-200 z-30"
      >
        {splitText(
          "So growth corridor is a government term that's used to describe a large area. that's expected to undergo a big population change in the future."
        )}
      </p>
      <h3 className="mt-5 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-200">
        A thriving social ecosystem
      </h3>
      {/* Image */}
      <div className="relative flex flex-col items-center mt-8">
        <img
          src="src/assets/Growth-corridor.svg"
          className="w-[30rem] sm:w-[40rem]"
        />

        {/* Header text 2 */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 sm:text-5xl">
            Great Western Growth Corridor
          </h1>
          <p className="text-sm mt-3 text-gray-200">
            The word "para" has multiple distinct meanings, including a section
            of text or a part of the Quran, a military unit, especially a
            parachute regiment,
            <br /> and a medical term for pregnancies. Context is crucial for
            understanding which "para" is being referenced, as each refers to a
            completely different concept,
            <br /> from religious scripture divisions and military operations to
            the medical history of a patient.
          </p>
        </div>
        {/* slider */}
        <div className="relative w-full overflow-hidden mt-8">
          <motion.div
            className="flex gap-4 px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {/* Original images */}
            <img
              src="src/assets/circle/Bandra-Worli.webp"
              className="w-[12rem] sm:w-[18rem] flex-shrink-0"
            />
            <img
              src="src/assets/circle/Bullet-Train.webp"
              className="w-[12rem] sm:w-[18rem] flex-shrink-0"
            />
            <img
              src="src/assets/circle/img_1.webp"
              className="w-[12rem] sm:w-[18rem] flex-shrink-0"
            />
            <img
              src="src/assets/circle/Metro-Lines.webp"
              className="w-[12rem] sm:w-[18rem] flex-shrink-0"
            />
            <img
              src="src/assets/circle/Mumbai-Coastal-Road.webp"
              className="w-[12rem] sm:w-[18rem] flex-shrink-0"
            />
          </motion.div>
        </div>
        {/* para text */}
        <p className="text-center mx-14 mt-6 mb-10 text-sm">
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic.Almost every piece of writing
          you do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see
          the organization of the essay
          <br /> and grasp its main points.Religious scripture divisions and
          military operations to the medical history of a patient.
        </p>
        {/* line */}
        <div className="h-[1px] bg-gray-300 w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
