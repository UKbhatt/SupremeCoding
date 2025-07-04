
export default function Center() {

    const s = "import "
    const s11 = "{ algorithms, dataStructures, optimization } ";
    const s3 = "from ";
    const s4 = "'algolab' "
    const s1 = " The ultimate DSA practice platform with curated problems, live contests, and systematic "
    const s2 = "interview prep.";

    return (

        <div id="center-container">
            <div id="center-container-bar">
                <h5>  $ join --users 150000+ --platform "DSA"   </h5>
            </div>
            <div id="center-content">
                <div id="center-item">Master DSA</div>
                <div id="center-item">Crack <span className="faang">FAANG</span></div>
                <div id="center-item">Build Your Future</div>
            </div>
            <div id="center-content-2">
                <div id="c1">
                    <span id="imp">{s}</span>
                    <span id="algo">{s11}</span>
                    <span id="imp">{s3}</span>
                    <span id="alg">{s4}</span>
                </div>
                <div id="c2">{s1}</div>
                <div id="c3">{s2}</div>
            </div>
            <div className="button-container">
                <button className="solve-btn">
                    $ start --solve-now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="chevron"
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
                <button className="challenges-button">
                    <span>$ view --challenges</span>
                </button>
            </div>

        </div>
    )
}