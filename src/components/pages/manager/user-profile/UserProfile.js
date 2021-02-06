import './style.css';

const UserProfile = ({ name, position, ideas }) => {
  return (
    <div className="user-profile_wrap">
      <p>{name}</p>
      <p>{position}</p>
      <p>Latest contribution: {ideas}</p>
    </div>
  );
};

export default UserProfile;
