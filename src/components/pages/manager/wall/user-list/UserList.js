import { user } from '../../../../../data/data';
import UserProfile from '../user-profile/UserProfile';

const UserList = () => {
    return (
        <div>
            {
                user.map(user => <UserProfile
                 name={user.name}
                     position={user.position}
                     ideas={user.ideas[user.ideas.length - 1].question1}
                 />)
            }
        </div>
    )
}

export default UserList;