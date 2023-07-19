import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { Loader } from "../../Loader";

const Species = () => {
  const speciesList = useSelector(
    (state: IRootState) => state.speciesStateData.list
  );
  const loading = useSelector((state: IRootState) => state.speciesStateData.isLoading)
  return (
    <>
    {loading ? <Loader/>:<div>
      {speciesList.map((species, id) => {
        return (
          <ul key={id}>
            <p>
              <h4>Name:</h4>
              {species.name}
            </p>
            <p>
              <h4>classification:</h4>
              {species.classification}
            </p>
            <p>
              <h4>designation:</h4>
              {species.designation}
            </p>
            <p>
              <h4>average_height:</h4>
              {species.average_height}
            </p>
            <p>
              <h4>average_lifespan:</h4>
              {species.average_lifespan}
            </p>
            <p>
              <h4>eye_colors:</h4>
              {species.eye_colors}
            </p>
            <p>
              <h4>hair_colors:</h4>
              {species.hair_colors}
            </p>
            <p>
              <h4>skin_colors:</h4>
              {species.skin_colors}
            </p>
            <p>
              <h4>language:</h4>
              {species.language}
            </p>
            <p>
              <h4>Home World:</h4>
              {species.homeworld}
            </p>
            <p>
              <h4>url:</h4>
              {species.url}
            </p>
            <p>
              <h4>created:</h4>
              {species.created}
            </p>
            <p>
              <h4>edited:</h4>
              {species.edited}
            </p>
          </ul>
        );
      })}
      </div>}
    </>
  );
};
export default Species;
