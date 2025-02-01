import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to My App</h1>

      <div className="flex gap-4">

        <Link to="/tabs">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Go to Tabs
          </button>
        </Link>

        <Link to="/accordion">
          <button
            className="px-6 py-3 bg-purple-500 text-white rounded-md text-lg font-medium hover:bg-purple-600 transition duration-300"
          >
            Go to Accordion
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
