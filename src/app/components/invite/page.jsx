"use client"
import Head from "next/head"
import styles from "./page.module.css"
import Wave from "./wave"
import { useInView } from "react-intersection-observer"

export default function Invite() {
  const { ref, inView } = useInView({
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
      </Head>
      <Wave className={styles.goldWave} />
      <div className={styles.blockDearGuests}>
        <div className={styles.invitingGuests}>
          <p className={styles.textDear}>ДОРОГИЕ ГОСТИ!</p>
          <br />
        </div>
        <div className={styles.invitingGuests}>
          <p className={styles.textInviting}>
            Мы приглашаем Вас разделить с нами радостный день, в который мы
            станем семьёй!
          </p>
          <br />
          <p className={styles.textInviting}>
            В этот волшебный день мы скажем друг другу "да" и соединим наши
            сердца и судьбы в окружении самых близких и родных людей.
          </p>
        </div>
      </div>
      <br />
      <div
        ref={ref}
        className={`${styles.withLove} ${inView ? styles.fadeIn : ""}`}
      >
        <p className={styles.textLove}>с любовью, </p>
        <p className={styles.namesLovers}>Егор & Мария</p>
      </div>
    </div>
  )
}
