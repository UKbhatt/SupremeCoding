const express = require("express");
const router = express.Router();

const questions = require("../data/questions"); 

router.get("/", (req, res) => {
  const brief = questions.map(q => ({
    id: q.id,
    name: q.name,
    slug: q.slug,
    difficulty: q.difficulty,
    status: q.status || "Unsolved",
    acceptance: "80.73%" 
  }));
  res.json(brief);
});

router.get("/:slug", (req, res) => {
  const question = questions.find(q => q.slug === req.params.slug);
  if (!question) return res.status(404).json({ error: "Question not found" });
  res.json(question);
});

module.exports = router;
