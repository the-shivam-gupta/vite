import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-serif leading-snug tracking-wide">
            THE <br />
            HOUSE OF <br />
            ABHINANDAN <br />
            LODHA
          </h1>
          <p className="mt-6 text-sm text-white/80">
            Corporate office <br />
            3rd Floor, Lodha Excelus, Apollo Mills Compound,
            <br /> N. M. Joshi Marg, Mahalaxmi, Mumbai – 400011
          </p>
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide">
            STAY UP TO DATE
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Stay up-to-date on the latest at our end — trends, growth stories,
            and more.
          </p>

          {/* Contact form */}
          <div className="mt-6">
            <Contact />
          </div>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <p>© 2025 — HOABL</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
