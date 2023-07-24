import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { getVehicleActions } from "../../redux/VehicleSlice/VehicleAsyncThunk";
import { useEffect } from "react";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import Pagination from "../../Components/Pagination";
import { vehicleAction } from "../../redux/VehicleSlice";
import { Link } from "react-router-dom";

const Vehicle = () => {
  const dispatch = useAppDispatch();
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.vehicleStateData
  );
  const loading = useSelector(
    (state: IRootState) => state.vehicleStateData.isLoading
  );
  useEffect(() => {
    dispatch(
      getVehicleActions({
        id: constant.defaultUserId,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(vehicleAction.setCurrentPage(page));
    dispatch(
      getVehicleActions({
        page,
        size: limit,
      })
    );
  };
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {list.map((vehicle, id) => {
              return (
                <ul key={id}>
                  <Link to="/vehicle">
                    <h4>Name:</h4>
                    {vehicle.name}
                  </Link>
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
          </div>
        )}
        <Pagination
          page={page}
          onPageChangeHandler={pageChangeHandler} 
          totalPages={totalPage > 0
              ? totalPage
              : constant.page.defaultCurrentPaginationNumber}/>
      </div>
    </>
  );
};
export default Vehicle;
