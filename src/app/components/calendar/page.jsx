"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Head from "next/head"

export default function Calendar() {
  const [imageSize, setImageSize] = useState({
    width: 750,
    height: 750,
  })

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 460) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.7,
        })
      } else if (window.innerWidth >= 460 && window.innerWidth < 600) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.59,
        })
      } else if (window.innerWidth >= 600 && window.innerWidth < 700) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.58,
        })
      } else if (window.innerWidth >= 700 && window.innerWidth < 850) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.58,
        })
      } else if (window.innerWidth >= 850 && window.innerWidth < 1000) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.6,
        })
      } else if (window.innerWidth >= 1000 && window.innerWidth < 1320) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.56,
        })
      } else {
        setImageSize({ width: 750, height: 750 })
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const targetDate = new Date("2024-07-19T15:40:00")
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    function updateTimer() {
      const time = calculateTimeLeft(targetDate)
      setTimeLeft(time)
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft(targetDate) {
    const difference = targetDate - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <div className={styles.backImage}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400..700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <br />
      <br />
      <div className={styles.imgAndTimer}>
        <Image
          src={"img/calendar.svg"}
          alt='calendar'
          width={imageSize.width}
          height={imageSize.height}
        />
        <br />
        <br />

        <div className={styles.blockCountdown}>
          <div className={styles.timer}>
            <p className={styles.textWedding}>ДО НАЧАЛА СВАДЬБЫ ОСТАЛОСЬ:</p>
            <br />
            {timeLeft ? (
              <div className={styles.countdownBlock}>
                <div className={styles.countdownTimer}>
                  <p className={styles.textTimer}>{timeLeft.days}</p>
                  <p className={styles.nameTimer}>Дней</p>
                </div>
                <p className={styles.blackLine}></p>
                <div className={styles.countdownTimer}>
                  <p className={styles.textTimer}>{timeLeft.hours}</p>
                  <p className={styles.nameTimer}>Часов</p>
                </div>
                <p className={styles.blackLine}></p>
                <div className={styles.countdownTimer}>
                  <p className={styles.textTimer}>{timeLeft.minutes}</p>
                  <p className={styles.nameTimer}>Минут</p>
                </div>
                <p className={styles.blackLine}></p>
                <div className={styles.countdownTimer}>
                  <p className={styles.textTimer}>{timeLeft.seconds}</p>
                  <p className={styles.nameTimer}>Секунд</p>
                </div>
              </div>
            ) : (
              <p>Подготавливаем таймер...</p>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}
