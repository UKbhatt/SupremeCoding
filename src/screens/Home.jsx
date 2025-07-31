import Navbar from "../components/navbar";
import Center from "../components/center";
import Counter from "../components/counter";
import FeatureCards from "../components/FreatureCards";
import Center2 from "../components/center2";
import TrustedSection from "../components/cn2";
import Footer from "../components/author";
import "../App.css"


export default function Home(){
    return (
        <div className="font-family: 'Segoe UI', sans-serif bg-[#0f0f0f] text-white">
      <Navbar />
      <Center />
      <Counter />
      <div className="w-full py-8 flex justify-center items-center bg-[#0f0f0f]">
  <div className="text-sm font-mono text-green-400 bg-[#1a1a1a] px-4 py-2 rounded shadow">
    <h5>import * as features from './supremeCoding'</h5>
  </div>
</div>

<div className="text-center px-4 py-6">
  <h2 className="text-3xl md:text-4xl font-bold text-white font-sans mb-4">
    Everything to ace <span className="text-orange-400">DSA</span>
  </h2>
  <div className="flex justify-center items-center space-x-2 font-mono text-green-400 text-lg">
    <span className="text-blue-400">const</span>
    <span className="text-white">goal</span>
    <span className="text-pink-400">=</span>
    <span className="text-yellow-400">'land top-tier tech jobs'</span>
    <span className="text-pink-400">;</span>
  </div>
</div>

      <FeatureCards />
      <TrustedSection/>
      <Center2/>
      <Footer />
    </div>
    )
}