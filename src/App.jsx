import HeroSection from "./components/sections/HeroSection"
import Nav from "./components/NavBar/Nav"
import SportsSection from "./components/sections/SportsSection"
import Trending from "./components/sections/Trending"


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