import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import {useSpring, animated} from 'react-spring'
import Trail from '@/components/Trail'


export default function Home() {

  const props = useSpring({
    opacity: 1, 
    delay: 1250, 
    from: {
      opacity: 0
    },
    config: {
      duration: 550,
    },
  })

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <Trail className='mt-4 font-bold text-white md:pr-4 md:mt-0 md:w-7/12 lg:p-0 lg:w-6/12'>
            <h5 className="uppercase tracking-loose font-bold">React, Next.js, Shopify/Liquid</h5>
            <h1 className="text-5xl leading-tight my-4">Bryan Meneses - Your Next Front End Developer</h1>
            <h4 className="leading-normal text-2xl mb-8 font-normal">I love to build experiences on the Web. My aim is to finally let you breathe!</h4>
            {/* <p className="my-4 font-normal max-w-xl">I am focusing on front end technologies. React, Next.js, jQuery, Shopify/Liquid, and some Laravel!</p> */}
            <div className={`${styles.cta}`}>
              <ButtonLink href="/" btnStyle="primary" className="mr-4">VIEW PROJECTS</ButtonLink>
              <ButtonLink href="/" btnStyle="primaryoutline">DOWNLOAD CV</ButtonLink>
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
  )
}
