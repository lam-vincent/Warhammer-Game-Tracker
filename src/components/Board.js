import "../styles/Board.css";

/*
display one board

when click on, the slot change color. Then, datas has to change.
*/

function Board({ room, updateRooms }) {

    return (
        <div className="card">
            <div className="main">
                <div className="container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    );
}

export default Board;
