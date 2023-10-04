import React from "react";

function Footer() {
    return (
        <div id="footer" className=" w-full items-center justify-between px-2 py-3 bg-[#025]">
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6]" href="https://github.com/Sam010000101/to-go-list">Footer 1</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6]" href="https://github.com/Sam010000101/to-go-list">Footer 2</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6]" href="https://github.com/Sam010000101/to-go-list">Footer 3</a>
              </li>
              <li className="nav-item">
                <a className=" hover:text-yellow-300 px-3 py-2 flex items-center text-l font-itim lowercase text-xl leading-snug text-[#add8e6]" href="#nav">Back to Top</a>
              </li>
            </ul>
        </div>
    )
}

export default Footer;