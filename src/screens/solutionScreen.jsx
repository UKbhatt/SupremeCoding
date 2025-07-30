import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Play, RotateCcw, Copy, CheckCircle, XCircle, Clock, Code2 } from "lucide-react";
import SimpleNav from "../components/simpleNav";
import { toast } from "react-hot-toast";

export default function SolutionScreen() {
    const { slug } = useParams();
    const [question, setQuestion] = useState(null);
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [isRunning, setIsRunning] = useState(false);
    const [testResults, setTestResults] = useState([]);
    const [activeTab, setActiveTab] = useState("testcases");
    const [customInput, setCustomInput] = useState("");
    const [customOutput, setCustomOutput] = useState("");

    useEffect(() => {
        if (slug) {
            fetch(`http://localhost:5000/questions/${slug}`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.testCases && data.sampleInput && data.sampleOutput) {
                        const testCases = data.sampleInput.map((input, index) => ({
                            input,
                            expectedOutput: data.sampleOutput[index] || "",
                            hidden: false,
                        }));
                        setQuestion({ ...data, testCases });
                    } else {
                        setQuestion(data);
                    }
                })
                .catch((err) => console.error("Error fetching question:", err));
        }
    }, [slug]);

    const getLanguageTemplate = (lang) => {
        switch (lang) {
            case "javascript":
                return `function solve() {\n  // Your code here\n}\n\n// const result = solve();\n// console.log(result);`;
            case "python":
                return `def solve():\n    # Your code here\n    pass\n\n# result = solve()\n# print(result)`;
            case "java":
                return `public class Solution {\n  public static void main(String[] args) {\n    // Your code here\n  }\n}`;
            case "cpp":
                return `#include<iostream>\nusing namespace std;\n\nint main() {\n  // Your code here\n  return 0;\n}`;
            default:
                return "";
        }
    };

    useEffect(() => {
        setCode(getLanguageTemplate(language));
    }, [language]);

    const runTestCases = async () => {
        if (!question?.testCases || !code.trim()) {
            toast.error("Write some code before running.");
            return;
        }

        setIsRunning(true);
        setTestResults([]);

        const results = [];

        for (const testCase of question.testCases) {
            const startTime = Date.now();

            try {
                const res = await fetch("http://localhost:5000/api/compile", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        code,
                        language,
                        input: testCase.input, 
                    }),
                });


                const result = await res.json();
                const executionTime = Date.now() - startTime;

                if (res.ok) {
                    const passed = result.output.trim() === testCase.expectedOutput.trim();
                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: result.output,
                        executionTime,
                    });
                } else {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: "",
                        error: result.error,
                        executionTime,
                    });
                }
            } catch (error) {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: "",
                    error: "Network error",
                    executionTime: Date.now() - startTime,
                });
            }
        }


        setTestResults(results);
        setActiveTab("testcases");

        const passedCount = results.filter((r) => r.passed).length;
        const totalCount = results.length;

        if (passedCount === totalCount) {
            toast.success(`✅All test cases passed`);
        } else {
            toast.error(`❌ ${passedCount}/${totalCount} passed`);
        }

        setIsRunning(false);
    };

    const runCustomInput = async () => {
        if (!code.trim()) {
            toast.error("Write some code before running.");
            return;
        }

        setIsRunning(true);

        try {
            const res = await fetch("http://localhost:5000/api/compile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code,
                    language,
                    input: customInput,
                }),
            });

            const result = await res.json();

            if (res.ok) {
                setCustomOutput(result.output);
                setActiveTab("console");
                toast.success("Code executed!");
            } else {
                setCustomOutput(`Error: ${result.error}`);
                toast.error(result.error);
            }
        } catch (err) {
            toast.error("Compiler service unavailable.");
            setCustomOutput("Connection error.");
        }

        setIsRunning(false);
    };

    const handleReset = () => {
        setCode(getLanguageTemplate(language));
        setTestResults([]);
        setCustomInput("");
        setCustomOutput("");
    };

    const getColor = (diff) => {
        switch (diff) {
            case "Easy":
                return "bg-green-200 text-green-700";
            case "Medium":
                return "bg-yellow-200 text-yellow-700";
            case "Hard":
                return "bg-red-200 text-red-700";
            default:
                return "bg-gray-200 text-gray-700";
        }
    };

    if (!question) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
                <SimpleNav />
                <p className="text-xl">Loading Question...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <SimpleNav />

            <div className="flex h-[calc(100vh-80px)]">
                <div className="w-[40%] border-r border-slate-700 p-4 overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-2 pb-2">{question.name}</h2>
                    <span className={`px-2 py-1 rounded-full w-auto ${getColor(question.difficulty)}`}>
                        {question.difficulty}
                    </span>
                    <p className="mt-4 text-slate-300">{question.description}</p>

                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Examples:</h3>
                        {question.sampleInput.map((input, i) => (
                            <div key={i} className="bg-gray-900 p-3 rounded mb-4">
                                <p className="text-slate-400 text-sm">Input:</p>
                                <pre className="text-slate-100">{input}</pre>
                                <p className="text-slate-400 text-sm mt-2">Output:</p>
                                <pre className="text-slate-100">{question.sampleOutput[i]}</pre>
                            </div>
                        ))}
                    </div>

                    {question.constraints?.length > 0 && (
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">Constraints:</h3>
                            <ul className="list-disc ml-6 text-slate-300">
                                {question.constraints.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="w-[60%] p-4 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-slate-700 text-white px-3 py-1 rounded"
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="cpp">C++</option>
                        </select>
                        <button onClick={handleReset} className="px-2 py-1 bg-gray-700 rounded">
                            <RotateCcw size={16} />
                        </button>
                        <button onClick={() => navigator.clipboard.writeText(code)} className="px-2 py-1 bg-gray-700 rounded">
                            <Copy size={16} />
                        </button>
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-1 bg-[#0f0f0f] text-white p-4 rounded font-mono text-sm resize-none"
                    />
                    <div className="flex mt-3 space-x-4">
                        <button
                            onClick={runTestCases}
                            disabled={isRunning}
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm"
                        >
                            <Play size={16} className="inline mr-2" />
                            Run Tests
                        </button>
                        <button
                            onClick={runCustomInput}
                            disabled={isRunning}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
                        >
                            <Play size={16} className="inline mr-2" />
                            Run Custom
                        </button>
                    </div>
                    <div className="mt-4 h-60 overflow-y-auto bg-slate-800 p-3 rounded text-sm">
                        {testResults.length > 0 ? (
                            testResults.map((res, i) => (
                                <div key={i} className={`mb-3 p-2 rounded ${res.passed ? "bg-green-900" : "bg-red-900"}`}>
                                    <p>Input: {res.input}</p>
                                    <p>Expected: {res.expectedOutput}</p>
                                    <p>Output: {res.actualOutput || res.error}</p>
                                </div>
                            ))
                        ) : customOutput ? (
                            <pre>{customOutput}</pre>
                        ) : (
                            <p>No output yet. Run your code to see results.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
