import styled from "styled-components";
import React, { useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { v4 as uuidv } from "uuid";

const NewIdea = () => {
  const [title, setTitle] = useState([]);
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [newIdeas, setNewIdeas] = useState({});

  const context = useContext(Context);
  console.log(context);
  //handle change function here
  const handleOnChange = (e) => {
    e.preventDefault();
    e.target.id === "title" && setTitle(e.target.value);
    e.target.id === "question1" && setQuestion1(e.target.value);
    e.target.id === "question2" && setQuestion2(e.target.value);
    e.target.id === "question3" && setQuestion3(e.target.value);
    console.log(e.target.value);

    setNewIdeas({
      id: uuidv /* uuidv */,
      title: title,
      question1: question1,
      question2: question2,

      question3: question3,

      totalLikes: [],
      created: "22/01/2021",
    });

    // context.pushNewIdeas(newIdeas);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newUserList = context.userList;
    newUserList[0].ideas = [...newUserList[0].ideas, newIdeas];
    context.setUserList(newUserList);
  };

  //   console.log(e.target.e);
  return (
    <div>
      <IdeaWrapper>
        <IdeaTitle>Send and idea to your peers</IdeaTitle>
        <IdeaQuestions onChange={(e) => handleOnChange(e)}>
          {" "}
          <p>Title</p>
          <input id="title" type="text" placeholder="Title" required />
          <p>Question #1 </p>
          <input
            id="question1"
            type="text"
            placeholder="Answer 1 ..."
            required
          />
          <p>Question #2 </p>
          <input
            id="question2"
            type="text"
            placeholder="Answer 2 ..."
            required
          />
          <p>Question #3 </p>
          <input id="question3" type="text" placeholder="Answer 3 ..."></input>
        </IdeaQuestions>
      </IdeaWrapper>
      <IdeaDiv>
        {/* Save inside of context on click */}
        <SubmitButton onClick={(e) => handleOnSubmit(e)}>Submit</SubmitButton>
      </IdeaDiv>
    </div>
  );
};
export default NewIdea;

const IdeaWrapper = styled.div`
  display: flex;
  max-height: 100vh;
  min-width: 100vw;
  flex-direction: column;

  align-items: left;
`;
const IdeaTitle = styled.h1`
  margin: 20px;
`;

const IdeaQuestions = styled.form`
  padding: 10px;
  justify-content: left;

  input {
    margin: 10px;
    width: 80%;
  }
`;

const IdeaSwipeLeft = styled.h3`
  color: green;
  font-weight: 200;
  margin-top: 20px;
`;

const IdeaSwipeRight = styled.h3`
  color: red;
  font-weight: 200;
  margin-top: 20px;
`;

const IdeaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: red;
  color: white;
  border-radius: 20px;
  margin-top: 20px;
`;
