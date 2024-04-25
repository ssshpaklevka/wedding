"use client"
import styles from "./page.module.css"
import Head from "next/head"

export default function Header() {
  return (
    <div className={styles.invitation}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Comforter&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Comforter&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.invitationTwo}>
        <p className={styles.inviteText}>Приглашение</p>
        <p className={styles.weddingText}> на свадьбу!</p>
      </div>
    </div>
  )
}
