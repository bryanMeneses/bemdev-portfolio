import React from "react";
import Item from "./Item";

function Experience() {
  return (
    <div>
      <Item
        title="Web Developer"
        date="September 2019 - June 2021"
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
              product line using GSAP. View at{" "}
              <a href="https://glam.rapidlash.com" target="blank">
                glam.rapidlash.com
              </a>
              .
            </li>
            <li className="mb-2">
              Coded MailChimp promotional emails seen by thousands of customers.
            </li>
            <li className="mb-2">
              Updated, refactored, and optimized old code.
            </li>
            <li className="mb-2">
              Improved page loading times by implementing image and
              page-specific stylesheets.
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
        date="April 2019 - September 2019"
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
              Coordinated with a team of three developers using GitHub and
              Discord.
            </li>
          </ul>
        }
        company="Win-Kel"
      />
    </div>
  );
}

export default Experience;
