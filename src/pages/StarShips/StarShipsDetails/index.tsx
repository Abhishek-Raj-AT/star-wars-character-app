import { useParams } from "react-router-dom"
import { IRootState, useAppDispatch } from "../../../redux/store"
import { useSelector } from "react-redux"
import { getIndividualStarshipActions } from "../../../redux/StarshipSlice/StarshipAsyncThunk"
import { useEffect } from "react"

const StarShipsDetails =()=>{
    const {starshipId} = useParams()
    const dispatch  = useAppDispatch()
    const {list} = useSelector((state:IRootState)=>state.starShipStateData)
    useEffect(()=>{
        const id = Number(starshipId)
        dispatch(getIndividualStarshipActions({id}))
    },[dispatch, starshipId])
    const value = Object.values(list);
    
    return(
        <div>
            {value.map((lists, id)=>{
                return(
                    <div>
                        <ul>
                            <li>{lists.cargo_capacity}</li>
                            <li>{lists.consumables}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default StarShipsDetails