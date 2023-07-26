import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import { getIndividualPeopleActions } from "../../../redux/PeopleSlice/PeopleAsyncThunk";
import { useParams } from "react-router-dom";
import { peopleAction } from "../../../redux/PeopleSlice";

const PeopleDetails = () => {
  const dispatch = useAppDispatch();
  const { specificPerson } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
  const { peopleId } = useParams();
  useEffect(() => {
    const id = Number(peopleId);
    dispatch(getIndividualPeopleActions({
      id
    }))
    return () => {
      dispatch(peopleAction.resetSpecificPerson())
    }
  }, [dispatch, peopleId]);
  return (
    <div>
        <div>
          <div>name:{specificPerson?.name}</div>
          <div>Age: {specificPerson?.birth_year}</div>
          <div>eye_color: {specificPerson?.eye_color}</div>
          <div>hair_color: {specificPerson?.hair_color}</div>
          <div>gender: {specificPerson?.gender}</div>
          <div>height: {specificPerson?.height}</div>
          <div>mass: {specificPerson?.mass}</div>
        </div>
  </div>
  );
};
export default PeopleDetails;
