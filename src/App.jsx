import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"
import SportsSection from "./components/SportsSection"
import Trending from "./components/Trending"

function App() {
  return (
    <div id="App">
      <Nav/>
      <HeroSection/>
      <Trending/>
      <SportsSection/>  
    </div>
  )
}

export default App