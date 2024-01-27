import React from "react";
import {
  MobileIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { config } from "@/constant";

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center gap-11 py-8">
      <div className="flex gap-4">
        <span className="p-3 rounded bg-green-500 inline-block">
          <MobileIcon width={26} height={26} className="text-white"/>
        </span>
        <div>
            <p className="text-gray-500">{config.contactInfo.call.fieldName}</p>
            <p className="text-gray-400 mt-1">{config.contactInfo.call.value}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="p-3 rounded bg-green-500 inline-block">
          <EnvelopeClosedIcon width={26} height={26} className="text-white"/>
        </span>
        <div>
            <p className="text-gray-500">{config.contactInfo.email.fieldName}</p>
            <p className="text-gray-400 mt-1">{config.contactInfo.email.value}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="p-3 rounded bg-green-500 inline-block">
          <HomeIcon width={26} height={26} className="text-white"/>
        </span>
        <div>
            <p className="text-gray-500">{config.contactInfo.address.fieldName}</p>
            <p className="text-gray-400 mt-1">{config.contactInfo.address.value}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
