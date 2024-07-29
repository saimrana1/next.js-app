import Container from "@/layouts/container";
import React from "react";

const Resume = () => {
  return (
    <Container>
      <div className="w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 animate-slide-up">
        <div className="text-center text-gray-900 p-4 sm:p-6 lg:p-8  mt-8 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">RESUME</h2>
          <div class="flex  justify-center">
            <div class="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="text-base sm:text-lg mt-4">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-8 lg:p-12">
          <div className="col-span-1">
            <h1 className="text-xl sm:text-2xl font-medium">Summary</h1>
            <div className="relative px-4 mt-4 sm:mt-6">
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white border-2 border-gray-800 rounded-full"></div>
                <div className="h-full w-px bg-gray-800"></div>
              </div>
              <h1 className="text-xl sm:text-2xl pl-6">SAIM</h1>
              <p className="text-sm sm:text-md pl-6 mt-2">
                I am a MERN-stack web developer with experience in building
                applications using MongoDB, Express.js, React, and Node.js. I
                work on various projects involving user management,
                authentication, and responsive design. I use tools and libraries
                like Material-UI, Formik, Axios, and Tailwind CSS for styling.
              </p>
              <ul className="list-disc pl-8 sm:pl-11 pt-4 space-y-2 sm:space-y-3">
                <li>Faisalabad, Pakistan</li>
                <li>0319 7248216</li>
                <li>saimrajpoot2011l@gmail.com</li>
              </ul>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold mt-6">EDUCATION</h1>
            <div className="relative px-4 mt-6 sm:mt-8">
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-800 rounded-full"></div>
                <div className="h-full w-px bg-gray-800"></div>
              </div>
              <h1 className="text-xl sm:text-2xl pl-6">
                Bachelor in Computer Science
              </h1>
              <p className="text-sm sm:text-md text-white bg-blue-400 w-32 sm:w-40 px-4 sm:px-7 py-1 rounded mt-2 mx-4 sm:mx-6">
                2019-2024
              </p>
              <p className="text-base sm:text-lg mt-2 pl-6">
                GOVERNMENT COLLEGE UNIVERSITY OF, FAISALABAD
              </p>
              <p className="text-sm sm:text-md pl-6 mt-2 tracking-wide">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend.
              </p>
            </div>

            <div className="relative px-4 mt-8 sm:mt-10">
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-800 rounded-full"></div>
                <div className="h-full w-px bg-gray-800"></div>
              </div>
              <h1 className="text-xl sm:text-2xl pl-6">
                Bachelor of Fine Arts & Web Designing
              </h1>
              <p className="text-sm sm:text-md text-white bg-blue-400 w-32 sm:w-40 px-4 sm:px-7 py-1 rounded mt-2 mx-4 sm:mx-6">
                2022-2024
              </p>
              <p className="text-base sm:text-lg  pl-6 mt-2">
                GOVERNMENT COLLEGE UNIVERSITY OF, FAISALABAD
              </p>
              <p className="text-sm sm:text-md pl-6 tracking-wide mt-2">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-xl sm:text-2xl font-medium">
              Professional Experience
            </h1>
            <div className="relative px-4 mt-8 sm:mt-10">
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-800 rounded-full"></div>
                <div className="h-full w-px bg-gray-800"></div>
              </div>
              <h1 className="text-xl sm:text-2xl pl-6">
                Senior Web Designing Specialist
              </h1>
              <p className="text-sm sm:text-md text-white bg-blue-400 w-32 sm:w-40 px-4 sm:px-7 py-1 rounded mt-2 mx-4 sm:mx-6">
                2022-2024
              </p>
              <p className="text-base sm:text-lg mt-2 pl-6">
                GOVERNMENT COLLEGE UNIVERSITY OF, FAISALABAD
              </p>
              <ul className="list-disc pl-8 sm:pl-11 pt-4 space-y-2 sm:space-y-3">
                <li>
                  I focus on creating visually appealing and user-friendly
                  layouts for websites, ensuring that aesthetics, usability, and
                  functionality are well balanced.
                </li>
                <li>
                  I carefully arrange content, choose color schemes, select
                  typography, and incorporate imagery to create a cohesive and
                  engaging user experience.
                </li>
                <li>
                  I prioritize responsive design principles, making sure that
                  websites look and function perfectly across various devices
                  and screen sizes.
                </li>
              </ul>
            </div>
            <div className="relative px-4 mt-8 sm:mt-10">
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-800 rounded-full"></div>
                <div className="h-full w-px bg-gray-800"></div>
              </div>
              <h1 className="text-xl sm:text-2xl pl-6">
                Senior Web Development Specialist
              </h1>
              <p className="text-sm sm:text-md text-white bg-blue-400 w-32 sm:w-40 px-4 sm:px-7 py-1 rounded mt-2 mx-4 sm:mx-6">
                2022-2024
              </p>
              <p className="text-base sm:text-lg mt-2 pl-6">
                GOVERNMENT COLLEGE UNIVERSITY OF, FAISALABAD
              </p>
              <ul className="list-disc pl-8 sm:pl-11 pt-4 space-y-2 sm:space-y-3">
                <li>
                  I specialize in translating client needs into functional and
                  engaging web solutions, utilizing my expertise in HTML, CSS,
                  JavaScript, and modern frameworks.
                </li>
                <li>
                  I continuously stay updated with the latest industry trends
                  and technologies to ensure my projects are built with best
                  practices and cutting-edge tools.
                </li>
                <li>
                  My work involves creating intuitive user interfaces,
                  optimizing performance, and implementing responsive designs to
                  enhance user experience across all devices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
