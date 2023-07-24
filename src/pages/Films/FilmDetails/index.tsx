import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { getIndividualFilmActions } from "../../../redux/FilmSlice/FilmAsyncThunk";
import { useEffect } from "react";

const FilmDetails = () => {
    const { list } = useSelector((state: IRootState) => state.filmStateData);
    const { filmId } = useParams();
    const dispatch = useAppDispatch();
    const value = Object.values(list)
    console.log(filmId);
    console.log("list here", value);
    useEffect(() => {
      const id = Number(filmId);
      dispatch(getIndividualFilmActions({ id }));
    }, [dispatch, filmId]);
    return (
        <>
      <div>
        {value?.map((lists) => (
          <div key={lists.episode_id}>
            <ul>
                <li>{lists.title}</li>
                <li>{lists.characters}</li>
                <li>{lists.opening_crawl}</li>
                <li>{lists.director}</li>
            </ul>
          </div>
        ))}
      </div>
      </>
    );
  };
  export default FilmDetails;