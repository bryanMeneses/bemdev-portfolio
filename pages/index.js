import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">

        <div className='flex flex-col items-center justify-between md:flex-row lg:justify-around'>

          <div className='pr-4 w-7/12 md:w-5/12 lg:p-0 lg:w-4/12'>
            <div className={styles['img-wrap']}>
              <div className={styles.img}>
                <Image width="640" height="640" layout="responsive" src="/bryan-portrait.jpeg" />
              </div>
            </div>
          </div>

          <div className='mt-4 font-bold text-gray-900 md:pl-4 md:mt-0 md:w-7/12 lg:p-0 lg:w-6/12'>
            <h5 className="font-bold text-gray-500">Front End Developer</h5>
            <h1 className="text-6xl mb-4 -mt-1">Bryan Meneses</h1>
            <h4 className="text-2xl">I love to build experiences on the Web</h4>
            <p className="my-4 font-normal max-w-xl">I am focusing on front end technologies. React, Next.js, jQuery, Shopify/Liquid, and some Laravel!</p>
            <div className={`${styles.cta}`}>
              <ButtonLink href="/" btnStyle="primary" className="mr-4">VIEW PROJECTS</ButtonLink>
              <ButtonLink href="/" btnStyle="primaryoutline">DOWNLOAD CV</ButtonLink>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
