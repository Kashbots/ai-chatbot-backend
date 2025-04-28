const response = await axios.post(
  "https://api.openai.com/v1/chat/completions",
  {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `
You are a helpful assistant for a gym called FitX.
The gym offers strength training, HIIT, and cardio.
Services include personal training, group classes, memberships, and free trials.

Here are answers to common questions:
- Memberships cost $50/month
- Open 6am–10pm every day
- Yes, you can cancel anytime
- Showers are available
- Booking is done through the FitX app

Speak in a friendly, energetic tone like a fitness coach.
        `.trim()
      },
      { role: "user", content: userMessage }
    ]
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
  }
);
