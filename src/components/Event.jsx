export const ClickEvent = () => {

    const handleClick = () => {
        console.log("button has been clicked ... ");
        alert("button has been clicked ....");
    }

    return (
        <div>x
            <button onClick={handleClick}>Click</button>
        </div>
    );
}