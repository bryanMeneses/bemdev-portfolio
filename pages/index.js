import Head from 'next/head'
import { ButtonLink } from '../components/Button/button'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Bryan Meneses | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">

        <div className={`row ${styles.row}`}>

          <div className="col-md-5 col-lg-4">
            <div className={styles['img-wrap']}>
              <div className={styles.img}>
                <Image width="640" height="640" layout="responsive" src="/bryan-portrait.jpeg" />
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-7">
            <h5>Hello, I am</h5>
            <h1>Bryan Meneses</h1>
            <h3>I love to build experiences on the Web</h3>
            <p className="my-4">I am focusing on front end technologies. React, Next.js, jQuery, Shopify/Liquid, and some Laravel!</p>
            <div className="cta">
              <ButtonLink href="/" btnStyle="primary" className="mr-4">VIEW PROJECTS</ButtonLink>
              <ButtonLink href="/" btnStyle="primaryoutline">DOWNLOAD CV</ButtonLink>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
