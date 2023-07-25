import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { getFilmActions } from "../../../redux/FilmSlice/FilmAsyncThunk";
import { useEffect } from "react";

const FilmDetails = () => {
  const { list, page, limit } = useSelector(
    (state: IRootState) => state.filmStateData
  );
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  const values = list[Number.parseInt(filmId!) - 1];
  useEffect(() => {
    const id = Number(filmId);
    dispatch(
      getFilmActions({
        id,
        page,
        size: limit,
      })
    );
  }, [dispatch, filmId, limit, page]);
  return (
    <>
      <div>
        <div>{values.title}</div>
        <div>{values.episode_id}</div>
        <div>{values.opening_crawl}</div>
        <div>{values.characters}</div>
        <div>{values.created}</div>
        <div>{values.director}</div>
        <div>{values.producer}</div>
        <div>{values.release_date}</div>
        <div>{values.edited}</div>
      </div>
    </>
  );
};
export default FilmDetails;
