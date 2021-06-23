import React from "react";
import { Button, ButtonLink } from "@/components/Button/Button";

function Project({
  imageName,
  title,
  description,
  tech_stack,
  demo_link,
  code_link,
  openModal,
  setContent,
}) {
  return (
    <article className="w-full relative flex flex-col mb-4 border-none bg-white transition-shadow duration-300 hover:shadow-raised-blue rounded-lg group overflow-hidden">
      <div className="h-50">
        <img alt={title} src={`/projects/${imageName}`} />
      </div>
      <div className="transition duration-300 opacity-0 hover:opacity-100 rounded-lg absolute w-full h-full bg-gray-800 bg-opacity-60 flex justify-center items-center">
        <Button
          onClick={() => {
            openModal();
            setContent(
              <div className="text-center max-w-2xl mx-auto">
                <h4 className="text-my-green-300 font-bold">{title}</h4>
                <div className="mt-2 mb-4 h-1 w-52 opacity-60 mx-auto gradient"></div>
                <img alt={title} src={`/projects/${imageName}`} />
                <p className="text-gray-800 text-sm lg:text-base mt-3 whitespace-pre-line">
                  {description}
                </p>
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
            );
          }}
          type="button"
          btnStyle="secondary"
        >
          Learn More
        </Button>
      </div>
    </article>
  );
}

export default Project;
