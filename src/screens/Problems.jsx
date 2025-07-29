import { useEffect, useState } from "react";
import "../index.css";

export default function ProblemTable() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/questions")
            .then((res) => res.json())
            .then((data) => setProblems(data))
            .catch((err) => console.error("Error fetching problems:", err));
    }, []);

    return (
        <div className="p-4 justify-center ">
            <h2 className="text-2xl font-semibold mb-4">📋 Problem Tracker</h2>
            <table className="table-auto w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2 text-left">Title</th>
                        <th className="border px-4 py-2">Difficulty</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Acceptance</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((p, index) => (
                        <tr key={p.slug} className="text-center">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2 text-left">{p.name}</td>
                            <td
                                className={`border px-4 py-2 ${p.difficulty === "Easy"
                                        ? "text-green-600 bg-green-200"
                                        : p.difficulty === "Medium"
                                            ? "text-yellow-600 bg-yellow-200"
                                            : "text-red-600 bg-red-200"
                                    }`}
                            >
                                {p.difficulty}
                            </td>
                            <td
                                className={
                                    p.status === "Solved"
                                        ? "text-green-500 border px-4 py-2"
                                        : "text-gray-500 border px-4 py-2"
                                }
                            >
                                {p.status === "Solved" ? "✅" : "⏳"} {p.status || "Not Attempted"}
                            </td>
                            <td className="border px-4 py-2">{p.acceptance || "—"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
