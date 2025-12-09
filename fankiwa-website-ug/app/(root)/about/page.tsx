"use client";
import Image from "next/image";
import Section from "@/components/custom/section/page";
import Card from "@/components/custom/techStack/page";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      {/* Header Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-6 text-center">
          {/* <h1 className="text-4xl md:text-xl text-gray-600">
            About us
          </h1> */}
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            A Fanaka subsidiary dedicated to expanding financial inclusion and
            empowering businesses across Uganda.
          </p>
        </div>
      </section>

      {/* Main Content */}
    <section className="w-full py-16 ">
        <div className="w-full mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT — TEXT */}
            <div className="text-center lg:text-left lg:pl-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
                    About us
                <span className="block w-16 h-[3px] mt-2 mx-auto lg:mx-0"></span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    <strong> Fanikiwa </strong> is a proud subsidiary of
                    <strong> Fanaka Technologies </strong>, bringing years of fintech innovation,
                    customer trust, and operational excellence into the Ugandan market.
                    After a strong and transformative run in <strong>Zambia</strong>,
                    where Fanaka successfully improved access to capital for thousands
                    of small and medium-sized businesses, we are expanding our vision
                    into Uganda. Our mission remains the same:{" "}
                    <strong>
                    bridging financial gaps and unlocking opportunities for
                    underserved communities
                    </strong>
                    .
                </p>

                <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
                    Discover Our Markets
                </button>
            </div>

            {/* RIGHT — THREE STYLIZED IMAGES */}
            <div className="flex items-center justify-center gap-4">
                {/* Image 1 */}
                <div className="w-38 h-54 rounded-3xl overflow-hidden shadow-md">
                    <Image
                    src="/portrait-smiling-woman-sell-food-market-kingston-jamaica.jpg"
                    alt="Story Image 1"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                    />
                </div>

                {/* Image 2 (Center, taller) */}
                <div className="w-42 h-62 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                    src="/black-people-tablet-farm-with-chicken-agriculture-together-live-stock-outdoor-crops-happy-men-working-together-farming-sustainability-growth-supply-chain-countryside.jpg"
                    alt="Story Image 2"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                    />
                </div>

                {/* Image 3 */}
                <div className="w-38 h-54 rounded-3xl overflow-hidden shadow-md">
                    <Image
                    src="/backgrounds-market-woman.jpg"
                    alt="Story Image 3"
                    width={300}
                    height={500}
                    className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    </section>
    <section className="w-full py-10 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl space-y-10 leading-relaxed">
          <section className="w-full py-10 overflow-hidden">
           <div className="w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Text Section */}
                <div className="space-y-6"> 
                <p className="text-sm font-semibold tracking-wide text-gray-600"> Guided by Fanaka's technology-driven approach, Fanikiwa Uganda is committed to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Providing fair and accessible financing for small and growing businesses.</li>
                    <li>Empowering communities through sustainable, responsible lending.</li>
                    <li>Delivering fast, customer-first digital experiences.</li>
                    <li>Supporting entrepreneurship and long-term economic growth.</li>
                </ul>
                </div>

                {/* Right Grid Cards */}
                <div className="grid grid-cols-2 gap-2">
                    {/* Card 1 - Blue */}
                    <Card
                        imageSrc="/Zanga.png"
                        altText="Zanga Logo"
                        bgColor="bg-blue-800"
                        textColor="text-white"
                        description="a productivity tool for our Field Entrepreneurs to onboard, support, and monitor MSME clients in real time."
                    />

                    {/* Card 2 - White, top margin */}
                    <Card
                        imageSrc="/fanaka-konnect-logo-01.png"
                        altText="Fanaka Konnekt Logo"
                        bgColor="bg-white"
                        textColor="text-gray-900"
                        description="our in-house core banking and loan management system that centralizes customer data, configures loan products, automates disbursements and repayments, and supports compliance and reporting."
                        className="mt-6"
                    />

                    {/* Card 3 - White, bottom margin */}
                    <Card
                        imageSrc="/fanaka-iq-logo-01.png"
                        altText="Fanaka IQ Logo"
                        bgColor="bg-white"
                        textColor="text-gray-900"
                        description="our data intelligence engine that aggregates over 200,000 behavioral, demographic, and transactional data points to power a proprietary MSME credit scoring model and drive product optimization."
                        className="mb-6"
                    />

                    {/* Card 4 - Blue */}
                    <Card
                        imageSrc="/kula-app-logo-01.png"
                        altText="Kula App Logo"
                        bgColor="bg-blue-700"
                        textColor="text-white"
                        description="a customer-facing mobile app that enables MSMEs to apply for loans, make repayments, access financial literacy training, microinsurance, and manage their credit journey."
                    />
                    </div>
                </div>
            </section>
        </div>
    </section>
    </main>
  );
}
