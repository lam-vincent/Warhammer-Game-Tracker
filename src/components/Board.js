import Slot from "./Slot";
import "../styles/Board.css";

function Board() {
    const Colors = ["var(--muted-yellow)", "var(--muted-red)", "var(--muted-blue)", "var(--muted-green)", "var(--muted-orange)", "var(--muted-purple)", "var(--muted-black)"];

    return (
        <div className="card">
            <div className="main">
                <div className="container">
                    {Colors.map((color, key) => (
                        <Slot Color={color} Colors={Colors} key={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;
