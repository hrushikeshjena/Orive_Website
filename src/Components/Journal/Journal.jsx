import "./journal.css";
import Dotted from "../../assets/Ellips-e.png";
import JournalImage from "../../assets/JournalImage.png";
import ArrowTop from "../../assets/arrow-top.png";
import Person from "../../assets/person.png";
import Calender from "../../assets/Calender.png";
import Blog from "../Journal/Blog"

const Journal = () => {

  const date = new Date();
  return (
    <>
      <div className='journal'>
        <div className='journal-header'>
          <h1>Journals</h1>
          <div className='journal-litag'>
            <ul>
              <li>Home<span><img src={Dotted} alt="Dotted Image"></img></span></li>
              <span><li>Journals</li></span>
            </ul>
          </div>
        </div>
        <div className='journal-blog'>
          <div className='journal-description'>
            <div className="button-machine" type="button">
              <button>Machine Learning </button>
            </div>
            <h2>Machine Learning Trends Shaping
              Tomorrow's Technology Landscape
            </h2>
            <div className="person-clander">
              <div className='person'>
                <img src={Person} alt='person-image' />
                <p>By Monalisa Rout</p>
              </div>
              <div className='calender'>
                <img src={Calender} alt='calender-image' />
                <p>{date.toDateString()}</p>
              </div>
            </div>
            <div className="button-readblog" type="button">
              <button>
                Read Blog <img src={ArrowTop} className="arrow-top"></img>
              </button>
            </div>
          </div>
          <div className='journal-image'>
            <img src={JournalImage} alt="Journal Image"></img>
          </div>
        </div>
      </div>

      <Blog />
    </>

  );
};

export default Journal;