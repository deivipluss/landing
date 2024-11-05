import { FaStar, FaUser } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-white text-white overflow-hidden">
      {/* Background and Header */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-300 to-white opacity-90 blur-2xl pointer-events-none"></div>

      {/* Profile Section */}
      <div className="relative bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-3xl shadow-lg text-center w-full max-w-sm space-y-6">
        {/* Profile Avatar */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {/* Placeholder silhouette for profile image */}
            <FaUser className="text-4xl text-gray-500" />
            {/* Badge Icon */}
            <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full border-2 border-white">
              <FaStar className="text-sm text-white" />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div>
          <h2 className="text-2xl font-semibold">Angela Robinson</h2>
          <p className="text-blue-100">24,973 Followers</p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Coach", "Architecture", "Personal Growth"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white bg-opacity-30 text-white rounded-full text-sm flex items-center space-x-2"
            >
              <FaStar className="text-xs" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Threads Section */}
      <div className="mt-10 bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-3xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold text-center mb-6">Threads</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white bg-opacity-30 p-4 rounded-xl">
            <p className="text-2xl font-bold">2,373</p>
            <p className="text-sm">Sessions</p>
          </div>
          <div className="bg-white bg-opacity-30 p-4 rounded-xl">
            <p className="text-2xl font-bold">32</p>
            <p className="text-sm">Age</p>
          </div>
          <div className="bg-white bg-opacity-30 p-4 rounded-xl">
            <p className="text-2xl font-bold">25,399</p>
            <p className="text-sm">Videos</p>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-10 space-y-4">
        <button className="w-48 py-2 px-4 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-full shadow-lg transition duration-300 hover:bg-blue-300 hover:bg-opacity-40">
          Mis Servicios
        </button>
        <button className="w-48 py-2 px-4 bg-green-600 text-white rounded-full shadow-lg transition duration-300 hover:bg-green-700">
          Contacta conmigo
        </button>
      </div>
    </div>
  );
};

export default HomePage;
