
export default function Center() {

    const s = "import "
    const s11 = "{ algorithms, dataStructures, optimization } ";
    const s3 = "from ";
    const s4 = "'algolab' "
    const s1 = " The ultimate DSA practice platform with curated problems, live contests, and systematic "
    const s2 = "interview prep.";

    return (

        <div className="font-mono mt-7 flex flex-col items-center justify-center w-full h-1/2">
            <div className="text-xl bg-transparent rounded-2xl px-6 py-2 gap-2 tracking-wider border border-blue-500 text-blue-400 mx-auto w-fit">
                <h5>  $ join --users 150000+ --platform "DSA"   </h5>
            </div>
            <div className="p-12 flex flex-col items-center justify-center w-full h-full gap-2">
                <div className="font-mono font-black text-gray-300 text-6xl tracking-wide">Master DSA</div>
                <div className="font-mono font-black text-gray-300 text-6xl tracking-wide">Crack <span className="bg-gradient-to-r from-cyan-400 to-indigo-700 bg-clip-text text-transparent font-extrabold">FAANG</span></div>
                <div className="font-mono font-black text-gray-300 text-6xl tracking-wide">Build Your Future</div>
            </div>
            <div className="font-mono text-center flex flex-col text-lg font-medium gap-1 p-2 justify-center items-center">
                <div id="c1">
                    <span id="imp">{s}</span>
                    <span id="algo">{s11}</span>
                    <span id="imp">{s3}</span>
                    <span id="alg">{s4}</span>
                </div>
                <div id="c2">{s1}</div>
                <div id="c3">{s2}</div>
            </div>
            <div className="mt-6 flex flex-row items-center gap-5">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-2 font-mono font-semibold text-base text-white rounded-lg bg-blue-700 cursor-pointer transition-all duration-300 shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:scale-105 hover:shadow-xl">
                    $ start --solve-now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-2 font-mono font-semibold text-base text-white rounded-lg bg-transparent cursor-pointer transition-all duration-300 shadow-md border-2 border-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-xl">
  <span className="w-full whitespace-nowrap">$ view --challenges</span>
</button>

            </div>

        </div>
    )
}