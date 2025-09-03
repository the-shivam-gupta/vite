import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <header className="relative flex flex-wrap items-center justify-evenly z-20">
        <pre className="hidden sm:block text-sm absolute left-0 top-1 leading-5 ml-10 text-gray-300">
          Shivam
          <br />
          Anil <br />
          Gupta
        </pre>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-16 mt-2">
          <li className="sm:text-base text-sm text-gray-300 cursor-pointer">
            Home
          </li>
          <li className="sm:text-base text-sm text-gray-300 cursor-pointer">
            About Us
          </li>
          <li className="sm:text-base text-sm text-gray-300 cursor-pointer">
            Contact
          </li>
          <li className="sm:text-base text-sm text-gray-300 cursor-pointer">
            Login
          </li>
        </ul>
      </header>

      {/* Hero background (takes full screen height) */}
      <div className="w-full h-screen">
        <img
          alt="left-image"
          src="src/assets/Growth-corridor-left.webp"
          className="absolute left-0 top-0 w-1/2 h-full object-cover"
        />
        <img
          alt="right-image"
          src="src/assets/Growth-corridor-right.webp"
          className="absolute right-0 top-0 w-1/2 h-full object-cover"
        />

        {/* Centered content */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl font-serif text-white">
          Step into a world of
          <br /> Discovery
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
