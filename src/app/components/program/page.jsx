"use client"
import Head from "next/head"
import Image from "next/image"
import styles from "./page.module.css"
import { useInView } from "react-intersection-observer"

export default function Program() {
  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
  })
  const { ref: refTwo, inView: inViewTwo } = useInView({
    triggerOnce: true,
  })
  const { ref: refThree, inView: inViewThree } = useInView({
    triggerOnce: true,
  })
  const { ref: refFour, inView: inViewFour } = useInView({
    triggerOnce: true,
  })
  return (
    <div className={styles.waveContainer}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Sedan&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.programDay}>
        <p className={styles.textProgram}>ПРОГРАММА ДНЯ</p>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.viewBlock}>
        <div className={styles.timeFullBlockOne}>
          <p
            ref={refOne}
            className={` ${styles.timeText} ${
              inViewOne ? styles.fadeInOne : ""
            }`}
          >
            15:00
          </p>
          <br />
          <div className={styles.gatheringGuests}>
            <div className={styles.textImg}>
              <Image
                ref={refOne}
                className={inViewOne ? styles.fadeInOne : ""}
                src={"/img/calendarImg.svg"}
                alt='ringsImg'
                width={70}
                height={70}
              />
            </div>
            <div className={styles.programInfo}>
              <p
                className={` ${styles.programTextUp} ${
                  inViewOne ? styles.fadeInOne : ""
                }`}
              >
                СБОР ГОСТЕЙ
              </p>
              <p
                className={` ${styles.programText} ${
                  inViewOne ? styles.fadeInOne : ""
                }`}
              >
                просим взять с собой хорошее настроение и свои улыбки
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className={styles.gatheringGuests}>
          <p
            className={`${styles.blackLine} ${
              inViewOne ? styles.fadeInOneLine : ""
            }`}
          ></p>
        </div>

        <br />
        <div
          ref={refTwo}
          className={` ${styles.timeFullBlockTwo} ${
            inViewTwo ? styles.fadeInTwo : ""
          }`}
        >
          <p className={styles.timeText}>16:00</p>
          <br />
          <div className={styles.gatheringGuests}>
            <div className={styles.textImg}>
              <Image
                src={"/img/ringsImg.svg"}
                alt='ringsImg'
                width={70}
                height={70}
              />
            </div>
            <div className={styles.programInfo}>
              <p className={styles.programTextUp}>РЕГИСТРАЦИЯ БРАКА</p>

              <p className={styles.programText}>
                просим взять с собой хорошее настроение и свои улыбки
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className={styles.gatheringGuests}>
          <p
            className={`${styles.blackLine} ${
              inViewTwo ? styles.fadeInTwoLine : ""
            }`}
          ></p>
        </div>

        <br />
        <div
          ref={refThree}
          className={` ${styles.timeFullBlockThree} ${
            inViewThree ? styles.fadeInThree : ""
          }`}
        >
          <p className={styles.timeText}>17:00</p>
          <br />
          <div className={styles.gatheringGuests}>
            <div className={styles.textImg}>
              <Image
                src={"/img/instrumentationImg.svg"}
                alt='instrumentationImg'
                width={70}
                height={70}
              />
            </div>
            <div className={styles.programInfo}>
              <p className={styles.programTextUp}>БАНКЕТ</p>

              <p className={styles.programText}>
                время вкусной еды, танцев и развлечения
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className={styles.gatheringGuests}>
          <p
            className={`${styles.blackLine} ${
              inViewThree ? styles.fadeInThreeLine : ""
            }`}
          ></p>
        </div>

        <br />
        <div
          ref={refFour}
          className={` ${styles.timeFullBlockFour} ${
            inViewFour ? styles.fadeInFour : ""
          }`}
        >
          <p className={styles.timeText}>23:00</p>
          <br />
          <div className={styles.gatheringGuests}>
            <div className={styles.textImg}>
              <Image
                src={"/img/carImg.svg"}
                alt='carImg'
                width={70}
                height={70}
              />
            </div>
            <div className={styles.programInfo}>
              <p className={styles.programTextUp}>ЗАВЕРШЕНИЕ ВЕЧЕРА</p>

              <p className={styles.programText}>
                к сожалению, даже такой прекрасный день может закончиться
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
