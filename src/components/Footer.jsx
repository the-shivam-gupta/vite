import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="flex items-center justify-around mt-10 mb-10">
      {/* left side */}
      <div className="text-left leading-5">
        <h1>
          THE <br />
          HOUSE OF <br />
          ABHINANDAN
          <br /> LODHA
        </h1>
        <p className="text-sm text-gray-200 mt-6">
          Welcome to the site - <br />
          <span className="text-xs">
            Thanks for visiting the site and leave
            <br /> a like if you like.
          </span>
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-serif">STAY UP TO DATE</h1>
        <p className="text-sm">
          Stay upto date by the latest updates on the website
        </p>
        {/* contact form */}
        <div className="mt-4">
            <Contact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
