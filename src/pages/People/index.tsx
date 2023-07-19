import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getPeopleActions } from "../../redux/PeopleSlice/PeopleAyscThunk";

const People = () => {
  const peopleList = useSelector(
    (state: IRootState) => state.peopleStateData.list
  );
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getPeopleActions({
      id: 0
    }))
  },[dispatch])
  return (
    <>
      {peopleList.map((person, id) => {
        return (
          <ul key={id}>
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
