import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimpleNav from "../components/simpleNav";


export default function SolutionScreen() {
    const { slug } = useParams();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/questions/${slug}`)
            .then((res) => res.json())
            .then((data) => setQuestion(data))
            .catch((err) => console.error("Error in fetching question:", err));
    }, [slug])

    if (!question) return <div>Loading...</div>;
    else console.log(question);

    return (
        <div className="bg-[#0f0f0f] min-h-screen w-full">
            <SimpleNav />
            <div className="flex flex-wrap flex-row">
                <div className="h-full w-[50%] p-5 text-white">
                    <h1 className="text-2xl font-black pb-3">{question.id}.{question.name}</h1>
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${question.difficulty === "Easy"
                            ? "bg-green-600/20 text-green-400"
                            : question.difficulty === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-600/20 text-red-400"
                            }`}
                    >
                        {question.difficulty}
                    </span>
                    <h1 className="text-sm pt-3 font-bold pb-3">{question.description}</h1>

                    {question.sampleInput.map((inputVal, index) => (
                        <div key={index} className="mb-2">
                            <h1 className="text-white">Example: {inputVal}</h1>
                            <h1 className="text-white">Solution: {question.sampleOutput[index]}</h1>
                        </div>
                    ))}

                    <h1>Constraints:</h1>
                    {question.constraints.map((constraint, i) => (
                        <div key={i} className="flex flex-wrap flex-row mb-1">
                            <h1 className="text-white">• {constraint}</h1>
                        </div>
                    ))}

                </div>
                <div className="h-full w-[50%] p-5 ">
                    <h1 className="text-white">Sample Input :{question.sampleInput}</h1>
                </div>
            </div>
        </div>
    )
}