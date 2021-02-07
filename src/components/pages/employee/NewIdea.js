import styled from "styled-components";
import React, { useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { v4 as uuidv } from "uuid";
import { theme } from "../../../data/theme";

import TopBtn from "../../Navbar/TopBtns";

const IdeaWrapper = styled.div`
  padding: 8px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${theme.color.orange};
  border-radius: 10px;

  @media (min-width: 376px) {
    border: none;

    button {
      width: auto;
      margin-left: auto;
    }
  }
`;

const IdeaTitle = styled.h1`
  text-align: center;
`;

const IdeaQuestions = styled.form`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: left;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      font-size: 18px;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid ${theme.color.orange};
      border-radius: 10px;
      line-height: 32px;
      padding: 4px;
      resize: vertical;
      background-color: ${theme.color.grey};
    }
  }
`;

const NewIdea = () => {
  const [title, setTitle] = useState([]);
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [newIdeas, setNewIdeas] = useState({});
  const [isAccepted, setIsAccepted] = useState(true);

  const context = useContext(Context);
  //handle change function here
  const handleOnChange = e => {
    e.preventDefault();
    setIsAccepted(true);
    e.target.id === "title" && setTitle(e.target.value);
    e.target.id === "question1" && setQuestion1(e.target.value);
    e.target.id === "question2" && setQuestion2(e.target.value);
    e.target.id === "question3" && setQuestion3(e.target.value);

    setNewIdeas({
      id: uuidv /* uuidv */,
      title: title,
      question1: question1,
      question2: question2,

      question3: question3,

<<<<<<< HEAD
      totalDislikes: [],
      totalLikes: [],
      created: "22/01/2021",
=======
      totalDislikes:[], totalDislikes:[], totalDislikes:[], totalDislikes:[], totalDislikes:[], totalDislikes:[], totalLikes: [],
      created: "06/02/2021",
>>>>>>> b0c598c19f90341712a578bd406aaf9a600f26e1
    });

    // context.pushNewIdeas(newIdeas);
  };
  const handleOnSubmit = e => {
    const addToContext = () => {
      console.log("ok");
      let newUserList = context.userList;
      newUserList[0].ideas = [...newUserList[0].ideas, newIdeas];
      context.setUserList(newUserList);
      setTitle("");
      setQuestion1("");
      setQuestion2("");
      setQuestion3("");
      alert("New Idea submitted, thank you!");
    };
    e.preventDefault();
    context.scrollTop();
    title.length > 0 && question1.length > 0 && question2.length > 0
      ? addToContext() 
      : setIsAccepted(false);
  };

  return (
    <IdeaWrapper>
      <IdeaTitle>Send an IDEA to your peers</IdeaTitle>
      {!isAccepted && <p>Please compile the form correctly</p>}
      <IdeaQuestions onChange={e => handleOnChange(e)}>
        {" "}
        <div>
          <p>Title</p>
          <input
            id="title"
            type="text"
            placeholder="Name of your IDEA..."
            value={title}
            required
          />
        </div>
        <div>
          <p>Question 1:</p>
          <p>
            "What problem does this IDEA solve? / What process will be enhanced
            by my IDEA?"
          </p>
          <textarea
            id="question1"
            type="text"
            placeholder="Answer 1 ..."
            required
            rows="4"
            value={question1}
          />
        </div>
        <div>
          <p>Question 2:</p>
          <p>
            {" "}
            "How my IDEA will improve the current process or setup a new
            process?"
          </p>
          <textarea
            id="question2"
            type="text"
            placeholder="Answer 2 ..."
            required
            rows="4"
            value={question2}
          />
        </div>
        <div>
          <p>Question 3:</p>
          <p>"What part of the current process is not optimal (optional)"</p>
          <textarea
            id="question3"
            type="text"
            placeholder="Answer 3 ..."
            rows="4"
            value={question3}
          />
        </div>
      </IdeaQuestions>
      {/* Save inside of context on click */}
      <TopBtn action={e => handleOnSubmit(e)} text="Submit" width="full" />
    </IdeaWrapper>
  );
};
export default NewIdea;
