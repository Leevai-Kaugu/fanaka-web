'use client';
import InstructorInviteCard from '@/components/custom/CareersLink/page';
import React, { JSX } from 'react';


export default function Career(): JSX.Element {
  return (
    <div className='bg-background w-full dark:bg-foreground'>
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col w-full col-start-1 row-start-1 z-10">

          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center mt-[5vh] md:mt-[5vh] text-center px-4">
            <h1 className="text-4xl text-fp font-bold">CAREERS</h1>
            <p className="text-pg mt-2 md:w-[40%] w-full text-gray-600">
              Grow With Us ~ Discover opportunities to build something amazing, challenging, inspiring, and rewarding.
            </p>
          </div>

          {/* Why Work With Us Section */}
          <div className="flex flex-col items-center justify-center md:mt-[5vh] mt-[10vh] px-4 text-center">
            <h2 className="text-xl md:text-2xl text-fp md:mb-6 mb-3">Why work with us</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-[5vw] justify-center w-full max-w-6xl">
              {[
                {
                  title: 'Make Real Impact',
                  description:
                    'At Fanaka, your work directly empowers small businesses to grow, create jobs, and strengthen communities.',
                },
                {
                  title: 'Join a Supportive Team',
                  description:
                    'Fanaka is built on collaboration, respect, and shared success — you’ll be part of a passionate team that believes in making finance accessible and fair.',
                },
                {
                  title: 'Grow With Purpose',
                  description:
                    'We’re committed to your professional development, offering mentorship, skills training, and opportunities to advance as you help entrepreneurs succeed.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-5 px-6 bg-gradient-to-tl from-[#9bd46a] to-[#0b3866] text-white rounded-lg shadow w-full md:w-[30%]"
                >
                  <h3 className="text-flp font-bold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {/* Oops Image */}
            <div className="mt-[5vh] w-full max-w-5xl flex items-center justify-center">
            </div>

            {/* No Jobs Text */}
            <div className="mt-10 w-full max-w-3xl text-fg">
              <p>
                We are seeking a dynamic and results-driven {" "}
                <span className="text-fanakaPrimary font-semibold">Field Entrepreneur</span>{" "} to expand our microfinance operations. This role involves engaging with local communities, identifying potential clients, and facilitating financial inclusion through tailored microfinance solutions.  
                If you are passionate about empowering small businesses and have a knack for building relationships, we want to hear from you!
              </p>
            </div>


            {/* Instructor Invite Card */}           
            <div className="mt-16 w-full px-4">
              <InstructorInviteCard />
            </div>
            {/* Socials */}
            <div className="md:mt-6 mt-[0px]">
              {/* <Socials /> */}
            </div>

            {/* Agent CTA */}
            <div className="mt-12">
              {/* <AgentLink /> */}
            </div>
            <div className='mt-30'>
              {/* <Fe_testimonials /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
