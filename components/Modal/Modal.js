import React from 'react'
import styles from './Modal.module.css'
import {useSpring, animated} from 'react-spring'
import { fadeIn } from 'animations/fadeIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

const Modal = ({closeModal, active, content}) => {
  return (
    <>
      {
        active && (
          <animated.div style={useSpring(fadeIn(0, 150))} className={styles.modal}>
            <animated.div style={useSpring({marginTop: 0, from: { marginTop: -40}})} className={styles.wrapper}>
              <div className={styles.content}>
                <header>
                  <button className="block mb-2 ml-auto" onClick={closeModal}>
                    <FontAwesomeIcon className="w-8" color="black" icon={faTimesCircle} />
                  </button>
                </header>
                <main>
                  {content}
                </main>
                <footer>
                </footer>
              </div>

            </animated.div>
          </animated.div>
        )
      }
    </>
  )
}

export default Modal
