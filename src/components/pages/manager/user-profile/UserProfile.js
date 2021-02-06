import "./style.css";

const UserProfile = ({ id, name, position, onClick }) => {
  return (
    <div className="user-profile_wrap" id={id} onClick={(e) => onClick(e)}>
      <p id={id} >{name}</p>
      <p id={id} >{position}</p>
    </div>
  );
};

export default UserProfile;
