import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useSpring, animated} from 'react-spring'
import Trail from '@/components/Trail'
import Item from '@/components/Experience/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function Home() {

  const props = useSpring({
    opacity: 1, 
    delay: 1000, 
    from: {
      opacity: 0
    },
    config: {
      duration: 550,
    },
  })

  return (
    <>
     <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.hero}`}>
        <div className="container max-w-6xl">
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <Trail className='mt-4 font-bold text-white md:pr-4 md:mt-0 md:w-7/12 lg:p-0 lg:w-6/12'>
              <h6 className="uppercase tracking-loose font-normal">React, Next.js, Node.js, Shopify/Liquid</h6>
              <h1 className="leading-tight my-4">Bryan Meneses - Your <span className="text-my-green-400">Next</span> Front End Developer</h1>
              <h5 className="leading-normal mb-8 font-normal">I love to build experiences on the Web. My strength is building front-end web applications that match your designs to the dot.</h5>
              <div className={styles.cta}>
                <ButtonLink href="/" btnStyle="primary" className="mr-4">VIEW PROJECTS</ButtonLink>
                <ButtonLink href="/" btnStyle="secondary">DOWNLOAD CV</ButtonLink>
              </div>
            </Trail>

            <animated.div style={props} className='w-7/12 md:w-5/12 lg:p-0 lg:w-4/12'>
              <div className={styles['img-wrap']}>
                <div className={styles.img}>
                  <Image width="640" height="640" layout="responsive" src="/bryan-portrait.jpeg" />
                </div>
              </div>
            </animated.div>
          </div>
          <div className="socials">
            <a className="h-14 w-14 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg" href="#">
              <FontAwesomeIcon className="w-2/4" color="white" icon={faGithubAlt} />
            </a>
            <a className="h-14 w-14 mr-6 rounded-full bg-gray-800 transition-all transform hover:scale-110 inline-flex justify-center items-center hover:shadow-lg" href="#">
              <FontAwesomeIcon className="w-2/4" color="white" icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <section className="w-full py-12 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">Experience</h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="Junior Developer"
            date="February 2020 - Present"
            description={<>Maintained and updated <a href="https://skinresearchlabs.com" target="blank">Skin Research Laboratories</a> front end, during which period the store saw an increase in 75% of revenue over the year before. I also created a scrolling animated product page to market a client's new product line using GSAP.</>}
            company="Lifetech Resources"
          />
          <Item
            title="Web Developer Intern"
            date="September 2019 - January 2020"
            description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eveniet commodi dolorum optio mollitia enim quae nulla provident aut! Temporibus exercitationem laudantium qui praesentium culpa?'}
            company="Win-Kel"
          />
        </div>
      </section>

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
