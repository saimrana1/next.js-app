import Image from "next/image";
import backgroundImage from "../../Assets/dev1.jpg";

const HomePage = ({ activeSection }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-4 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4">SAIM TAHIR</h1>
          <p className="text-2xl mb-4">I AM MERN_STACK DEVELOPER</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            ABOUT ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
