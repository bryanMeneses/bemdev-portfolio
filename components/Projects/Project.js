import React, { useEffect } from "react";
import { ButtonLink } from "@/components/Button/Button";

function Project({
  imageName,
  title,
  description,
  tech_stack,
  demo_link,
  code_link,
}) {
  return (
    <article className="w-full flex flex-col bg-white mb-4 border-none shadow-small-blue transition-shadow duration-300 hover:shadow-raised-blue rounded-lg group overflow-hidden">
      <div className="relative group">
        <div className="aspect-w-16 aspect-h-9">
          <img alt={``} src={`/projects/${imageName}`} />
        </div>
      </div>
      <div className="md:py-6 md:px-8 py-3 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-my-green-300 text-base md:text-lg lg:text-xl font-body font-bold pb-2">
            {title}
          </h3>
        </div>
        <p className="text-gray-800 text-sm lg:text-base font-body mt-1">
          {description}
        </p>
        {/* <p className="text-gray-800 text-xs md:text-sm font-body mt-2">
          By: <span className="font-bold">Tailwind Made</span>
        </p> */}
        <div className="mt-4">
          {demo_link && (
            <ButtonLink
              className="mr-4"
              btnStyle="primary"
              href={demo_link}
              target="blank"
            >
              Demo
            </ButtonLink>
          )}
          {code_link && (
            <ButtonLink
              btnStyle="primary-outline"
              href={code_link}
              target="blank"
            >
              Code
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
