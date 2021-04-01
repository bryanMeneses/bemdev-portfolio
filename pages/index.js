import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useSpring, animated} from 'react-spring'
import { fadeIn } from 'animations/fadeIn'
import Trail from '@/components/Trail'
import Item from '@/components/Experience/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { Element } from "react-scroll";
import { useState } from 'react'
import Modal from '@/components/Modal/Modal'


export default function Home() {

  const [active, handleModal] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    handleModal(true)
  }

  const closeModal = () => {
    document.body.style.overflow = 'auto'
    handleModal(false)
  }

  return (
    <>
     <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal 
        active={active} 
        closeModal={closeModal} 
        content={
          <video className="w-full" controls>
            <source src="rapidglam.mov"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
        } 
      />

      <div className={`${styles.hero}`}>
        <div className="container max-w-6xl">
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <Trail className='mt-4 font-bold text-white md:pr-4 md:mt-0 lg:p-0 md:w-10/12'>
              <h6 className="uppercase tracking-loose font-normal">React, Next.js, Node.js, Shopify/Liquid</h6>
              <h1 className="leading-tight my-2 text-7xl">Bryan Meneses</h1>
              <h2 className="leading-tight mb-4 text-5xl">Your Next Front End Developer</h2>
              <h5 className="leading-normal mb-8 font-normal max-w-xl">I love to build experiences on the Web. My strength is building front-end web applications that match your designs to the dot.</h5>
              <div className='mt-4'>
                <a className="h-12 w-12 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg" href="#">
                  <FontAwesomeIcon className="w-2/4" color="white" icon={faGithubAlt} />
                </a>
                <a className="h-12 w-12 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg" href="#">
                  <FontAwesomeIcon className="w-2/4" color="white" icon={faLinkedinIn} />
                </a>
              </div>
            </Trail>

            {/* <animated.div style={useSpring(fadeIn(1000))} className='w-7/12 md:w-5/12 lg:p-0 lg:w-4/12'>
              <div className={styles['img-wrap']}>
                <div className={styles.img}>
                  <Image width="640" height="640" layout="responsive" src="/bryan-portrait.jpeg" />
                </div>
              </div>
            </animated.div> */}
          </div>
          <animated.div style={useSpring(fadeIn(1250))} className={`mt-8 ${styles.cta}`}>
            <ButtonLink href="/" btnStyle="primary" className="mr-4">VIEW PROJECTS</ButtonLink>
            <ButtonLink href="/" btnStyle="secondary">DOWNLOAD CV</ButtonLink>
          </animated.div>
        </div>
      </div>

      <Element name="experience" className="w-full py-12 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">Experience</h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="Junior Developer"
            date="February 2020 - Present"
            description={
              <ul className="list-disc pl-5">
                <li className="mb-2">Developed full-stack portal using Next.js and Node.js to simplify work-flow for marketing team. Features creating Trello cards via the Trello API directly from portal and routes for downloading various brand assets. Backend connects to various Mongo databases used in other company sites. Uses roles/middleware to authorize relative people to access specific routes.</li>
                <li className="mb-2">Maintained and updated <a href="https://skinresearchlabs.com" target="blank">Skin Research Laboratories</a> front end to fit holidays/seasons, during which period the store saw an revenut increase of 75% over the year before.</li> 
                <li className="mb-2">Created a scrolling animated product page to market a client's new product line using GSAP.<button onClick={openModal} className="text-blue-600">View example.</button></li>
                <li className="mb-2">Drastically improved page initial loading times for above e-commerce site by implementing image and stylesheet lazy-loading.</li>
                <li className="mb-2">Coordinated with the lead developer using Git and Bitbucket.</li>
              </ul>
            }
            company="Lifetech Resources"
          />
          <Item
            title="Web Developer Intern"
            date="September 2019 - January 2020"
            description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eveniet commodi dolorum optio mollitia enim quae nulla provident aut! Temporibus exercitationem laudantium qui praesentium culpa?'}
            company="Win-Kel"
          />
        </div>
      </Element>

      <section className="w-full py-12 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">Education</h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="California State University, Fullerton"
            company="Bachelor of Arts"
            description={<><p>Business Administration - Accounting Track</p></>}
            date="Graduated in January 2019"
          />
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">Projects</h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
        </div>
      </section>
    </>
  )
}
