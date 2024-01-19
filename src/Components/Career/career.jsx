import "./career.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import Vector from "../../assets/Vector 12.png";
import { CiBookmark } from "react-icons/ci";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Dotted from "../../assets/Ellips-e.png";
import Formsg from "../../assets/msgrp.png";
import Filter from "../../assets/Frame 1859.png";
import Square from "../../assets/Frame 1860.png";
import Tline from "../../assets/Frame 1858.png";

const Career = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  

  return (
    <div className="career">
      <div className="career-h">
        <h1>Careers</h1>
        <div className="home-about-dot-c">
          <p>Home</p>
          <img src={Dotted} alt="" />
          <p style={{ color: "#f76c24" }}>Careers</p>
        </div>
      </div>

      <div className="searchDiv grid bg-greyIsh rounded-[10px] p-[2rem]">
      
      <h2>Search Jobs</h2>
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] bg-white p-5 shadow-lg shadow-greyIsh-900">
            <div className="flex items-center input-inp">
              <input
                type="text"
                id="text-placeholder"
                className="bg-transparent"
                placeholder="Search the Job Role you are looking for"
              />
              
            </div>
            <div className="btn-search"><button >
              Search
              <AiOutlineSearch id="id" className="text-[29px] icon" />
            </button>
          </div></div>
        </form>

        <div className="text">
          <h2>Latest Jobs(18)</h2>
          <div className="flex svd-j">
            {" "}
            <div id="id-save" className="flex items-center text-[#ccc] gap-l back-c">
             <p>Saved Jobs</p>  <CiBookmark className="svj-s"/>
            </div>
            
            <div className="img-sq ">
              {" "}
              <img src={Square} alt="" />
            </div>
            <div className="img-sq">
              {" "}
              <img src={Tline} alt="" />
            </div>
            <div className="img-sq">
              {" "}
              <img src={Filter} alt="" />
            </div>
          </div>
        </div>

        <div className="flex gap-20 ">
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>
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

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>
                <div className="text-[20px] font-bold text-textColor  ">
                  <h2>Quality Engineer(Tester)</h2>
                </div>
                <div className="card-para">
                  <p>
                    <span>Quality Engineer (Tester)</span> - Project Role : Quality 
Engineer Project
                  </p>
                </div>

                <div className="card-para">
                  <span>Business Area</span> - Technology
                </div>

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>
                <div className="text-[20px] font-bold text-textColor  ">
                  <h2>UI/UX Designer</h2>
                </div>
                <div className="card-para">
                  <p>
                    <span>Software Engineer</span> - Project Role : UI/UX 
Designer
                  </p>
                </div>

                <div className="card-para">
                  <span>Business Area</span> - Technology
                </div>

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>

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

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>

                <div className="text-[20px] font-bold text-textColor  ">
                  <h2>Quality Engineer(Tester)</h2>
                </div>
                <div className="card-para">
                  <p>
                    <span>Quality Engineer (Tester)</span> - Project Role : Quality 
Engineer Project
                  </p>
                </div>

                <div className="card-para">
                  <span>Business Area</span> - Technology
                </div>

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div
              id="head-line"
              className="group group/items singleJob  h-[200px] w-[400px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
                </div>
                <div className="text-[20px] font-bold text-textColor  ">
                  <h2>UI/UX Designer</h2>
                </div>
                <div className="card-para">
                  <p>
                    <span>Software Engineer</span> - Project Role : UI/UX 
Designer
                  </p>
                </div>

                <div className="card-para">
                  <span>Business Area</span> - Technology
                </div>

                {/* <p>Posted 1 days ago</p> */}
              </div>
              <div className="post">
                <h6>Posted 1 day ago</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stack className="items-center mb-8 " spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </Stack>

      <div className="team-c">
        <div className="form-s">
          <h6>Stay Connected</h6>
          <div className="join-c">
            <h3>Join Our Teams</h3>
            <p>
              Search open positions that match your skills and interest. We look
              for passionate, curious, creative and solution-driven team
              players.
            </p>
          </div>
          <div className="flex gap-10 justify-center flex-wrap items-center py-10 form-cr">
            <form action="" className="form-input-c">
              <h1>Get Jobs Alerts</h1>
              <img src={Formsg} alt="" />

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 form-cw">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Phone Number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="number"
                        name="number"
                        id="number"
                        autoComplete="number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Job Role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Role:
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md form-in">
                      <input
                        type="text"
                        name="jobRole"
                        id="jobRole"
                        autoComplete="jobRole"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your Job Role"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6 btn-sub">
                  <button
                    type="submit"
                    className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
