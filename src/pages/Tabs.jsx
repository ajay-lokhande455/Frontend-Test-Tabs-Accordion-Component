import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const tabs = [
    {
      text: "Home",
      page: (
        <>
          <p>Welcome to the Home page!</p>
          <Link to="/" className="text-blue-500 text-lg ">
            go to Home
          </Link>
        </>
      ),
    },
    { text: "About", page: "This is the About page where you can learn more about us." },
    { text: "Contact", page: "Reach out to us via email or phone on the Contact page." },
  ];

  const [tabTypeSelected, setTabTypeSelected] = React.useState(0);

  return (
    <div className="h-[90vh] overflow-y-auto flex flex-col items-center">
      <div className="flex justify-center items-center gap-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              tabTypeSelected === index
                ? "border-b-4 border-b-blue-600 text-blue-600"
                : "border-b-4 border-b-transparent"
            } flex items-center gap-5 w-52 hover:bg-gray-100 p-4`}
            onClick={() => setTabTypeSelected(index)}
          >
            <span>{tab.text}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 p-4 w-[60%] text-center">
        <p className="text-4xl">{tabs[tabTypeSelected].page}</p>
      </div>
    </div>
  );
};

export default Tabs;
