import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getFilmActions } from "../../redux/FilmSlice/FilmAyscThunk";

const Films = () => {
  const filmList = useSelector((state: IRootState) => state.filmStateData.list);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getFilmActions({
      id: 0
    }))
  },[dispatch])
  return (
    <div className="filmStyle">
      {filmList.map((films, id) => {
        return (
          <div>
            <ul key={id}>
              <div>{films.episode_id}</div>
              <div>{films.title}</div>
              <div>{films.created}</div>
              <div>{films.director}</div>
              <div>{films.edited}</div>
              <div>{films.opening_crawl}</div>
              <div>{films.producer}</div>
              <div>{films.release_date}</div>
              <div>{films.url}</div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Films;
