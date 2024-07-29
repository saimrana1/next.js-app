import React from "react";
import Image from "next/image";
import html from "../../Assets/html.jpg";
import css from "../../Assets/css.jpg";
import javascript from "../../Assets/java-script.jpg";
import reactjs from "../../Assets/react.jpg";
import nodejs from "../../Assets/node-js.jpg";
import mongodb from "../../Assets/mongo-db.jpg";
import Container from "@/layouts/container";

const Services = () => {
  const services = [
    {
      img: html,
      title: "HTML",
      description:
        "I ensure that your website is well-structured, easy to maintain, and optimized for search engines. Whether you need a static website, landing page, or the HTML foundation for complex web applications, I deliver high-quality markup that forms the backbone of your online presence.",
    },
    {
      img: css,
      title: "CSS",
      description:
        "I use modern CSS techniques, including Flexbox and Grid, to ensure your website looks great on all devices. From styling and layout to creating custom animations and transitions, I deliver engaging and user-friendly interfaces that enhance the overall user experience.",
    },
    {
      img: javascript,
      title: "JavaScript",
      description:
        "I leverage the power of JavaScript to create responsive user interfaces, implement complex logic, and enhance functionality. Whether it’s developing custom scripts, integrating APIs, or optimizing performance, I build interactive and dynamic features for your web application.",
    },
    {
      img: reactjs,
      title: "ReactJS",
      description:
        "I create reusable components and manage state effectively to deliver seamless and dynamic web experiences. From developing single-page applications to integrating with back-end services, I ensure your React-based projects are fast, scalable, and maintainable.",
    },
    {
      img: nodejs,
      title: "NodeJS",
      description:
        "I build efficient APIs, handle backend logic, and integrate with databases to ensure smooth and high-performance operations. Whether you need a custom server, real-time features, or data processing, I leverage Node.js to deliver reliable and responsive backend solutions.",
    },
    {
      img: mongodb,
      title: "MongoDB",
      description:
        "I create efficient data models, optimize queries, and ensure reliable data storage and retrieval. Whether you need a new database setup, data migration, or performance tuning, I leverage MongoDB’s capabilities to deliver robust and adaptable data solutions.",
    },
  ];

  return (
    <Container>
      <div className="w-full h-full p-8 lg:p-16 animate-slide-up mt-8">
        <div className="text-center text-gray-900 p-8">
          <h2 className="text-4xl md:text-5xl font-semibold ">SERVICES</h2>
          <div class="flex mt-4 justify-center">
            <div class="w-28 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="text-lg md:text-lg mt-4 ">
            I offer expert web development services, including dynamic websites
            and responsive front-end design using React and Tailwind CSS. With a
            focus on both front-end and back-end solutions, I provide robust
            full-stack development, API integration, and custom web
            applications.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 animate-slide-up">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4 animate-slide-up"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 mb-4">
                  <Image
                    className="rounded-full"
                    src={service.img}
                    alt={service.title}
                    width={90}
                    height={90}
                    layout="fixed"
                  />
                </div>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-1">
                  {service.title}
                </h3>
                <h2 className="text-lg md:text-xl text-gray-900 font-medium title-font mb-4">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
