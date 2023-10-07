import React from "react";

function Footer() {
    return (
        <div id="footer" className=" w-full items-center justify-between px-2 py-3 bg-[#025]">
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l leading-snug text-[#add8e6]" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tobias-firth">LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l leading-snug text-[#add8e6]" target="_blank" rel="noreferrer" href="https://github.com/tobias-firth">GitHub</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l leading-snug text-[#add8e6]" target="_blank" rel="noreferrer" href="https://public.tableau.com/app/profile/tobiasfirth">Tableau Public</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l leading-snug text-[#add8e6]" href="#nav">Back to Top</a>
              </li>
            </ul>
        </div>
    )
}

export default Footer;