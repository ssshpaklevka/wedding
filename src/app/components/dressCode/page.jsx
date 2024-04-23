"use client"
import Head from "next/head"
import styles from "./page.module.css"

export default function DressCode() {
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
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div className={styles.blockDress}>
        <div className={styles.blockDressText}>
          <br />
          <br />
          <br />
          <br />
          <p className={styles.dressCode}>ДРЕСС - КОД</p>
          <br />
          <p className={styles.textDress}>
            Мы очень старались сделать праздник красивым и будем рады, если в
            своих нарядах вы поддержите цветовую гамму и стилистику нашей
            свадьбы:{" "}
          </p>
        </div>
        <br />

        <div className={styles.colorDivs}>
          <div className={styles.oneColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.twoColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.threeColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.fourColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.fiveColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.sixColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.sevenColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
          <div className={styles.eightColor}>
            <div className={styles.overlaySquareBig}></div>
            <div className={styles.overlaySquareSmall}></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
