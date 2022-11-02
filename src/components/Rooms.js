import "../styles/Rooms.css";

function Rooms({ setActiveRoom, rooms, activeRoom }) {
  return (
    <div className="rooms">
      <select
        value={activeRoom}
        onChange={(e) => setActiveRoom(e.target.value)}
        className="rooms-select"
      >
        <option value="room 1">room 1</option>
        {rooms.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Rooms;
