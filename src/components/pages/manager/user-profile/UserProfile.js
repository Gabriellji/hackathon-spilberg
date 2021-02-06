import "./style.css";

const UserProfile = ({ name, position, onClick }) => {
  return (
    <div className="user-profile_wrap" onClick={(e) => onClick(e)}>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default UserProfile;
