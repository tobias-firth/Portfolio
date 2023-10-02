import React from "react";

function Navbar({scrollToTop}) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <div>
        <nav ref={scrollToTop} id="nav" className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[#025] z-10">
          <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
              <a className="text-xl md:text-l font-bold inline-block mr-3 py-2 whitespace-nowrap font-itim text-[#add8e6]" href="/">Tobias Firth</a>
              <button className="text- cursor-pointer px-3 py-1 block md:hidden outline-none focus:outline-none text-4xl text-[#add8e6] hover:text-yellow-300" type="button" onClick={() => setNavbarOpen(!navbarOpen)}> ≡ </button>
            </div>
            <div
              className={
                "md:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
            >
              <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                <li className="nav-item">
                  <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text- font-itim lowercase leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#schedule">About</a>
                </li>
                <li className="nav-item">
                  <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-m font-itim lowercase leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#currency">Projects</a>
                </li>
                <li className="nav-item">
                  <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-m font-itim lowercase leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#weather">Skills</a>
                </li>
                <li className="nav-item">
                  <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-m font-itim lowercase leading-snug text-[#add8e6] hover:underline decoration-wavy decoration-3" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )}

export default Navbar;