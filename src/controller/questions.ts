import { Router } from "express";
import { questions } from "../data/mockQuestions";

const router = Router();

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

router.get("/", (req, res) => {
  let newQuestions: any = [];
  questions.map((item) => {
    return newQuestions.push({
      id: item.id,
      question: item.question,
      options: item.options,
    });
  });
  const randomQuestions = shuffleArray(newQuestions);
  res.status(200).json({ message: "ok", questions: randomQuestions });
});

router.post("/check", (req, res) => {
  const { answers } = req.body;
  let score = 0;
  if (answers.length !== 0) {
    answers.forEach((answer: { id: number; option: string }) => {
      const question = questions.find((q) => q.id === answer.id);
      if (question && question.answer === answer.option) {
        score++;
      }
    });

    res.status(200).json({ message: "ok", score });
  } else {
    res.status(400).json({ message: "require an answers" });
  }
});

module.exports = router;
