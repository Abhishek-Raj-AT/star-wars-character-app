import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getFilmActions } from "../../redux/FilmSlice/FilmAsyncThunk";
import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { filmAction } from "../../redux/FilmSlice";
import { Link } from "react-router-dom";

const Films = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.filmStateData
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getFilmActions({
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page]);
  const loading = useSelector(
    (state: IRootState) => state.filmStateData.isLoading
  );
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(filmAction.setCurrentPage(page));
    dispatch(
      getFilmActions({
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
          <div className="filmStyle">
            {list?.map((films, id) => {
              return (
                <div key={id}>
                  <ul>
                    <li>{films.episode_id}</li>
                    <Link to={`/films/${films.episode_id}`}>{films.title}</Link>
                    <li>{films.created}</li>
                    <li>{films.director}</li>
                    <li>{films.edited}</li>
                    <li>{films.opening_crawl}</li>
                    <li>{films.producer}</li>
                    <li>{films.release_date}</li>
                    <li>{films.url}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        page={page}
        onPageChangeHandler={pageChangeHandler}
        totalPages={totalPage > 0
          ? totalPage
          : constant.page.defaultCurrentPaginationNumber}
      />
    </>
  );
};
export default Films;
