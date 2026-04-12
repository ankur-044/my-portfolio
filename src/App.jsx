import Navbar from "./Components/Navbar"
import Aboutus from "./pages/Aboutus"
import Contactus from "./pages/Contactus"
import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
      
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Aboutus/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contactus/>}/>
      </Routes>

    </>
  )
}

export default App
