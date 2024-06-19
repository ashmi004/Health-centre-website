// AccordionUI.js
import React from "react";

const AccordionUI = ({ title, Id, children, activeIndex, setActiveIndex }) => {
  const isOpen = Id === activeIndex;

  return (
    <div
      className={`w-full p-4 mb-4 rounded-lg ${
        isOpen ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => setActiveIndex(isOpen ? null : Id)}
      style={{ cursor: "pointer" }}
    >
      <h2 className="text-lg font-medium">{title}</h2>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionUI;
