import { user } from "../../../../data/data";
import UserProfile from "../user-profile/UserProfile";
import React, { useState } from "react";

import './style.css';

import Modal from "react-modal";

Modal.setAppElement("#root");

const EmployeeList = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      {user.map((employee) => (
        <UserProfile name={employee.name} position={employee.position} onClick={toggleModal}/>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default EmployeeList;
