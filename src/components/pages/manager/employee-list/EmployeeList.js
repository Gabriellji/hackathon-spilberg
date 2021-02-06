import { Context } from "../../../../context/Context";
import { user } from "../../../../data/data";
import UserProfile from "../user-profile/UserProfile";
import React, { useState, useContext } from "react";
import { FaWindowClose } from "react-icons/fa";

import "./style.css";

import Modal from "react-modal";
import UserIdea from "../user-idea/UserIdea";

Modal.setAppElement("#root");

const EmployeeList = ({ location }) => {

  const { likeHandler } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState("");

  const toggleModal = (e) => {
    const human = user.find((element) => element.id === e.target.id);
    setEmployee(human);
    setIsOpen(!isOpen);
    console.log(location);
  };

  return (
    <div className="employee_wrap">
      <div className="employee-inner_wrap">
        {user.map((employee) => (
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
          <div>
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
          </div>
          <FaWindowClose className="close_btn" onClick={toggleModal}/>
        </Modal>
      </div>
    </div>
  );
};

export default EmployeeList;
