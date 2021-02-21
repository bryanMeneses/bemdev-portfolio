import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useSpring, animated} from 'react-spring'
import Trail from '@/components/Trail'
import Item from '@/components/Experience/Item'


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
              <h6 className="uppercase tracking-loose font-bold">React, Next.js, Shopify/Liquid</h6>
              <h1 className="leading-tight my-4">Bryan Meneses - Your Next Front End Developer</h1>
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
        </div>
      </div>

      <section className="w-full py-4 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="my-2 font-bold tracking-wider text-gray-800 text-left leading-tight">Experience</h2>
          <div className="w-full">
            <div className="h-1 w-52 ml-12 opacity-40 gradient"></div>
          </div>
          <Item
            title="Junior Developer"
            date="February 2020 - Present"
            description={<>Maintained and updated <a href="https://skinresearchlabs.com" target="blank">Skin Research Laboratories</a> for over a year using Shopify. I also used the GSAP libray to for to market a client's new product.</>}
            company="Lifetech Resources"
          />
        </div>
      </section>

      <section className="w-full py-4 bg-white">
        <div className="container max-w-5xl mx-auto">
          <h1 className="my-2 font-bold tracking-wide text-gray-800 text-center leading-tight">What I <span className="text-my-teal-200">Do</span></h1>
          <div className="w-full">
            <div className="h-1 w-64 mx-auto opacity-40 gradient"></div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="md:w-2/4">
              <h2 className="text-gray-800 font-bold">E-Commerce</h2>
              <p className="text-gray-600 my-4 leading-relaxed">Maintained and updated <a href="https://skinresearchlabs.com" target="blank">Skin Research Laboratories</a> for over a year using Shopify. I also used the GSAP libray to for to market a client's new product.</p>
            </div>
            <div className="md:w-2/4">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
