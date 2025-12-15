"use client";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MessageForm from "@/components/MessageForm/page";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal */}
      <div
        className=" 
          bg-flp p-10 flex
          relative z-10
          w-full
          max-w-[calc(100vw-1.5rem)] md:w-[80%]
          h-[90vh] lg:h-fit
          bg-flp rounded-xl shadow-2xl
          p-4 sm:p-6 md:p-8
          overflow-hidden
          box-border
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex h-full md:w-full flex-col md:flex-row gap-6 min-h-0">
          {/* Left */}
          <div className="w-full md:w-[45%] text-center md:text-left flex-shrink-0">
            <h1 className="text-fp text-2xl md:text-5xl font-bold">
              Contact
            </h1>

            <p className="mt-1 text-white text-sm leading-snug md:text-lg">
              Have a question? Give us a call or visit our offices.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-lg">
              <div>
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <FaPhoneAlt />
                  <span className="font-medium">Contact</span>
                </div>
                <p className="text-white">+260 776 478 984</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <FaClock />
                  <span className="font-medium">Hours</span>
                </div>
                <p className="text-white">8am – 5pm</p>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <FaLocationDot />
                  <span className="font-medium">Location</span>
                </div>
                <p className="text-white text-xs md:text-lg leading-snug break-words">
                  Office 904, 9th Floor, Sunshare Tower, Katima Mulilo Road, Lusaka
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-fp justify-center md:justify-start">
                  <IoIosMail />
                  <span className="font-medium">Mail</span>
                </div>
                <p className="text-white break-all text-xs md:text-lg">
                  info@fanakatech.com
                </p>
              </div>
            </div>
          </div>

          {/* Right (Form) */}
          <div className="w-full md:w-[55%] flex-grow min-h-0">
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
