import React from "react";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon
} from "@radix-ui/react-icons";
import { config } from "@/constant";

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center gap-6 pb-6">
      <div>
        <p className="text-gray-500">{config.footer.leftContent}</p>
      </div>
      <div>
        <p className="text-gray-500">{config.footer.centerContent}</p>
      </div>
      <div className="flex gap-5">
        <a className="border border-green-500 p-2 rounded-full hover:scale-105 hover:bg-green-600 delay-75 transition-transform group"><LinkedInLogoIcon width={18} height={18} className="text-green-500 hover:text-white"/></a>
        <a className="border border-green-500 p-2 rounded-full hover:scale-105 hover:bg-green-600 delay-75 transition-transform group"><GitHubLogoIcon width={18} height={18} className="text-green-500 hover:text-white"/></a>
        <a className="border border-green-500 p-2 rounded-full hover:scale-105 hover:bg-green-600 delay-75 transition-transform group"><InstagramLogoIcon width={18} height={18} className="text-green-500 hover:text-white"/></a>
      </div>
    </div>
  );
}

export default ContactForm;
