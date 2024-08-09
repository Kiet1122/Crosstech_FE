import { useState } from "react";

export const BtnApp = ({ name }: { name: string }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [color, setColor] = useState<string>("red");

    const handleClick = () => {
        setIsActive(!isActive);
        setColor(isActive ? "black " : "red ");
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: color,
                border: "1 solid black",
                borderRadius: "10px",
                padding: 3,
                color: "white",
            }}
        >
            {name}
        </button>
    );
};
