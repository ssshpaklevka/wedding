"use client"
import Head from "next/head"
import styles from "./page.module.css"
import { useInView } from "react-intersection-observer"

export default function Map() {
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

        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.blockLocationEvent}>
        <div className={styles.locationEvent}>
          <p className={styles.textLocation}>МЕСТО ПРОВЕДЕНИЯ!</p>
          <br />
        </div>
        <div className={styles.locationEvent}>
          <p className={styles.textInstitution}>Банкетный зал</p>
          <p className={styles.textRestourant}>"Браво"</p>
          <br />
          <p className={styles.textInstitution}>
            Адрес: п.Новостройка, ул. Центральная, 104
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        ref={ref}
        className={` ${styles.blockLocationEventTwo} ${
          inView ? styles.fadeIn : ""
        }`}
      >
        <div className={styles.locationEvent}>
          <p className={styles.textLocation}>КАК ДОБРАТЬСЯ?</p>
          <br />
        </div>
        <div className={styles.locationMap}>
          <p className={styles.textInstitution}>
            Для вашего удобства мы подготовили карту. Надеемся, что вы легко
            найдете место проведения свадьбы и порадуете нас своим присутствием!
          </p>
        </div>
      </div>

      <br />

      {/* ИЗ-ЗА КАРТЫ ОШИБКА, НУЖНО ПРОВЕРИТЬ ЗАПРОС */}
      <div className={styles.blockMap}>
        <a
          href='https://yandex.ru/maps/64/kemerovo/?utm_medium=mapframe&utm_source=maps'
          className={styles.textMapOne}
        >
          Кемерово
        </a>
        <a
          href='https://yandex.ru/maps/11282/kemerovo-oblast/house/tsentralnaya_ulitsa_104/bE8YdAdnT0IGQFtvfX51cnhmbQ==/?ll=86.207671%2C55.243459&utm_medium=mapframe&utm_source=maps&z=16.63'
          className={styles.textMapTwo}
        >
          Центральная улица, 104 — Яндекс Карты
        </a>
        <iframe
          src='https://yandex.ru/map-widget/v1/?ll=86.207671%2C55.243459&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTE1MjE1Njg2EpkB0KDQvtGB0YHQuNGPLCDQmtC10LzQtdGA0L7QstGB0LrQuNC5INC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INC-0LrRgNGD0LMsINC_0L7RgdGR0LvQvtC6INCd0L7QstC-0YHRgtGA0L7QudC60LAsINCm0LXQvdGC0YDQsNC70YzQvdCw0Y8g0YPQu9C40YbQsCwgMTA0IgoNVGqsQhVO-VxC&z=16.63'
          className={styles.mapWidget}
        ></iframe>
      </div>
    </div>
  )
}
