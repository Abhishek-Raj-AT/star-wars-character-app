import { useSelector } from "react-redux"
import { IRootState, useAppDispatch } from "../../../redux/store"
import { useEffect } from "react"
import { getSpeciesActions } from "../../../redux/SpeciesSlice/SpeciesAsyncThunk"
import { useParams } from "react-router-dom"

const SpeciesDetails =()=>{
    const {list, page, limit} = useSelector((state:IRootState)=>state.speciesStateData)
    const dispatch = useAppDispatch()
    const {speciesId} = useParams()
    const value = list[Number.parseInt(speciesId!)-1]
    useEffect(()=>{
        const id = Number(speciesId)
        dispatch(getSpeciesActions({
            id,
            page,
            size: limit
        }))
    },[dispatch, limit, page, speciesId])
    return(
        <div>
            <div>{value.average_height}</div>
            <div>{value.average_lifespan}</div>
            <div>{value.classification}</div>
            <div>{value.created}</div>
            <div>{value.designation}</div>
        </div>
    )
}
export default SpeciesDetails