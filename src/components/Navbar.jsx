import { Button } from "./Button";

export const Navbar = () => {
    const num = 1;
    console.log(num);
    return (
        <div>
            <div>
            <h1>Navbar</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Button />
            </div>
            <div>This is second div</div>
        </div>
    );
}