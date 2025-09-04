import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import growthCorridorLeft from "../assets/Growth-corridor-left.webp";
import growthCorridorRight from "../assets/Growth-corridor-right.webp";
import { Phone, Monitor, MessageCircleMore } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const leftOverlay = useRef(null);
  const rightOverlay = useRef(null);
  const leftPane = useRef(null);
  const rightPane = useRef(null);

  const HOLE_SIZE = "40%";
  const DURATION = 0.8;
  const EASE = "power2.inOut";

  const overlayStyle = {
    background: "#48AD57",
    WebkitMaskImage:
      "radial-gradient(circle at 50% 50%, transparent var(--hole), black var(--hole))",
    maskImage:
      "radial-gradient(circle at 50% 50%, transparent var(--hole), black var(--hole))",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    ["--hole"]: "0%",
  };

  useEffect(() => {
    // both left and right start with a visible circle hole
    gsap.set(leftOverlay.current, { css: { "--hole": "40%" } });
    gsap.set(rightOverlay.current, { css: { "--hole": "100%" } });

    // base image scale
    gsap.set(leftPane.current.querySelector("img"), { scale: 1 });
    gsap.set(rightPane.current.querySelector("img"), { scale: 1 });
  }, []);

  const hoverLeft = () => {
    // hovered (left) -> left fully visible, right gets green overlay with hole
    gsap.to(leftOverlay.current, {
      duration: DURATION,
      ease: EASE,
      css: { "--hole": "100%" }, // remove green from hovered
    });
    gsap.to(rightOverlay.current, {
      duration: DURATION,
      ease: EASE,
      css: { "--hole": HOLE_SIZE }, // show hole on other pane
    });

    // subtle scaling: highlight hovered image
    gsap.to(leftPane.current.querySelector("img"), {
      scale: 1.05,
      duration: 0.7,
      ease: EASE,
    });
    gsap.to(rightPane.current.querySelector("img"), {
      scale: 1,
      duration: 0.7,
      ease: EASE,
    });
  };

  const hoverRight = () => {
    // hovered (right) -> right fully visible, left gets green overlay with hole
    gsap.to(rightOverlay.current, {
      duration: DURATION,
      ease: EASE,
      css: { "--hole": "100%" },
    });
    gsap.to(leftOverlay.current, {
      duration: DURATION,
      ease: EASE,
      css: { "--hole": HOLE_SIZE },
    });

    gsap.to(rightPane.current.querySelector("img"), {
      scale: 1.05,
      duration: 0.7,
      ease: EASE,
    });
    gsap.to(leftPane.current.querySelector("img"), {
      scale: 1,
      duration: 0.7,
      ease: EASE,
    });
  };

  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden bg-white">
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 flex items-center justify-between text-white">
          {/* Logo Block */}
          <div className="flex items-center gap-4">
            {/* Left Logo Block */}
            <div className="flex flex-col text-white">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none">
                GROWTH
              </span>
              <span className="text-[9px] sm:text-[10px] leading-0 text-end font-semibold tracking-widest mt-1">
                HOUSING
              </span>
            </div>

            {/* Divider Line */}
            <div className="h-10 sm:h-12 w-px bg-white/70"></div>

            {/* Right Text Block */}
            <div className="flex flex-col text-[9px] sm:text-[10px] uppercase tracking-widest text-white">
              {/* Top Line */}
              <span className="h-px w-8 sm:w-10 bg-white mb-1"></span>

              {/* Text Block */}
              <div className="leading-tight">
                <div>THE</div>
                <div>HOUSE OF</div>
                <div>ABHINANDAN</div>
                <div>LODHA</div>
              </div>

              {/* Bottom Line */}
              <span className="h-px w-8 sm:w-10 bg-white mt-1"></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 uppercase text-sm tracking-wide text-white">
            {[
              "About us",
              "Manifesto",
              "Promises",
              "Growth Corridors",
              "Contact",
            ].map((item, idx) => (
              <a
                key={idx}
                className="relative hover:opacity-100 cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 font-medium after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Login Button - desktop */}
          <div className="hidden md:block relative text-white tracking-wide font-medium cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Login
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 text-white text-lg font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 text-white px-6 py-6 space-y-4 text-center">
            {[
              "About us",
              "Manifesto",
              "Promises",
              "Growth Corridors",
              "Contact",
            ].map((item, idx) => (
              <a
                key={idx}
                className="block text-base font-medium tracking-wide hover:text-green-400 transition"
              >
                {item}
              </a>
            ))}
            <div className="block text-base font-semibold tracking-wide mt-4 cursor-pointer hover:text-green-400 transition">
              Login
            </div>
          </div>
        )}
      </header>

      <main className="flex flex-col md:flex-row h-screen relative">
        {/* LEFT PANE */}
        <section
          ref={leftPane}
          onMouseEnter={hoverLeft}
          className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden"
        >
          <img
            src={growthCorridorLeft}
            alt="left"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500"
            draggable={false}
          />

          <div
            ref={leftOverlay}
            className="absolute inset-0 pointer-events-none z-10"
            style={overlayStyle}
          />
        </section>

        {/* RIGHT PANE */}
        <section
          ref={rightPane}
          onMouseEnter={hoverRight}
          className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden"
        >
          <img
            src={growthCorridorRight}
            alt="right"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div
            ref={rightOverlay}
            className="absolute inset-0 pointer-events-none z-10"
            style={overlayStyle}
          />
        </section>

        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6 text-center pointer-events-none">
          <h1 className="text-4xl text-left md:text-7xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg text-white">
            Step Into a World of
            <br className="hidden lg:block" />
            Discovery.
          </h1>
        </div>
      </main>

      {/* Floating CTA */}
      <div className="sticky top-4 z-20">
        <div className="hidden absolute right-4 bottom-6 z-50 sm:flex flex-col items-stretch gap-6 w-48">
          <button className="cursor-pointer w-full sm:w-40 bg-white/90 text-black py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-3">
            <Monitor className="w-5 h-5" />
            <span className="text-sm">Register</span>
          </button>

          <button className="cursor-pointer w-full sm:w-40 bg-green-500 text-white py-4 px-6 rounded-full shadow-lg flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" />
            <span className="text-sm">Talk to us</span>
          </button>

          <button className="cursor-pointer w-full sm:w-40 bg-green-500 text-white py-4 px-6 rounded-full shadow-lg flex items-center justify-center gap-3">
            <MessageCircleMore className="w-5 h-5" />
            <span className="text-sm">Chat with us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
