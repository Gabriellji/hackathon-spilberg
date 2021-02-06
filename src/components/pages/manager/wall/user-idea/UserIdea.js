
const UserIdea = ({name, title, question1, question2, question3, totalLikes, created}) => {
    return (
        <div>
        <h1>{totalLikes}</h1>
        <div>
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
