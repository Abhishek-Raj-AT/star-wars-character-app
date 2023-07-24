import { useSelector } from "react-redux"
import { IRootState, useAppDispatch } from "../../../redux/store"
import { useEffect } from "react"
import { getIndividualPeopleActions } from "../../../redux/PeopleSlice/PeopleAsyncThunk"
import { useParams } from "react-router-dom"

const PeopleDetails =()=>{
    const dispatch = useAppDispatch()
    const {list} = useSelector((state:IRootState)=>state.peopleStateData)
    const {peopleId} = useParams()
    const value = Object.values(list)
    console.log("value", value)
    useEffect(() => {
        const id = Number(peopleId);
        dispatch(getIndividualPeopleActions({ id }));
      }, [dispatch, peopleId]);
    return(
        <div>
            {value.map((lists,id)=>{
                return(
                    <ul key={id}>
                        <li>{lists.hair_color}</li>
                    </ul>
                )
            })}
        </div>
    )
}
export default PeopleDetails