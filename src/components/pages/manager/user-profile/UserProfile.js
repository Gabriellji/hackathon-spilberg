import "./style.css";

const UserProfile = ({ name, position, onClick }) => {
  return (
    <div className="user-profile_wrap">
      <p>{name}</p>
      <p>{position}</p>
      <button onClick={(e) => onClick(e)}>Open modal</button>
    </div>
  );
};

export default UserProfile;
