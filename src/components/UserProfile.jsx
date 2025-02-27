export const UserProfile = ({ user }) => {
    return (
        <div>
            <img src={user.src} alt="" />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
            <br />
            <br />
            <br />
        </div>
    );
}