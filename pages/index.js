import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useSpring, animated} from 'react-spring'
import Trail from '@/components/Trail'


export default function Home() {

  const props = useSpring({
    opacity: 1, 
    delay: 1200, 
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
              <h5 className="uppercase tracking-loose font-bold">React, Next.js, Shopify/Liquid</h5>
              <h1 className="text-5xl leading-tight my-4">Bryan Meneses - Your Next Front End Developer</h1>
              <h4 className="leading-normal text-2xl mb-8 font-normal">I love to build experiences on the Web. My aim is to finally let you breathe!</h4>
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
          <h1 className="my-2 text-4xl font-bold tracking-wide text-gray-800 text-center leading-tight">What I <span className="text-my-teal-200">Do</span></h1>
          <div className="w-full">
            <div className="h-1 w-64 mx-auto opacity-40 gradient"></div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="md:w-2/4">
              <h2 className="text-3xl text-gray-800 font-bold">E-Commerce</h2>
              <p className="text-gray-600 text-base my-4 leading-relaxed">Maintained and updated <a href="https://skinresearchlabs.com" target="blank">Skin Research Laboratories</a> for over a year using Shopify. I also used the GSAP libray to for to market a client's new product.</p>
            </div>
            <div className="md:w-2/4">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
