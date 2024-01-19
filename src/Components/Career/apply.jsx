import "./apply.css";
import Dotted from "../../assets/Ellips-e.png";
import Logo1 from "../../assets/Orive Logo1.png";
import Line1 from "../../assets/vec-l.png";
import Save from "../../assets/vec-r.png";
import Share from "../../assets/vec-s.png";
import Info from "../../assets/vec-i.png";
import { CiBookmark } from "react-icons/ci";

const Career = () => {
  return (
    <div className="apply">
      <div className="apply-h">
        <h1>Careers</h1>
        <div className="home-about-dot-a">
          <p>Home</p>
          <img src={Dotted} alt="" />
          <p style={{ color: "#f76c24" }}>Careers</p>
        </div>
      </div>

      <div className="soft-c">
        <div className="sub-h1">
          <h1>Software Developer Engineer </h1>
          <div className="sub-d">
            <div>
              {" "}
              <p>Bhubaneswar</p>
            </div>
            <div>
              {" "}
              <img src={Line1} className="linee lin" />{" "}
              <p className="job">Job No. ATCI-4143163-S1615529</p>
            </div>

            <div>
              {" "}
              <img src={Line1} className="lineee lin" />{" "}
              <p className="fullt">Full Time</p>
            </div>
          </div>
          <div className="btn-ab">
            <button>Apply</button>
            <div className="sa-s">
              <img src={Save} className="img-s" /> <p>Save Job</p>
            </div>
            <div>
              <img src={Share} className=" sh-i img-s" />{" "}
              <p className="sh-s">SHARE</p>
            </div>
            <div>
              <img src={Info} className="sh-r img-s" />
              <p className="sh-rr">REGISTER FOR JOB ALERTS</p>
            </div>
          </div>
          <div className="des-a">
            <h3>Job Description</h3>
            <div className="fir-p">
              <p>
                {" "}
                <span> Project Role : </span>Software Development Engineer{" "}
              </p>
              <p>
                {" "}
                <span> Project Role Description : </span>Analyze, design, code
                and test multiple components of application code across one or
                more clients. Perform maintenance, enhancements and/or
                development work.{" "}
              </p>
              <p>
                <span> Must have skills :</span> SAP Business Objects Data
                Services{" "}
              </p>
              <p>
                {" "}
                <span>Good to have skills : </span>Life Sciences Minimum 5
                year(s) of experience is required
              </p>
              <p>
                {" "}
                <span> Educational Qualification :</span> Degree
              </p>
            </div>
            <div className="sec-p">
              <p>
                Roles and Responsibilities:- Good experience in Data Migration
                as well as SAP BODS as added advantage -Data Migration from
                legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from
                legacy Siebel systems to SAP S4 Hana -Data Migration from legacy
                Oracle data warehouse systems to SAP S4 Hana -Should be able to
                write and develop data validation reports for business and
                technical validations. effective communication with business
                users and should be able to run ad hoc data queries based on the
                business needs. Tools and Experience: -Experience in using
                global parameters and substitution variables -Experience in
                working and using Conditional data flows -Experience in setting
                up data stores -Experience in develop and create file formats
                for exports and imports -Experience in loading data via Idocs
                and BAPI's calls from SAP BODS -Experience in developing and
                loading data with LSMW and Migration -Working knowledge of Power
                BI.
              </p>
            </div>
          </div>
        </div>
        
        <div className="card-styling">
        <div>
          <img src={Logo1} className="logo-ar" />
          <div className="more-j">
            <h3>More Jobs</h3>
          </div>
        </div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          <div
            id="head-line"
            className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <div className=" justify-between items-center gap-8">
              {/* <p>Save</p> */}
              <div>
                <div className="card-p">
                  <h3>INDIA</h3>

                  <h3 className="heading">BHUBANESWAR</h3>
                  <div
                    id="id-save"
                    className="flex items-center text-[#ccc] gap-l"
                  >
                    <CiBookmark />
                    Save
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="text-[20px] font-bold text-textColor  ">
                    <h2>Software Developer Engineer</h2>
                  </div>
                  <div className="card-para">
                    <p>
                      <span>Software Engineer</span> - Project Role: Software
                      Development Engineer Project
                    </p>
                  </div>
                  <div className="card-para">
                    <span>Business Area</span> - Technology
                  </div>
                  <div className="post">
                    <h6>Posted 1 day ago</h6>
                  </div>
                  {/* <p>Posted 1 days ago</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          <div
            id="head-line"
            className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <div className=" justify-between items-center gap-8">
             
              <div>
                <div className="card-p">
                  <h3>INDIA</h3>

                  <h3 className="heading">BHUBANESWAR</h3>
                  <div
                    id="id-save"
                    className="flex items-center text-[#ccc] gap-l"
                  >
                    <CiBookmark />
                    Save
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="text-[20px] font-bold text-textColor  ">
                    <h2>Software Developer Engineer</h2>
                  </div>
                  <div className="card-para">
                    <p>
                      <span>Software Engineer</span> - Project Role: Software
                      Development Engineer Project
                    </p>
                  </div>
                  <div className="card-para">
                    <span>Business Area</span> - Technology
                  </div>
                  <div className="post">
                    <h6>Posted 1 day ago</h6>
                  </div>
                  {/* <p>Posted 1 days ago</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          <div
            id="head-line"
            className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <div className=" justify-between items-center gap-8">
              {/* <p>Save</p> */}
              <div>
                <div className="card-p">
                  <h3>INDIA</h3>

                  <h3 className="heading">BHUBANESWAR</h3>
                  <div
                    id="id-save"
                    className="flex items-center text-[#ccc] gap-l"
                  >
                    <CiBookmark />
                    Save
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="text-[20px] font-bold text-textColor  ">
                    <h2>Software Developer Engineer</h2>
                  </div>
                  <div className="card-para">
                    <p>
                      <span>Software Engineer</span> - Project Role: Software
                      Development Engineer Project
                    </p>
                  </div>
                  <div className="card-para">
                    <span>Business Area</span> - Technology
                  </div>
                  <div className="post">
                    <h6>Posted 1 day ago</h6>
                  </div>
                  {/* <p>Posted 1 days ago</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        
      </div>
      
    </div>
  );
};

export default Career;
