import "./Journal.css";
import Dotted from "../../assets/Dotted.png";
import JournalImage from "../../assets/JournalImage.png";
import ArrowTop from "../../assets/ArrowTop.png";
import Person from "../../assets/person.png";
import Calender from "../../assets/Calender.png";
import MachineLearning from "../../assets/MachineLearning.png";

const Journal = () => {
  const date = new Date();

  const handleInput = () => {};
  return (
    <div className="journal">
      <div className="journal-header">
        <h1 className="fw-bold">Journals</h1>
        <div className="journal-litag">
          <ul className="d-flex justify-content-center fw-bold">
            <li>
              Home
              <span>
                <img src={Dotted} alt="Dotted Image"></img>
              </span>
            </li>
            <li>
              Journals
              <span>
                <img src={Dotted} alt="Dotted Image"></img>
              </span>
            </li>
            <li style={{ color: "#F76C24" }}>Journal Details</li>
          </ul>
        </div>
      </div>
      <div className="journal-blog">
        <div className="journal-description">
          <div className="button-machine" type="button">
            <button className="">Machine Learning </button>
          </div>
          <h2 style={{fontWeight:'600'}} id="ml-des">Machine Learning Trends Shaping Tomorrow Technology Landscape</h2>
          <div className="person-clander">
            <div className="person">
              <img src={Person} alt="person-image" />
              <p className="my-auto">By Monalisa Rout</p>
            </div>
            <div className="calender">
              <img src={Calender} alt="calender-image" />
              <p className="my-auto">{date.toDateString()}</p>
            </div>
          </div>
        </div>
        <div className="img-journal-bg">
          <img src={JournalImage} alt="Journal Image" className="img-side-ml"></img>
        </div>
      </div>

      <div className="ourBlog">
        <div className="ourBlog-description">
          <div className="ourBlog-para">
            <p>
              Machine learning (ML) isn’t new. However, the field of big data is
              revitalizing the subject and more organizations are relying on ML
              models to scale their operations, support staff in working better
              and faster, to uncover hidden insights from data, or even confirm
              and challenge underlying assumptions. This is creating widespread
              interest in related topics with the C-suite, and across business
              lines and job roles, as enterprises embrace the value of
              artificial intelligence (AI) and ML. To make a disruptive
              organizational impact, AI and ML need to be understood and
              trusted. By consulting these ML blogs from authoritative
              individuals and organizations that satisfy different skill levels,
              readers can increase their understanding and comfort level in
              these areas, get pressing questions answered, and connect with
              others who have experience using them to great benefit.
            </p>
          </div>
          <ul>
            <li>
              <h4>
                <span>1.</span>OpenAI
              </h4>
              <p>
                OpenAI comes from industry experts who want to bring AI to the
                masses. Its linked to the non-profit research company OpenAI,
                co-chaired by Elon Musk and Sam Altman, and sponsored by
                companies such as Amazon Web Services, Microsoft, and Infosys
                who are trying to make AI accessible—hence the name.
                Contributors discuss their collective efforts to promote and
                advance AI technologies through long-term research. It’s a
                valuable resource for anyone interested in the future of AI.
              </p>
            </li>

            <li>
              <h4>
                <span>2.</span>Distill
              </h4>
              <p>
                Managed by: Shan Carter, Chris Olah, and Arvind Satyanarayan
                Distill concentrates on making ML and AI more accessible for
                readers. Traditional research can be difficult to consume, so
                Distill communicates ML research in appealing, interactive data
                visualizations. It acts as a neutral platform for multiple
                authors to publish together, and articles are peer-reviewed,
                appearing in Google Scholar. Distill is also registered with the
                Library of Congress and CrossRef.
              </p>
            </li>
            <li>
              <h4>
                <span>3.</span>Machine Learning is Fun
              </h4>
              <p>
                Authored by: <span> Adam Geitgey</span>
              </p>
              <p>
                Machine Learning is Fun is a valuable, introductory blog. It
                covers the tenets of ML through interactive tutorials and
                practical examples, which make it easier to see the useful
                applications to different businesses and industries. Author Adam
                Geitgey is a former software developer who now consults
                organizations on implementing machine learning. He believes ML
                is integral to the future of software and that developers should
                have a strong working knowledge, so he provides guides and
                techniques to help them develop and grow.
              </p>
              <img src={MachineLearning} alt="MachineLearning Image"></img>
            </li>

            <li>
              <h4>
                <span>4.</span>Machine Learning Mastery
              </h4>
              <p>
                A machine learning developer with several AI-related degrees,
                Jason intended his Machine Learning Mastery blog for new
                developers getting started in the field. He was once an amateur
                developer and wants to help others, imparting lessons learned
                during his professional journey and sharing the tools that
                helped him most. The blog, plus his email course and newsletter,
                accommodate any level of expertise.
              </p>
            </li>
            <li>
              <h4>
                <span>5.</span>FastML
              </h4>
              <p>
                Managed by:<span> Zygmunt Zając</span>
              </p>
              <p>
                FastML tackles interesting topics in machine learning with
                entertaining, easy to consume posts. It’s run by economist
                Zygmunt Zając, and is a go-to ML platform, tackling topics like
                overfitting, pointer networks, and chatbots, among others. If
                you’re frustrated by some of the existing ML papers that feel
                like you need a PhD in math to understand them, bookmark this
                blog.
              </p>
            </li>

            <li>
              <h4>
                <span>6.</span>AWS Machine Learning Blog
              </h4>
              <p>
                Amazon is heavily involved in ML, using algorithms in nearly all
                areas of its business to create leads. Algorithms suggest
                relevant products for customers in search results, recommend
                products based on recent purchases, and optimize faster product
                distribution and shipping from warehouses to customers. The blog
                features projects and guides that reveal industry strides to
                readers and covers ML uses in Amazon Web Services technology.
              </p>
            </li>
          </ul>
        </div>
        <div className="ourBlog-from">
          <form action="" className="form-o">
            <h1>Need Help With Development?</h1>
            <div className="in-form">
              <div className="form-ob">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  autoComplete="off"
                  value=""
                  onChange={handleInput}
                  placeholder="Enter Your Name"
                  name="name"
                  id="name"
                ></input>
              </div>
              <div className="form-ob">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  autoComplete="off"
                  value=""
                  onChange={handleInput}
                  placeholder="Email Address"
                  name="email"
                  id="email"
                ></input>
              </div>
              <div className="form-ob">
                <select>
                  <option> Select Services</option>
                  <option value="Mercedes"> Mercedes</option>
                  <option value="Audi"> Audi</option>
                  <option value="Skoda"> Skoda</option>
                </select>
              </div>
              <div className="form-ob">
                <label htmlFor="message"></label>
                <input
                  style={{ height: "120px", paddingBottom: "75px" }}
                  type="text"
                  autoComplete="off"
                  value=""
                  onChange={handleInput}
                  placeholder="Message"
                  name="name"
                  id="name"
                ></input>
              </div>
              <div className="button-submi">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Journal;
