import React from "react";
import Item from "./Item";

function Experience() {
  return (
    <div>
      <Item
        title="Web Developer"
        date="October 2019 - June 2021"
        description={
          <ul className="list-disc pl-5">
            <li className="mb-2">
              Developed a full-stack portal using Next.js, Express.js and
              MongoDB to simplify work-flow for marketing team. Consumes Trello
              API. Uses roles/middleware to authorize relative people to access
              specific routes.
            </li>
            <li className="mb-2">
              Maintained and updated{" "}
              <a href="https://skinresearchlabs.com" target="blank">
                Skin Research Laboratories
              </a>{" "}
              Shopify front end and created custom dynamic features, during
              which period the store's revenue increased by 75% over the year
              before.
            </li>
            <li className="mb-2">
              Created a scrolling animated product page to market a client's new
              product line using GSAP.{" "}
              <button
                onClick={() => {
                  setContent(
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "60%",
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        src="https://www.youtube.com/embed/GtgjXW8gfBE"
                        frameBorder="0"
                        width="560"
                        height="315"
                        allowFullScreen={true}
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                      ></iframe>
                    </div>
                  );
                  openModal();
                }}
                className="text-blue-600"
              >
                View example.
              </button>
            </li>
            <li className="mb-2">
              Coded Mailchimp promotional emails seen by thousands of customers.
            </li>
            <li className="mb-2">Update, refactor, and optimize old code.</li>
            <li className="mb-2">
              Improved page loading times implementing image and page-specific
              stylesheets.
            </li>
            <li className="mb-2">
              Coordinated with the lead developer using Git and Bitbucket.
            </li>
          </ul>
        }
        company="Lifetech Resources"
      />
      <Item
        title="Web Developer Intern"
        date="May 2019 - October 2019"
        description={
          <ul className="list-disc pl-5">
            <li className="mb-2">
              Translated UI wireframes into visual, functional pages with React
              and Sass.
            </li>
            <li className="mb-2">
              Managed state for restaraunt menu in five foreign languages using
              Redux.
            </li>
            <li className="mb-2">
              Consume JSON data from RESTful APIs to create dynamic content.
            </li>
            <li className="mb-2">
              Collaborated with remote designers to redesign pages to improve
              user experience.
            </li>
            <li className="mb-2">
              Coordinated with lead developer and two other developers using
              GitHub and Discord.
            </li>
          </ul>
        }
        company="Win-Kel"
      />
    </div>
  );
}

export default Experience;
