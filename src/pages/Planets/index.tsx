import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getPlanetActions } from "../../redux/PlanetsSlice/PlanetAsyncThunk";
import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { planetAction } from "../../redux/PlanetsSlice";
import { Link } from "react-router-dom";
import { getImageActions } from "../../redux/imageSlice/imageAsyncThunk";

const Planets = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.planetStateData
  );
  const dispatch = useAppDispatch();
  const imageList = useSelector((state:IRootState)=>state.imageStateData.list)
  useEffect(() => {
    dispatch(
      getPlanetActions({
        id: constant.defaultUserId,
        page,
        size: limit,
      })
    );
    dispatch(getImageActions({
      id: constant.defaultUserId
    }))
  }, [dispatch, limit, page]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(planetAction.setCurrentPage(page));
    dispatch(
      getPlanetActions({
        page,
        size: limit,
      })
    );
  };
  const loading = useSelector(
    (state: IRootState) => state.planetStateData.isLoading
  );
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {list.map((planet, id) => {
              const image = imageList[id]
              const splitId = planet?.url?.split("/planets/");
              return (
                <div key={id}>
                  <div>
                  <img style={{height: "200px"}} src={image?.download_url} alt={image?.author} />
                  </div>
                  <ul>
                    <h4>name:</h4>
                    <Link to={`/planet/${splitId?.[1]?.replace("/", "")}`}>{planet.name}</Link>
                    <div>
                      <h4>diameter:</h4>
                      {planet.diameter}
                    </div>
                    <div>
                      <h4>rotation period:</h4>
                      {planet.rotation_period}
                    </div>
                    <div>
                      <h4>orbital period:</h4>
                      {planet.orbital_period}
                    </div>
                    <div>
                      <h4>gravity:</h4>
                      {planet.gravity}
                    </div>
                    <div>
                      <h4>population:</h4>
                      {planet.population}
                    </div>
                    <div>
                      <h4>climate:</h4>
                      {planet.climate}
                    </div>
                    <div>
                      <h4>terrain:</h4>
                      {planet.terrain}
                    </div>
                    <div>
                      <h4>surface_water:</h4>
                      {planet.surface_water}
                    </div>
                    <div>
                      <h4>url:</h4>
                      {planet.url}
                    </div>
                    <div>
                      <h4>created:</h4>
                      {planet.created}
                    </div>
                    <div>
                      <h4>edited:</h4>
                      {planet.edited}
                    </div>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
        <Pagination
          page={page}
          onPageChangeHandler={pageChangeHandler}
          totalPages={
            totalPage > 0
              ? totalPage
              : constant.page.defaultCurrentPaginationNumber
          }
        />
      </div>
    </>
  );
};
export default Planets;
