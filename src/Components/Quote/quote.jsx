// import React, { useState } from "react";
// import "./quote.css";

// const Quote = () => {
//   //   const [activeQuestion, setActiveQuestion] = useState(null);

//   //   const handleQuestionClick = (index) => {
//   //     setActiveQuestion(activeQuestion === index ? null : index);
//   //   };
//   //   const getSymbol = (index) => {
//   //     return activeQuestion === index ? '-' : '+';
//   //   };

//   //   const handleInput = () => {
//   //     // Handle input logic if needed
//   //   };
//   const [expandedQuestions, setExpandedQuestions] = useState(
//     Array(5).fill(false)
//   );

//   const handleQuestionClick = (index) => {
//     const newExpandedQuestions = [...expandedQuestions];
//     newExpandedQuestions[index] = !newExpandedQuestions[index];
//     setExpandedQuestions(newExpandedQuestions);
//   };

//   const getSymbol = (index) => {
//     return expandedQuestions[index] ? "-" : "+";
//   };

//   const handleInput = () => {
//     // Handle input logic if needed
//   };

//   return (
//     <div>
//       <div className="quote">
//         <div className="form-s">
//           <form action="" className="form-i">
//             <h1>Get Quote</h1>

//             <div className="form-m">
//               <label htmlFor="name"></label>
//               <input
//                 type="text"
//                 autoComplete="off"
//                 value=""
//                 onChange={handleInput}
//                 placeholder="Enter Your Name"
//                 name="name"
//                 id="name"
//               ></input>
//             </div>
//             <div className="form-m">
//               <label htmlFor="email"></label>
//               <input
//                 type="email"
//                 autoComplete="off"
//                 value=""
//                 onChange={handleInput}
//                 placeholder="E-mail Address"
//                 name="email"
//                 id="email"
//               ></input>
//             </div>
//             <div className="form-m">
//               <select>
//                 <option> Select Services</option>
//                 <option value="Mercedes"> Mercedes</option>
//                 <option value="Audi"> Audi</option>
//                 <option value="Skoda"> Skoda</option>
//               </select>
//             </div>
//             <div className="form-m">
//               <label htmlFor="name"></label>
//               <input
//                 type="text"
//                 autoComplete="off"
//                 value=""
//                 onChange={handleInput}
//                 placeholder=""
//                 name="name"
//                 id="name"
//               ></input>
//             </div>
//             <div className="button-sub">
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>

//         <div className="sentence-d">
    
//           <h5
//             onClick={() => handleQuestionClick(0)}
//             className={expandedQuestions[0] ? "active" : ""}
//           >
//             01. Why choose Orive Solutions? 
//           </h5>
//           {expandedQuestions[0] && (
//             <p>
//               Choose us for unparalleled IT excellence. We deliver tailored
//               solutions, ensuring seamless integration, enhanced efficiency, and
//               optimal performance. Trust our proven track record for innovation
//               and client satisfaction. Your success is our priority; experience
//               the difference with our IT services.
//             </p>
//           )}
//           <h5
//             onClick={() => handleQuestionClick(1)}
//             className={expandedQuestions[1] ? "active" : ""}
//           >
//              02. What services does Orive Solutions provide?
//           </h5>
//           {expandedQuestions[1] === 1 && (
//             <p>
//               Donec placerat, lectus sed mattis semper, neque lectus feugiat
//               lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//               laoreet laoreet.
//             </p>
//           )}
//           <h5
//             onClick={() => handleQuestionClick(1)}
//             className={expandedQuestions[2] ? "active" : ""}
//           >
//             03. Why is technology & IT services important
//           </h5>
//           {expandedQuestions[2] === 2 && (
//             <p>
//               Donec placerat, lectus sed mattis semper, neque lectus feugiat
//               lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//               laoreet laoreet.
//             </p>
//           )}
//           <h5
//             onClick={() => handleQuestionClick(1)}
//             className={expandedQuestions[3] ? "active" : ""}
//           >
//             04. Is your business bringing good results from technology 
//           </h5>
//           {expandedQuestions[3] === 3 && (
//             <p>
//               Donec placerat, lectus sed mattis semper, neque lectus feugiat
//               lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//               laoreet laoreet.
//             </p>
//           )}
//           <h5
//             onClick={() => handleQuestionClick(1)}
//             className={expandedQuestions[4] ? "active" : ""}
//           >
//             05. What our IT consultants suggest on new topics
//           </h5>
//           {expandedQuestions[4] === 4 && (
//             <p>
//               Donec placerat, lectus sed mattis semper, neque lectus feugiat
//               lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//               laoreet laoreet.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quote;

import React from 'react';
import "./quote.css";
import Accordion from '../Accordian/Accordian';
const quote = () => {

    const handleInput = () => {
    }
    return (
        <div>
            <div className="quote">
                <div className='form-s'>
                    <form action='' className='form-i'>
                        <h1>Get Quote</h1>
                        <div className='form-m'>
                            <label htmlFor='name'></label>
                            <input type='text' autoComplete='off' value="" onChange={handleInput} placeholder='Enter Your Name' name='name' id='name'></input>

                        </div>
                        <div className='form-m'>
                            <label htmlFor='email'></label>
                            <input type='email' autoComplete='off' value="" onChange={handleInput} placeholder='E-mail Address' name='email' id='email'></input>
                        </div>
                        <div className='form-m'>
                            <select>
                                <option> Select Services
                                </option>
                                <option value="Mercedes"> Mercedes
                                </option>
                                <option value="Audi"> Audi
                                </option>
                                <option value="Skoda"> Skoda
                                </option>
                            </select>
                        </div>
                        <div className='form-m'>
                            <textarea>

                            </textarea>

                        </div>
                        <div className='button-sub'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>

                <div className='sentence-d'>
                    <Accordion/>
                </div>

            </div>
        </div>
    )
}

export default quote
