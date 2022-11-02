import "../styles/Slot.css";

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function Slot({ cover, name }) {
    return (
        <li className="lmj-plant-item" onClick={() => handleClick}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
        </li>
    );
}

export default Slot;
