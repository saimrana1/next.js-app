import Container from "@/layouts/container";
import React from "react";
import { MdLocationOn, MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";

const ContactPage = () => {
  return (
    <Container>
      <section className="text-gray-600 body-font relative animate-slide-up">
        <div className="text-center text-gray-900 p-8 mt-20">
          <h2 className="text-4xl font-semibold mb-4">CONTACT</h2>
          <div className="flex mt-6 justify-center">
            <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="text-lg mt-8">
            We would love to hear from you! Whether you have questions,
            comments, or just want to say hello, feel free to fill out the form
            below. Our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row sm:flex-nowrap flex-wrap">
          <div className="w-full lg:w-2/3 md:w-1/2 h-64 md:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative group">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto md:pointer-events-auto"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Faisalabad%2C%20Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font mb-4">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We would love to hear from you! Whether you have questions,
              comments, or just want to say hello, feel free to fill out the
              form below. Our team will get back to you as soon as possible.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-wrap py-6 rounded shadow-md ">
          <div className="lg:w-1/2">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md px-8">
              ADDRESS
            </h2>
            <div className="flex mt-2">
              <MdLocationOn className="mt-1  rounded w-8 h-8" />
              <p className="px-4">
                Sityana Road Near ChaseUp Mall Faisalabad, Pakistan
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md">
              EMAIL
            </h2>
            <div className="flex">
              <MdEmail className="mt-2 rounded w-5 h-5" />
              <a className="text-indigo-500 leading-relaxed px-4 xs:px-0">
                saimrajpoot2011l@gmail.com
              </a>
            </div>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mt-4">
              PHONE
            </h2>
            <div className="flex">
              <MdOutlinePhoneAndroid className="mt-2  rounded w-5 h-5" />
              <p className="leading-relaxed px-4 mt-1">03197248216</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ContactPage;
