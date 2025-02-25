import { users } from "../constants/user"
import { UserProfile } from "./UserProfile"

export const Users = () => {
    return (
        users.map((user) => {
            return <UserProfile user={user} key={user.id} />
        })
    );
}