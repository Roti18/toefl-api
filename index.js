const express = require("express");
const soalData = require("./data/soal.json");

const app = express();
const port = 3000;

app.use(express.json());

const allQuestions = [];
function pushQuestions(params) {
  params.forEach((data) => {
    allQuestions.push(...data.questions);
  });
}

allQuestions.push(...soalData.structure);
pushQuestions(soalData.reading);
pushQuestions(soalData.listening);

// soalData.reading.forEach((passage) => {
//   allQuestions.push(...passage.questions);
// });
// soalData.listening.forEach((audioItem) => {
//   allQuestions.push(...audioItem.questions);
// });

const questionsMap = new Map();
allQuestions.forEach((question) => {
  questionsMap.set(question.id, question);
});

app.get("/", (req, res) => {
  res.send("Gatau Pokoknya ini API TOEFL buat tugas DPW");
});

app.get("/api/soal", (req, res) => {
  res.json(soalData);
});

app.get("/api/soal/:tipeSoal", (req, res) => {
  const { tipeSoal } = req.params;
  const data = soalData[tipeSoal];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "Tipe soal tidak ditemukan!" });
  }
});

app.get("/api/soal/:tipeSoal/random", (req, res) => {
  const { tipeSoal } = req.params;
  const data = soalData[tipeSoal];

  if (data && data.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomSoal = data[randomIndex];
    res.json(randomSoal);
  } else {
    res.status(404).json({
      message: "Tipe soal tidak ditemukan atau tidak ada soal tersedia.",
    });
  }
});

app.post("/api/submit", (req, res) => {
  const userAnswers = req.body;
  if (!Array.isArray(userAnswers)) {
    return res
      .status(400)
      .json({ message: "Format input harus berupa array!" });
  }

  let correctCount = 0;
  const totalQuestionsSubmitted = userAnswers.length;

  userAnswers.forEach((answer) => {
    const originalQuestion = questionsMap.get(answer.id);

    if (
      originalQuestion &&
      originalQuestion.correct_answer === answer.userAnswer
    ) {
      correctCount++;
    }
  });

  const scorePercentage =
    totalQuestionsSubmitted > 0
      ? (correctCount / totalQuestionsSubmitted) * 100
      : 0;

  res.json({
    correctAnswers: correctCount,
    totalQuestions: totalQuestionsSubmitted,
    score: parseFloat(scorePercentage.toFixed(2)),
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
