import { useEffect, useState } from "react";
import SimpleNav from "../components/simpleNav";
import { useNavigate } from "react-router-dom";
import "../index.css";


export default function ProblemTable() {
    const [problems, setProblems] = useState([]);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.REACT_APP_API_URL ; 

    useEffect(() => {
        fetch(`${baseUrl}/questions`)
            .then((res) => res.json())
            .then((data) => setProblems(data))
            .catch((err) => console.error("Error fetching problems:", err));
    }, []);

    return (
        <>
            <SimpleNav />
            <div className="bg-[#0f0f0f] min-h-screen w-full text-white">
                <div className="p-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-white">📋 Problem Tracker</h2>
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-700 bg-[#0f0f0f]/80 backdrop-blur-md">
                        <table className="table-auto w-full">
                            <thead className="bg-[#0f0f0f] text-gray-200 ">
                                <tr>
                                    <th className="px-4 py-3 text-left">#</th>
                                    <th className="px-4 py-3 text-left">Title</th>
                                    <th className="px-4 py-3 text-center">Difficulty</th>
                                    <th className="px-4 py-3 text-center">Status</th>
                                    <th className="px-4 py-3 text-center">Acceptance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {problems.map((p, index) => (
                                    <tr
                                        key={p.slug}
                                        className="border-t border-slate-700 hover:bg-[#383838] hover:text-blue-400 cursor-pointer"
                                        onClick={() => { navigate(`/solve/${p.slug}`) }}
                                    >
                                        <td className="px-4 py-3 ">{index + 1}</td>
                                        <td className="px-4 py-3 text-left cursor-pointer">{p.name}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold ${p.difficulty === "Easy"
                                                    ? "bg-green-600/20 text-green-400"
                                                    : p.difficulty === "Medium"
                                                        ? "bg-yellow-500/20 text-yellow-400"
                                                        : "bg-red-600/20 text-red-400"
                                                    }`}
                                            >
                                                {p.difficulty}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            {p.status === "Solved" ? (
                                                <span className="text-green-400">✅ Solved</span>
                                            ) : (
                                                <span className="text-gray-400">⏳ {p.status || "Not Attempted"}</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-center">{p.acceptance || "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
