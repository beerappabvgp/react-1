export const Image = () => {
    const path = "../../public/nature.jpeg";
    return (
        <img src={path} alt="Nature" style={{
            width: "400px",
            height: "500px",
        }}/>
    );
}