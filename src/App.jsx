import Navbar from "./components/navbar";
import Center from "./components/center";
import Counter from "./components/counter";
import FeatureCards from "./components/FreatureCards";
import Center2 from "./components/center2";
import "./App.css" ; 

function App() {

  return (
    <>
      <Navbar />
      <Center />
      <Counter />
      <div className="centered-full-screen">
        <div id="center-container-bar-2">
          <h5>import * as features from './algolab'</h5>
        </div>
      </div>
      <div id="center-container-heading">
        <span className="Text-main">Everything to ace <span id="Dsa">DSA</span></span>
        <h5 className="Text-goal">
          <div id="const">
            const
          </div>
          <div id="goal">
            goal
          </div>
          <div id="equal">
            =
          </div>
          <div id="land">
            'land top-tier tech jobs'
          </div>
          <div id="semi">
            ;
          </div>
        </h5>
      </div>
      <FeatureCards />
      <Center2/>
    </>
  )
}

export default App
