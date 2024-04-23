export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, attendance, preferences, foodPreferences } = req.body

    const message = `
  ФИО: ${name}
  Присутствие: ${attendance}
  Алкогольные предпочтения: ${preferences.join(", ")}
  `

    const chatIDs = [725620369, 6598078399]

    chatIDs.forEach(async chatId => {
      const url = `https://api.telegram.org/bot6921234451:AAHhQhmQSQ2HG8t_DPhFqHKcOPd5g5VEu_Y/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`

      try {
        const telegramResponse = await fetch(url, { method: "GET" })
        const telegramData = await telegramResponse.json()

        res.status(200).json({ success: true })
      } catch (error) {
        res.status(500).json({ success: false, error: error.message })
      }
    })
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" })
  }
}
