import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const People = () => {
  const peopleList = useSelector(
    (state: IRootState) => state.peopleStateData.list
  );
  return (
    <>
      {peopleList.map((person, id) => {
        return (
          <ul>
            <p> name:{person.name}</p>
            <p> height:{person.height}</p>
            <p> Hair Color:{person.hair_color}</p>
            <p> Skin color: {person.skin_color}</p>
            <p>eye color:{person.eye_color}</p>
            <p>birth year:{person.birth_year}</p>
            <p>gender:{person.gender}</p>
            <p> Home World:{person.homeworld}</p>
          </ul>
        );
      })}
    </>
  );
};
export default People;
