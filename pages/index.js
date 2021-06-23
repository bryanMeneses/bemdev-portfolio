import Head from "next/head";
import { ButtonScrollLink, Button } from "../components/Button/Button";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

import { fadeInDown } from "@/animations/fadeInDown";

import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [active, handleModal] = useState(false);
  const [content, setContent] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    handleModal(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    handleModal(false);
    setContent(false);
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

      <Element className={`${styles.hero} py-8`}>
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
            <h1 className="leading-tight my-2 text-5xl sm:text-6xl md:text-8xl">
              Bryan Meneses
            </h1>
            <h2 className="leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl">
              I love to build things for the Web.
            </h2>
            <p className="tracking-wide mb-8 font-normal max-w-xl">
              I am a web developer based the Southwest of England, specializing
              in creating beautiful and functional websites.
            </p>
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
          <Experience />
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
          <Projects openModal={openModal} setContent={setContent} />
        </div>
      </Element>

      {/* <Element name="education" className="w-full py-12 bg-white">
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
      </Element> */}

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
                web development was different. I used to study music, and then I
                graduated in Accounting. Creativity was gone in my life and I
                felt aimless.
              </p>
              <p className="mt-10">
                Thanks to the creative and logical nature of web develoment, I
                discovered a career I could truly be passionate about.
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
          <div className="mt-4 text-white">
            <h5>Some technologies I have worked with recently:</h5>
            <div className={`mt-4 max-w-4xl ${styles.tech_stack}`}>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Redux</span>
              <span>Laravel</span>
              <span>Node/Express.js</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>MongoDB</span>
              <span>Eloquent ORM</span>
              <span>RESTful APIs</span>
              <span>Headless CMS</span>
              <span>SCSS</span>
              <span>TailwindCSS</span>
              <span>Bootstrap</span>
              <span>Shopify & Liquid</span>
              <span>Mailchimp</span>
              <span>GitHub & BitBucket</span>
              <span>3rd-party API Integrations</span>
              <span>Trello</span>
              <span>PSD to Code</span>
              <span>Responsive (mobile) design</span>
              <span>Web Scraping</span>
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
            If you like what I do, let's get in touch.
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
