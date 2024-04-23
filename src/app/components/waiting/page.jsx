"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css"
import Image from "next/image"

export default function Waiting() {
  const [imageSize, setImageSize] = useState({
    width: 1000,
    height: 300,
  })

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.3,
        })
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.3,
        })
      } else if (window.innerWidth >= 768 && window.innerWidth < 1000) {
        setImageSize({
          width: window.innerWidth,
          height: window.innerWidth * 0.3,
        })
      } else {
        setImageSize({ width: 1000, height: 300 })
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={styles.invitation}>
      <Image
        src={"img/waitingYou.svg"}
        alt='invitation'
        width={imageSize.width}
        height={imageSize.height}
        sizes='(max-width: 768px) 100vw, 33vw'
      />
    </div>
  )
}
