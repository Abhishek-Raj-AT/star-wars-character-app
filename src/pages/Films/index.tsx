import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect, useState } from "react";
import { getFilmActions } from "../../redux/FilmSlice/FilmAsyncThunk";
import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";
import { filmAction } from "../../redux/FilmSlice";

const Films = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {list, page, nextPageUrl, prevPageUrl, total, limit} = useSelector((state: IRootState) => state.filmStateData);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getFilmActions({
      id: constant.defaultUserId,
      page: constant.page.defaultNumber,
      size: constant.page.defaultNumber
    }))
  },[dispatch])
  const loading  = useSelector((state: IRootState) => state.filmStateData.isLoading)
  const handlePageChange =(page: string | number)=>{
    dispatch(getFilmActions({
      id: limit,
      page: Number(page),
      size: limit
    }))
    dispatch(filmAction.setCurrentPageSize(page))
  }
  console.log(list)
  return (
    <>
    <div>
    {loading ? (
      <Loader />
    ) : (
      <div className="filmStyle">
        {list.map((films, id) => {
          return (
            <div key={id}>
              <ul>
                <li>{films.episode_id}</li>
                <li>{films.title}</li>
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
    currentPage={currentPage}
        totalCount={limit}
        limit={limit}
        nextPageUrl={currentPage < limit}
        prevPageUrl={currentPage > page}
        onButtonClick={handlePageChange}/>
  </>
  );
};
export default Films;
