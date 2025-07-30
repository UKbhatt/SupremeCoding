const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const TEMP_DIR = path.join(__dirname, "temp");
const isWindows = process.platform === "win32";

async function ensureTempDir() {
  await fs.mkdir(TEMP_DIR, { recursive: true });
}

async function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
      } else {
        resolve(stdout);
      }
    });
  });
}

async function customCompile(code, language, input = "") {
  await ensureTempDir();
  const sessionId = uuidv4();
  const tempDir = path.join(TEMP_DIR, sessionId);

  try {
    await fs.mkdir(tempDir, { recursive: true });

    let filename, compileCmd, runCmd;

    switch (language) {
      case "javascript":
        filename = "solution.js";
        runCmd = `cd ${tempDir} && node ${filename} < input.txt`;
        break;

      case "python":
        filename = "solution.py";
        runCmd = `cd ${tempDir} && python ${filename} < input.txt`;
        break;

      case "java":
        filename = "Solution.java";
        compileCmd = `cd ${tempDir} && javac ${filename}`;
        runCmd = `cd ${tempDir} && java Solution < input.txt`;
        break;

      case "cpp":
        filename = "solution.cpp";
        const outputBinary = isWindows ? "solution.exe" : "solution";
        compileCmd = `cd ${tempDir} && g++ -o ${outputBinary} ${filename}`;
        runCmd = `cd ${tempDir} && ${isWindows ? outputBinary : "./" + outputBinary} < input.txt`;
        break;

      default:
        throw new Error("Unsupported language");
    }

    await fs.writeFile(path.join(tempDir, filename), code);
    await fs.writeFile(path.join(tempDir, "input.txt"), input);

    if (compileCmd) await execPromise(compileCmd);

    const output = await execPromise(runCmd);
    return output.trim();
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

module.exports = { customCompile };
