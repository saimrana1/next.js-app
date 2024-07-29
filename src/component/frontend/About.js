import Image from "next/image";
import portfolioImage from "../../Assets/mine.jpg";
import { useEffect } from "react";
import CountUp from "react-countup";
import Carousel from "./crousel";

const About = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.setProperty("--progress-width", width);
    });
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 p-8 lg:p-16">
      <div className="relative z-10 pt-20">
        <div className="text-center text-gray-900 p-8 animate-slide-up">
          <h2 className="text-3xl font-semibold mb-4">ABOUT</h2>
          <div class="flex mt-2 justify-center">
            <div class="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="text-lg mt-4">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 md:p-8 lg:p-12">
          <div className="w-full lg:w-1/3 flex items-center justify-center animate-fade-in">
            <Image
              src={portfolioImage}
              alt="Background"
              className="w-full h-auto max-w-md lg:max-w-full rounded"
            />
          </div>

          <div className="w-full lg:w-2/3 text-left mt-4 lg:mt-0 animate-slide-up">
            <h1 className="text-3xl">Development & UI/UX Designer</h1>
            <p className="text-md mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div>
                <h2 className="mt-4">
                  <b>Birthday:</b> 1 May 2002
                </h2>
                <h2 className="mt-4">
                  <b>Website:</b> www.example.com
                </h2>
                <h2 className="mt-4">
                  <b>Phone:</b> +923197248216
                </h2>
                <h2 className="mt-4">
                  <b>City:</b> New York, USA
                </h2>
              </div>
              <div>
                <h2 className="mt-4">
                  <b>Age:</b> 22
                </h2>
                <h2 className="mt-4">
                  <b>Degree:</b> Master
                </h2>
                <h2 className="mt-4">
                  <b>Email:</b> saimrajpoot2011l@gmail.com
                </h2>
                <h2 className="mt-4">
                  <b>Freelance:</b> Available
                </h2>
              </div>
            </div>
            <p className="text-lg mt-8">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-900 p-8 animate-slide-up">
        <h2 className="text-4xl font-semibold mb-4">Skills</h2>

        <p className="text-lg mb-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:p-8 lg:p-12">
        {[
          { skill: "HTML", percentage: "100%" },
          { skill: "React", percentage: "80%" },
          { skill: "CSS", percentage: "100%" },
          { skill: "NODE.JS", percentage: "70%" },
          { skill: "JAVASCRIPT", percentage: "90%" },
          { skill: "MongoDB", percentage: "70%" },
        ].map((item, index) => (
          <div className="col-span-1 mb-4" key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                {item.skill}
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                {item.percentage}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 progress-bar"
                style={{ width: "0%" }}
                data-width={item.percentage}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-900 p-8 animate-slide-up">
        <h2 className="text-4xl font-semibold mb-4">Facts</h2>
        <p className="text-lg mb-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8 lg:p-12">
        {[
          { number: 232, label: "Clients" },
          { number: 520, label: "Projects" },
          { number: 1260, label: "Hours Of Support" },
          { number: 15, label: "Hard Workers" },
        ].map((item, index) => (
          <div className="col-span-1" key={index}>
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-blue-400">
              <CountUp start={0} end={item.number} duration={3.5} />
            </h1>
            <p className="text-center mt-2 text-lg text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-900 p-8 animate-slide-up">
        <h2 className="text-4xl font-semibold mb-4">TESTIMONIALS</h2>
        <p className="text-lg mb-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
