import { Routes, Route} from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer"
import Home from "../src/Components/Home/Home"
import Who from "../src/Components/WhoWeAre/who";
import Journal from "../src/Components/Journal/Journal";
import ReachUs from "../src/Components/ReachUs/ReachUs";
import JournalDetails from "../src/Components/JournalDetails/Journal";
import RiceMill from './Components/RiceMill/riceMill';
import HRM from '../src/Components/HRM/hrms';
import ERP from '../src/Components/Resources/Erp/Erp';
import ReachUsForm from "./Components/ReachusForm/form";

function App() {

  return (
    <>
    {/* <Caro/> */}
    <Navbar/>
    {/* <ReachUsForm/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/who" element={<Who/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/reachus" element={<ReachUs/>}/>
        <Route path="/journalDetails" element={<JournalDetails/>}/>
        <Route path="/ricemill" element={<RiceMill/>}/>
        <Route path="/hrms" element={<HRM/>}/>
        <Route path="/erp" element={<ERP/>}/>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    <Footer/> 
    </>
  )
}

export default App
