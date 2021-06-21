import React from "react";

function Project() {
  return (
    <div className="flex flex-col bg-white mr-4 mb-4 border border-blur-grey shadow-small-blue transition-shadow duration-300 hover:shadow-raised-blue rounded-lg group overflow-hidden">
      <div className="relative group">
        <div className="aspect-w-16 aspect-h-9">
          <img src="/projects/photix.jpg" />
        </div>
      </div>
      <div className="md:py-6 md:px-8 py-3 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-my-green-300 text-base md:text-lg lg:text-xl font-body font-bold pb-2">
            Atlas
          </h3>
        </div>
        <p className="text-gray-800 text-sm lg:text-base font-body mt-1">
          A modern personal blog template
        </p>
        <p className="text-gray-800 text-xs md:text-sm font-body mt-2">
          By: <span className="font-bold">Tailwind Made</span>
        </p>
      </div>
    </div>
  );
}

export default Project;
