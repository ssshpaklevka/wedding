"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css"

function Countdown() {
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
    <div className={styles.blockCountdown}>
      <div className={styles.timer}>
        <h1>19 июля 2024</h1>
        <h2>до начала свадьбы осталось:</h2>
        {timeLeft ? (
          <p>
            {timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут{" "}
            {timeLeft.seconds} секунд
          </p>
        ) : (
          <p>Подготавливаем таймер...</p>
        )}
      </div>
    </div>
  )
}

export default Countdown
