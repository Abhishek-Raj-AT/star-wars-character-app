import { useEffect } from "react"
import { IRootState, useAppDispatch } from "../../../redux/store"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIndividualPlanetActions } from "../../../redux/PlanetsSlice/PlanetAsyncThunk"

const PlanetDetails =()=>{
    const {planetId} = useParams()
    const dispatch = useAppDispatch()
    const {list} = useSelector((state:IRootState)=>state.planetStateData)
    // const value = Object.values(list)
    useEffect(()=>{
        const id = Number(planetId)
        dispatch(getIndividualPlanetActions({id}))
    },[dispatch, planetId])
    return(
        <div>
            {list.map((planet,id)=>{
                return(
                    <div>
                        <li>{planet.name}</li>
                    </div>
                )
            })}
        </div>
    )
}
export default PlanetDetails