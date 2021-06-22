import Head from "next/head";
import { ButtonScrollLink, Button } from "../components/Button/Button";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

import { fadeInDown } from "@/animations/fadeInDown";

import Item from "@/components/Experience/Item";
import Projects from "@/components/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [active, handleModal] = useState(false);
  const [content, setContent] = useState(<></>);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    handleModal(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    handleModal(false);
    setContent(<></>);
  };

  const closeMobileNavEscKey = (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal();
    }
  };

  useEffect(() => {
    if (active) {
      window.addEventListener("keydown", closeMobileNavEscKey);
    }

    return () => {
      window.removeEventListener("keydown", closeMobileNavEscKey);
    };
  }, [active]);

  return (
    <>
      <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal active={active} closeModal={closeModal} content={content} />

      <Element className={`${styles.hero}`}>
        <div className="container">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            className="mt-4 font-bold text-white md:pr-4 md:mt-0 lg:p-0"
          >
            <p className="uppercase tracking-loose font-normal xl:text-xl">
              Hello, my name is
            </p>
            <h1 className="leading-tight my-2 text-5xl sm:text-6xl md:text-7xl">
              Bryan Meneses
            </h1>
            <h2 className="leading-tight mb-4 text-3xl sm:text-4xl md:text-4xl">
              I love to build things for the Web.
            </h2>
            <h5 className="leading-normal mb-8 font-normal max-w-xl">
              My strength is building front-end web applications that match your
              designs to the dot.
            </h5>
            <div className="mt-4">
              <a
                className="h-12 w-12 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg"
                href="https://github.com/bryanMeneses"
                target="blank"
              >
                <FontAwesomeIcon
                  className="w-2/4"
                  color="white"
                  icon={faGithubAlt}
                />
              </a>
              <a
                className="h-12 w-12 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg"
                href="https://www.linkedin.com/in/bryan-meneses/"
                target="blank"
              >
                <FontAwesomeIcon
                  className="w-2/4"
                  color="white"
                  icon={faLinkedinIn}
                />
              </a>
            </div>
            <div className="mt-8">
              <ButtonScrollLink to="projects" btnStyle="primary">
                VIEW PROJECTS
              </ButtonScrollLink>
            </div>
          </motion.div>
        </div>
      </Element>

      <Element name="experience" className="w-full py-12 bg-white">
        <div className="container">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">
            Experience
          </h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="Web Developer"
            date="October 2019 - June 2021"
            description={
              <ul className="list-disc pl-5">
                <li className="mb-2">
                  Developed a full-stack portal using Next.js and Node.js to
                  simplify work-flow for marketing team. Features creating
                  Trello cards via the Trello API directly from portal and
                  routes for downloading various brand assets. Backend connects
                  to various Mongo databases used in other company sites. Uses
                  roles/middleware to authorize relative people to access
                  specific routes.
                </li>
                <li className="mb-2">
                  Maintained and updated{" "}
                  <a href="https://skinresearchlabs.com" target="blank">
                    Skin Research Laboratories
                  </a>{" "}
                  Shopify front end to fit holidays/seasons and created custom
                  dynamic features, during which period the store's revenue
                  increased by 75% over the year before.
                </li>
                <li className="mb-2">
                  Created a scrolling animated product page to market a client's
                  new product line using GSAP.{" "}
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
                  Drastically improved page initial loading times for above
                  e-commerce site by implementing image and stylesheet
                  lazy-loading.
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
                  Collaborated with remote designers to redesign pages to
                  improve user experience
                </li>
                <li className="mb-2">
                  Coordinated with the lead developer using Git and Bitbucket.
                </li>
              </ul>
            }
            company="Win-Kel"
          />
        </div>
      </Element>

      <Element name="projects" className="w-full py-12">
        <div className="container">
          <h2 className="my-2 text-white font-bold tracking-wider text-left leading-tight">
            Projects
          </h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 bg-white"></div>
          </div>
          <Projects />
        </div>
      </Element>

      <Element name="education" className="w-full py-12 bg-white">
        <div className="container">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">
            Education
          </h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="California State University, Fullerton"
            company="Bachelor of Arts"
            description={<p>Business Administration - Accounting Track</p>}
            date="Graduated in January 2019"
          />
        </div>
      </Element>

      <Element name="about" className="py-20">
        <div className="container">
          <h2 className="my-2 text-white font-bold tracking-wider text-left leading-tight">
            About Me
          </h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 bg-white"></div>
          </div>
          <div className="flex mt-10 flex-col items-center justify-between md:flex-row">
            <div className="w-full md:w-6/12 text-white text-xl">
              <p>
                Hi! My name is Bryan Meneses and I am a web developer based in
                the Southwest of England, originally from the USA. My journey to
                web development was long. I used to study music, and then I
                graduated in Accounting. By then creativity was gone in my life
                and I felt aimless.
              </p>
              <p className="mt-10">
                Web develoment reignited both the creative and logical sides of
                my life.
              </p>
            </div>

            <div
              style={{ minWidth: 300 }}
              className="mt-10 md:mt-0 w-7/12 md:w-5/12 lg:p-0 lg:w-4/12"
            >
              <div className={styles["img-wrap"]}>
                <div className={styles.img}>
                  <img width="640" height="640" src="/bryan-portrait.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="contact" className="w-full py-20 bg-white">
        <div className="container">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 leading-tight text-center">
            Contact Me
          </h2>
          <div className="w-full">
            <div className="h-1 w-52 mx-auto opacity-40 gradient"></div>
          </div>
          <h6 className="my-4 text-center">
            If you are a fan of what I do, let's get in touch.
          </h6>
          <form
            name="contactMe"
            method="POST"
            data-netlify="true"
            className="max-w-3xl mx-auto px-4"
          >
            <input type="hidden" name="form-name" value="contactMe" />
            <div className="form-control mb-4">
              <label htmlFor="name">Name:</label>
              <input
                className="block w-full rounded-lg px-2 py-2 mt-1 border-2 border-solid border-my-teal-200 h-8"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="email">Email:</label>
              <input
                className="block w-full rounded-lg px-2 py-2 mt-1 border-2 border-solid border-my-teal-200 h-8"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="message">Message:</label>
              <textarea
                className="block w-full rounded-lg px-2 py-2 mt-1 border-2 border-solid border-my-teal-200 h-32"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="cta mt-8">
              <Button
                type="submit"
                btnStyle="primary"
                className="w-32 text-center"
              >
                SEND
              </Button>
            </div>
          </form>
        </div>
      </Element>

      <div className="text-center py-4">
        Designed and Created by Bryan Meneses - 2021
      </div>
    </>
  );
}
