'use client';

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MessageForm from "@/components/custom/MessageForm/page";

type Country = "UG" | "ZM";

interface ContactModalProps {
  country: Country;
  onClose: () => void;
}

export default function ContactModal({ country, onClose }: ContactModalProps) {

  // 👇 NEW LOCAL STATE TO HOLD FINAL COUNTRY
  const [selectedCountry, setSelectedCountry] = useState<Country>(country);

  // load from local storage when modal mounts
  useEffect(() => {
    const saved = localStorage.getItem("userCountry");

    if (saved && (saved === "uganda" || saved === "zambia")) {
      setSelectedCountry(saved === "uganda" ? "UG" : "ZM");
    }
  }, []);

  const content = {
    UG: {
      phone: "+254 757 411 719",
      hours: "9am – 5pm, Mon - Sat",
      location: "4th floor, The Acacia Mall 14-18 Cooper Road, off Acacia Ave, Kampala, Uganda",
      email: "info@fanakatech.com"
    },
    ZM: {
      phone: "+260 776 478 984",
      hours: "8am – 5pm, Mon - Sat",
      location: "Office 904, 9th Floor, Sunshare Tower, Stand No. LN_15584/1, Katima Mulilo Road, Lusaka, Zambia",
      email: "info@fanakatech.com"
    }
  };

  const data = content[selectedCountry];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 overflow-y-auto md:overflow-hidden">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-flp flex relative z-10 w-full max-w-[calc(100vw-1.5rem)] md:w-[80%] h-[calc(100vh-64px)] lg:h-fit rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 box-border overflow-y-auto md:overflow-hidden">
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-xl">✕</button>

        <div className="flex h-full md:w-full flex-col md:flex-row gap-6 min-h-0">
          <div className="w-full md:w-[45%] text-center md:text-left flex-shrink-0">
            <h1 className="text-fp text-2xl md:text-4xl font-bold mb-4">Contact</h1>

            <p className="mt-1 text-white text-sm leading-snug md:text-lg">
              Have a question? Give us a call or visit our offices.
            </p>

            <div className="mt-4 flex flex-col gap-4 justify-between text-md md:text-md">
              <div className="flex justify-between sm:w-3/4">
                <div>
                  <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                    <FaPhoneAlt /><span className="font-medium">Contact</span>
                  </div>
                  <span className="text-white">{data.phone}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                    <FaClock /><span className="font-medium">Hours</span>
                  </div>
                  <span className="text-white">{data.hours}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <FaLocationDot /><span className="font-medium">Location</span>
                </div>
                <span className="text-white leading-snug break-words">{data.location}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <IoIosMail /><span className="font-medium">Mail</span>
                </div>
                <span className="text-white break-all">{data.email}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[55%] flex-grow min-h-0">
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
