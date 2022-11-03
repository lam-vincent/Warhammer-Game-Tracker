import React, { useState } from "react";

function Slot({ Color, Colors }) {
    const [color, setColor] = useState(Color);
    const handleChange = (e) => {
        e.preventDefault();
        setColor(Colors[Math.floor(Math.random() * Colors.length)]);
    };
    const style = {
        backgroundColor: color
    };
    return (
        <div onClick={handleChange} style={style}>
        </div>
    );
}

export default Slot;
