import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll
    ? "bg-white/80 backdrop-blur-sm shadow-md"
    : "bg-transparent";

  return (
    /* Navbar */
    <div className="relative">
      <div
        className={`px-5 lg:px-12 py-6 xl:px-28 md:flex justify-between fixed left-0 right-0 mx-auto ${scrollActive}`}
      >
        <div className="flex items-center gap-4">
          {/* mobile menu button */}
          <a
            href="#"
            className="md:hidden"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            <i
              className={`text-lg ${isOpen ? "ri-close-line" : "ri-menu-line"}`}
            ></i>
          </a>
          <div className="mx-auto md:mx-0">
            <p className="font-semibold text-lg md:text-xl text-center">
              QINSHIBE
            </p>
          </div>
        </div>

        {/* desktop menu */}
        <div className="gap-6  text-gray-500 hidden md:flex">
          {["Home", "About", "Projects"].map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase text-lg cursor-pointer hover:text-purple-500"
            >
              {item}
            </a>
          ))}
        </div>

        {/* mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 flex flex-col gap-4 px-6 pb-6 text-gray-500">
            {["Home", "About", "Projects"].map((item) => (
              <a
                key={item}
                href="#"
                className="uppercase cursor-pointer hover:text-purple-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
