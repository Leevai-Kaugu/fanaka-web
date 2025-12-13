"use client"
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import MessageForm from "@/components/MessageForm/page";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Click outside closes modal */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 flex max-w-4xl bg-flp md:w-[80%] h-fit p-10" style={{ boxShadow: "0 8px 50px rgba(0,0,0,0.2)" }}>
        <div className="flex md:flex-row flex-col w-full justify-around items-center">
          <div className="md:w-[40%] w-full md:text-start text-center">
            <h1 className="text-fp text-[7vw] md:text-[2vw] font-bold">Contact</h1>
            <p className="text-white">Have a question about how we might help you? Give us a call or visit our offices</p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
              <div>
                <div className="flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center">
                  <FaPhoneAlt className="fill-fp" />
                  <p>Contact</p>
                </div>
                <p className="text-white">+260 776478984</p>
              </div>

              <div>
                <div className="flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center">
                  <FaClock className="fill-fp" />
                  <p>Working Hours</p>
                </div>
                <p className="text-white">8:am - 5:pm, Mon - Sat</p>
              </div>

              <div>
                <div className="flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center">
                  <FaLocationDot className="fill-fp" />
                  <p>Location</p>
                </div>
                <p className="text-white">
                  Office 904, 9th Floor, Sunshare Tower, Stand No. LN_15584/1, Katima Mulilo Road, Lusaka, Zambia
                </p>
              </div>

              <div>
                <div className="flex gap-3 items-center mt-[5vh] text-fp md:justify-start justify-center">
                  <IoIosMail className="fill-fp size-[1.4em]" />
                  <p>Mail</p>
                </div>
                <p className="text-white">info@fanakatech.com</p>
              </div>
            </div>
          </div>

          <div className="md:w-[40%] w-full mt-[5vh] md:mt-0">
            <MessageForm />
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>
    </div>
  );
}
