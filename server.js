import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

   const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro"
});

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error generating response." });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});