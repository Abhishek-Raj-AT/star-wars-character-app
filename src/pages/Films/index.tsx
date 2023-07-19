import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { Loader } from "../../Loader";

const Films = () => {
  const filmList = useSelector((state: IRootState) => state.filmStateData.list);
  const loading  = useSelector((state: IRootState) => state.filmStateData.isLoading)
  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <div className="filmStyle">
        {filmList.map((films, id) => {
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
  </>
  );
};
export default Films;
