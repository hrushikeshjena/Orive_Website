import MainFile from "../MainFile/MainFile";
import AboutCompany from "../AboutCompany/aboutCompany";
import Card from "../Card/Card";
import Quote from "../Quote/quote";
import Banner from "../Banner/banner";
import Main from "../Blog/Main";
import "./Home.css";
import { useState, useEffect } from "react";
import ReachUsForm from "../ReachusForm/form";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-ka-baap")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);

  return (
    <>
      {" "}
      {open && (
        <div className="modal-ka-baap" onClick={handleOverlayClick}>
        
          <div className="modal-div"><ReachUsForm setOpen={setOpen}/></div>
        </div>
      )}
      <MainFile />
      <AboutCompany />
      <Card />
      <Main />
      <Quote />
      <Banner />
    </>
  );
};

export default Home;
