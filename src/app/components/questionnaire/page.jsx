"use client"
import Head from "next/head"
import { useRef } from "react"
import styles from "./page.module.css"

export default function Questionnarie() {
  const formRef = useRef(null)

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const data = {
      name: formData.get("name"),
      attendance: formData.get("attendance"),
      preferences: formData.getAll("preferences"),
    }

    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      formRef.current.reset()
      alert("Мы обработали ваш ответ!")
    } else {
      console.log("Failed to submit the form")
    }
  }

  return (
    <div className={styles.waveContainer}>
      <Head></Head>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.questProfile}>
        <p className={styles.dressCode}>АНКЕТА ГОСТЯ</p>
        <br />
        <p className={styles.textDress}>
          Заполните, пожалуйста, форму, чтобы подтвердить свое присутствие.
        </p>
        <br />
        <p className={styles.textDress}>
          *Посколько в анкете есть вопросы касательно меню, просим гостей,
          которые придут в паре заполнять форму по отдельности.
        </p>
      </div>
      <br />
      <br />

      <div className={styles.formProfile}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <p className={styles.textDress}>Ваше Имя и Фамилия</p>
            <br />
            <input
              className={styles.inputForm}
              name='name'
              placeholder='Введите ваше имя и фамилию'
            />
          </div>
          <br />
          <div>
            <p className={styles.textDress}>
              Планируете ли вы присутствовать на свадьбе?
            </p>
            <br />
            <div style={{ marginBottom: 15 }}>
              <input
                name='attendance'
                type='radio'
                value='Да, с удовольствием!'
              />
              <label className={styles.textForm}>Да, с удовольствием!</label>
            </div>
            <div>
              <input
                name='attendance'
                type='radio'
                value='К сожалению, не могу'
              />
              <label className={styles.textForm}>К сожалению, не могу</label>
            </div>
          </div>
          <br />
          <div>
            <p className={styles.textDress}>
              Уточните Ваши предпочтения в алкологе, выбрав один или несколько
              вариантов:{" "}
            </p>
            <br />
            <div>
              <div style={{ marginBottom: 15 }}>
                <input
                  name='preferences'
                  type='checkbox'
                  value='Красное сухое вино'
                />
                <label className={styles.textForm}>Красное сухое вино</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  name='preferences'
                  type='checkbox'
                  value='Красное п/сл вино'
                />
                <label className={styles.textForm}>Красное п/сл вино</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input name='preferences' type='checkbox' value='Белое сухое' />
                <label className={styles.textForm}>Белое сухое</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  name='preferences'
                  type='checkbox'
                  value='Белое п/сл сухое'
                />
                <label className={styles.textForm}>Белое п/сл сухое</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input name='preferences' type='checkbox' value='Шампанское' />
                <label className={styles.textForm}>Шампанское</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  name='preferences'
                  type='checkbox'
                  value='Домашняя настойка'
                />
                <label className={styles.textForm}>Домашняя настойка</label>
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  name='preferences'
                  type='checkbox'
                  value='Безалкогольные напитки'
                />
                <label className={styles.textForm}>
                  Безалкогольные напитки
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className={styles.buttonBlock}>
            <button className={styles.buttonForm} type='submit'>
              Отправить
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
    </div>
  )
}
