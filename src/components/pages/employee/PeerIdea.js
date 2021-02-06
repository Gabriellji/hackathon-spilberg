// import styled from "styled-components";
// import React, { useState } from "react";

// const PeerIdea = () => {
//   const [question1, setQuestion1] = useState([]);
//   const [question2, setQuestion2] = useState([]);
//   const [question3, setQuestion3] = useState([]);

//   //handle change function here
//   const handleOnChange = (e) => {};
//   //   console.log(e.target.e);
//   return (
//     <div>
//       <IdeaWrapper>
//         <IdeaTitle>Vote for a Peer Idea</IdeaTitle>
//         <IdeaQuestions onChange={(e) => handleOnChange(e)}>
//           {" "}
//           <p id="question1">Question #1 </p>
//           <p id="question1">Question #2 </p>
//           <p id="question1">Question #3 </p>
//         </IdeaQuestions>
//       </IdeaWrapper>
//       <IdeaDiv>
//         <IdeaSwipeLeft> Swipe left if you like this</IdeaSwipeLeft>

//         <IdeaSwipeRight> Swipe right if you don't</IdeaSwipeRight>

//         {/* Save inside of context on click */}
//         <ReportButton>Report</ReportButton>
//       </IdeaDiv>
//     </div>
//   );
// };
// export default PeerIdea;

// const IdeaWrapper = styled.div`
//   display: flex;
//   max-height: 100vh;
//   min-width: 100vw;
//   flex-direction: column;

//   align-items: left;
// `;
// const IdeaTitle = styled.h1`
//   margin: 20px;
// `;

// const IdeaQuestions = styled.p`
//   padding: 10px;
//   justify-content: left;

//   input {
//     margin: 10px;
//     width: 80%;
//   }
// `;

// const IdeaSwipeLeft = styled.h3`
//   color: green;
//   font-weight: 200;
//   margin-top: 20px;
// `;

// const IdeaSwipeRight = styled.h3`
//   color: red;
//   font-weight: 200;
//   margin-top: 20px;
// `;

// const IdeaDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ReportButton = styled.button`
//   width: 100px;
//   height: 30px;
//   background-color: red;
//   color: white;
//   border-radius: 20px;
//   margin-top: 20px;
// `;
