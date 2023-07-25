import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import { getPeopleActions } from "../../../redux/PeopleSlice/PeopleAsyncThunk";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
  const dispatch = useAppDispatch();
  const { list, page, limit } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
  const { peopleId } = useParams();
  const value = list[Number.parseInt(peopleId!) - 1];
  useEffect(() => {
    const id = Number(peopleId);
    dispatch(
      getPeopleActions({
        id,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page, peopleId]);
  return (
    <div>
      <div>{value.gender}</div>
      <div>{value.birth_year}</div>
      <div>{value.eye_color}</div>
      <div>{value.hair_color}</div>
      <div>{value.height}</div>
      <div>{value.homeworld}</div>
      <div>{value.mass}</div>
      <div>{value.skin_color}</div>
    </div>
  );
};
export default PeopleDetails;
