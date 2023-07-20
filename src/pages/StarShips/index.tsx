import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getStarshipActions } from "../../redux/StarshipSlice/StarshipAsyncThunk";
import { setTotalPageCount } from "../../service/ApiHelper";
import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";

const StarShips = () => {
  const dispatch = useAppDispatch()
  const {list, page, total, limit} = useSelector(
    (state: IRootState) => state.starShipStateData
    );
    const totalPage = setTotalPageCount(total, limit);
  const loading = useSelector((state:IRootState) =>state.starShipStateData.isLoading)
  useEffect(()=>{
    dispatch(getStarshipActions({
      id: constant.defaultUserId,
        page,
        size: limit,
    }))
  },[dispatch, limit, page])
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(
      getStarshipActions({
        page,
        size: limit,
      })
    );
  };
  return (
    <>
    <div>
    {loading ? <Loader/>:<div>
      {list.map((starShips,id) => {
        return (
          <ul key={id}>
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
    </div>}
    <Pagination
        page={page}
        onPageChangeHandler={pageChangeHandler}
        totalPages={totalPage > 0
          ? totalPage
          : constant.page.defaultCurrentPaginationNumber}
      />
    </div>
    </>
  );
};
export default StarShips;
