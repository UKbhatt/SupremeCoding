const express = require("express")
const router = express.Router()
const { customCompile } = require("../compiler")

router.post("/compile", async (req, res) => {
  try {
    const { code, language, input } = req.body

    if (!code || !language) {
      return res.status(400).json({ error: "Code and language are required" })
    }

    const output = await customCompile(code, language, input || "")
    res.json({ output })
  } catch (error) {
    console.error("Compilation error:", error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
