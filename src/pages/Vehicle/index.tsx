import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const Vehicle = () => {
  const vehicleList = useSelector(
    (state: IRootState) => state.vehicleStateData.list
  );
  return (
    <>
      {vehicleList.map((vehicle, id) => {
        return (
          <ul key={id}>
            <p>
              <h4>Name:</h4>
              {vehicle.name}
            </p>
            <p>
              <h4>model:</h4>
              {vehicle.model}
            </p>
            <p>
              <h4>vehicle class:</h4>
              {vehicle.vehicle_class}
            </p>
            <p>
              <h4>manufacturer:</h4>
              {vehicle.manufacturer}
            </p>
            <p>
              <h4>length:</h4>
              {vehicle.length}
            </p>
            <p>
              <h4>Cost in credits:</h4>
              {vehicle.cost_in_credits}
            </p>
            <p>
              <h4>crew:</h4>
              {vehicle.crew}
            </p>
            <p>
              <h4>passengers:</h4>
              {vehicle.passengers}
            </p>
            <p>
              <h4>max atmosphering speed:</h4>
              {vehicle.max_atmosphering_speed}
            </p>
            <p>
              <h4>cargo capacity:</h4>
              {vehicle.cargo_capacity}
            </p>
            <p>
              <h4>consumables:</h4>
              {vehicle.consumables}
            </p>
            <p>
              <h4>url:</h4>
              {vehicle.url}
            </p>
            <p>
              <h4>created:</h4>
              {vehicle.created}
            </p>
            <p>
              <h4>edited:</h4>
              {vehicle.edited}
            </p>
          </ul>
        );
      })}
    </>
  );
};
export default Vehicle;
