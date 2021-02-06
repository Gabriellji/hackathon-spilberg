import { Context } from "../../../../context/Context";
import { user } from "../../../../data/data";
import UserProfile from "../user-profile/UserProfile";
import React, { useState, useContext } from "react";
import SearchPanel from "../search-panel/SearchPanel";
import styled from 'styled-components';
import { theme } from "../../../../data/theme";

import TopBtn from "../../../../components/Navbar/TopBtns"
import "./style.css";

import Modal from "react-modal";
import UserIdea from "../user-idea/UserIdea";

Modal.setAppElement("#root");

const StyledEmployeeList = styled.div`
  width: 100%;
  padding: 8px; 
`;

const StyledFilteredPeople = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
gap: 8px;

@media (min-width: 376px){
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
}
`;

const EmployeeList = ({ location }) => {
  const { likeHandler } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState("");
  const [value, setValue] = useState("");
  const [people, setPeople] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    const person = user.filter((element) => element.name.includes(value));
    setPeople(person);
  };

  const filteredPeople = user.filter(el => 
    el.name.toLowerCase().includes(value.toLocaleLowerCase())
    )

  const toggleModal = (e) => {
    const human = user.find((element) => element.id === e.target.id);
    setEmployee(human);
    setIsOpen(!isOpen);
    console.log(location);
  };

  return (
    <StyledEmployeeList>
      <SearchPanel
        value={value}
        onChange={handleOnChange}
        onClick={clickHandler}
      />
      <StyledFilteredPeople>
        { filteredPeople.map((employee) => (
          <UserProfile
            key={employee.id}
            id={employee.id}
            name={employee.name}
            position={employee.position}
            onClick={toggleModal}
          />
        ))}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          {employee && (
            <UserIdea
              onClick={likeHandler}
              location={location.pathname}
              key={employee.id}
              id={employee.id}
              name={employee.name}
              title={employee.ideas[0].title}
              question1={employee.ideas[0].question1}
              question2={employee.ideas[0].question2}
              question3={employee.ideas[0].question3}
              totalLikes={employee.ideas[0].totalLikes.length}
              created={employee.ideas[0].created}
            />
          )}
          <TopBtn action={toggleModal} text="Close" />
        </Modal>
      </StyledFilteredPeople>
    </StyledEmployeeList>
  );
};

export default EmployeeList;
