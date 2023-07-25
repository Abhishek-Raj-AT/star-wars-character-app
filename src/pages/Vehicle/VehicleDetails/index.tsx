import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getVehicleActions } from "../../../redux/VehicleSlice/VehicleAsyncThunk";

const VehicleDetails = () => {
  const dispatch = useAppDispatch();
  const { vehicleId } = useParams();
  const { list, page, limit } = useSelector(
    (state: IRootState) => state.vehicleStateData
  );
  const value = list[Number.parseInt(vehicleId!) - 1];
  useEffect(() => {
    const id = Number(vehicleId);
    dispatch(
      getVehicleActions({
        id,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page, vehicleId]);
  return (
    <div>
      <div>{value.name}</div>
      <div>{value.consumables}</div>
      <div>{value.cargo_capacity}</div>
      <div>{value.cost_in_credits}</div>
      <div>{value.created}</div>
      <div>{value.crew}</div>
      <div>{value.edited}</div>
      <div>{value.manufacturer}</div>
      <div>{value.max_atmosphering_speed}</div>
    </div>
  );
};
export default VehicleDetails;
