import "./Erp.css";
import Dotted from "../../../assets/Dotted.png";
import ErpImage from "../../../assets/Erpi.png";
import Grop from "../../../assets/grop-c.png";
import Grp from "../../../assets/grp-c.png";
import Grp1 from "../../../assets/Group 1410.png";
import Grp2 from "../../../assets/Group 1412.png";
import Grp3 from "../../../assets/Group 1411.png";
import Grp4 from "../../../assets/Group 1413.png";
import Grp6 from "../../../assets/Group 1421.png";
import Grp7 from "../../../assets/Group 1422.png";
import Grp8 from "../../../assets/Group 1425.png";
import Grp9 from "../../../assets/Group 1426.png";
import Point from "../../../assets/point.png";
import Line from "../../../assets/Line.png";

const Journal = () => {
  return (
    <div className="erp">
      <div className="erp-header">
        <h1>Enterprise Resource Planning</h1>
        <div className="erp-litag">
          <ul>
            <li>
              Product
              <span>
                <img src={Dotted} alt=""></img>
              </span>
            </li>
            <span>
              <li style={{ color: "white" }}>ERP</li>
            </span>
          </ul>
        </div>
      </div>
      <div className="erp-blog">
        <div className="erp-description">
          <div className="about-erp">
            {" "}
            <h6>About ERP</h6>
            <h2>The Transformative Role of ERP Solutions in the Digital Era</h2>
            <div className="paragraph-erp">
              <p>
                ERP (Enterprise Resource Planning) is the linchpin of industrial
                operations, providing a crucial backbone to navigate the
                intricacies of diverse processes. In the digital era, industries
                face unique challenges, necessitating robust solutions, and ERP
                software emerges as the ideal answer. Tailored for
                manufacturing, steel, plastic, and construction industries, it
                addresses contemporary needs. The best ERP system in India is
                essential to meet these modern requirements, ensuring businesses
                stay agile in the face of digital advancements.
              </p>
              <p>
                At the heart of ERP's efficacy lie its interconnected modules,
                including finance, accounts, inventory, project management,
                production planning, and supply chain management. This network
                facilitates seamless information flow, stored centrally for
                instant access. Recognizing the imperative role of the best ERP
                for the industry, it becomes an indispensable tool, optimizing
                operations and enabling comprehensive information management in
                today's dynamic business landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="image-erp">
          <img src={ErpImage} alt="Journal Image"></img>
        </div>
      </div>

      <div className="res-erp">
        <div className="feat-s">
          <h6>CHECK OUT OUR THE</h6>
          <div>
            <p>Feature & Benefits</p>
          </div>
          <div className="card-e">
            <div className="back-e">
              <img src={Grp6} alt=""></img>
              <h4>Proven Track Records</h4>
              <p>
                Orive Solution's Delivery Track Record is impeccable And This
                Significantly Differentiates it From its Competitors
              </p>
            </div>
            <div>
              <img src={Grp7} alt=""></img> <h4>Industry Specific Solutions</h4>
              <p>
                Orive Solution's Delivery Track Record is impeccable And This
                Significantly Differentiates it From its Competitors
              </p>
            </div>
            <div>
              <img src={Grp8} alt=""></img> <h4>Result Orieted Delivery</h4>
              <p>
                Orive Solution's Delivery Track Record is impeccable And This
                Significantly Differentiates it From its Competitors
              </p>
            </div>
            <div>
              <img src={Grp9} alt=""></img> <h4>Reduce Total Cost of Ownership</h4>
              <p>
                Orive Solution's Delivery Track Record is impeccable And This
                Significantly Differentiates it From its Competitors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="setence-drs">
        <h6>CHECK OUT OUR THE</h6>
        <p>Core Modules</p>
        <div className="sentence-dr">
       <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Finance and Accounting</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
          <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Sales and Distribution</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
          <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Material Management</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
          <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Manufacturing and Production Planning</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
          <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Order Management</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
          <div><img src={Point} alt="" className="point"></img></div> 
          <h5>Warehouse Management</h5>
          <div><img src={Line} alt="" className="line"></img></div> 
        </div>
      </div>

        <div className="whole-e">
      <div className=" head-i">
        <h3>Industry Specific Solutions</h3>
      </div>
      <div className="indst">
        <div className="gr-t">
          <img src={Grop} alt=""></img>
        </div>
        <div className="gr-l">
          <img src={Grp} alt=""></img>
        </div>
        <div className="gr-li">
          <img src={Grp1} alt=""></img>
          <p>Metals and Minerals Industries</p>
        </div>
        <div className="gr-rp">
          <img src={Grp2} alt=""></img>
          <p>Steel Industries</p>
        </div>
        <div className="gr-li-n">
          <img src={Grp3} alt=""></img>
          <p>Rice Mill</p>
        </div>
        <div className="gr-r">
          <img src={Grp4} alt=""></img>
        <p>Infrastructure & Power Transmission</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Journal;
