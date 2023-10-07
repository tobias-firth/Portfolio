import React from "react";

function Contact() {
    return (
        <div id="contact" className="container px-5 py-10 text-center lg:px-40 mx-auto">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              If you have any enquiries, please use the contact form below:
            </p>
            <form name="contact" method="post">
            <div class="mb-6">

            {/* Name Start */}
            <input type="text" id="base-input" class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6" placeholder="Name"/>
            </div>
            {/* Name End */}

            {/* Email Start */}
            <div className="relative mb-6 mx-auto">
            <input type="text" id="email-address-icon" class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email Address"/>
            </div>
            {/* Email End */}

            {/* Message Start */}
            <div className="my-3 mx-auto">
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white bg-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message here..."></textarea>
            </div>
            {/* Message End */}

           {/* Button Start */}
                <div className="my-3 mx-auto">
                    <input className="rounded-full bg-[#025] p-2 font-itim hover:text-yellow-300 hover:underline decoration-wavy decoration-3 text-blue-200 cursor-pointer" type="submit" value="Submit message" />
                </div>
            {/* Button End */}
            </form>
            </div>
      );
}

export default Contact;