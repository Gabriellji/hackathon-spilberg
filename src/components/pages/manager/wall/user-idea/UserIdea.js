import './style.css';

const UserIdea = ({name, title, question1, question2, question3, totalLikes, created}) => {
    return (
        <div className="idea_wrap">
        <h1 className="total-likes_title">{totalLikes} Upvote</h1>
        <div className="idea-inner_wrap">
            <h3>{title}</h3>
            <p><span>Problem:</span>{question1}</p>
            <p><span>Idea:</span>{question2}</p>
            <p><span>Location of problem:</span>{question3}</p>
        </div>
        <p>Submitted by {name} at {created}</p>
        </div>
    )
}

export default UserIdea;
