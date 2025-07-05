import '../App.css';

export default function Center2() {

    return (
        <div className="centered-full-screen">
            <div id="center-container-bar-2">
                <h5>class TrustedPlatform extends AlgoLab</h5>
            </div>
            <div className='center-container-heading-2'>
                Ready to <span id='elevate'>elevate</span> your coding<br /> skills?
            </div>
            <div className='center-container-part-2'>
                Start your journey toward algorithmic mastery and interview success today.
            </div>

            <div className='button-container-2'>
                <button className="solve-btn">
                    $ start signup --free
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
             <div className="inline-code-highlights">
      <div className="code-item">
        <span className="dot green" />
        <code>no_credit_card_required = true;</code>
      </div>
      <div className="code-item">
        <span className="dot blue" />
        <code>free_problems.length === 100;</code>
      </div>
      <div className="code-item">
        <span className="dot purple" />
        <code>canUpgrade = "anytime";</code>
      </div>
    </div>
        </div>
    )
}