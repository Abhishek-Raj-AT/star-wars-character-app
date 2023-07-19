import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const StarShips = () => {
  const starShipList = useSelector(
    (state: IRootState) => state.starShipStateData.list
  );
  return (
    <div>
      {starShipList.map((starShips) => {
        return (
          <ul>
            <p>{starShips.name}</p>
            <p>{starShips.model}</p>
            <p>{starShips.starship_class}</p>
            <p>{starShips.manufacturer}</p>
            <p>{starShips.cost_in_credits}</p>
            <p>{starShips.length}</p>
            <p>{starShips.crew}</p>
            <p>{starShips.passengers}</p>
            <p>{starShips.max_atmosphering_speed}</p>
            <p>{starShips.hyperdrive_rating}</p>
            <p>{starShips.MGLT}</p>
            <p>{starShips.cargo_capacity}</p>
            <p>{starShips.consumables}</p>
            <p>{starShips.created}</p>
            <p>{starShips.edited}</p>
          </ul>
        );
      })}
    </div>
  );
};
export default StarShips;
