import { Routes, Route} from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar"
import Footer from "../src/Components/Footer/Footer"
import Home from "../src/Components/Home/Home"
import Who from "../src/Components/WhoWeAre/WhoWeAre/who";
import Journal from "../src/Components/Journal/Journal";
import ReachUs from "../src/Components/ReachUs/ReachUs";
import JournalDetails from "../src/Components/JournalDetails/Journal";
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/who" element={<Who/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/reachus" element={<ReachUs/>}/>
        <Route path="/journalD" element={<JournalDetails/>}/>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
