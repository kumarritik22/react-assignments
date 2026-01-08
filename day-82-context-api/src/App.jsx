import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App
