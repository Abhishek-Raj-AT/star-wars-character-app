import { useSelector } from "react-redux"
import { IRootState } from "../../redux/store"

const Planets =()=>{
    const planetList = useSelector((state: IRootState)=>state.planetStateData.list)
    console.log("planetList", planetList)
    return(
        <div>
            {planetList.map((planet,id)=>{
                return(
                    <div>
                        <ul>
                            <p><h4>name:</h4>{planet.name}</p>
                            <p><h4>diameter:</h4>{planet.diameter}</p>
                            <p><h4>rotation period:</h4>{planet.rotation_period}</p>
                            <p><h4>orbital period:</h4>{planet.orbital_period}</p>
                            <p><h4>gravity:</h4>{planet.gravity}</p>
                            <p><h4>population:</h4>{planet.population}</p>
                            <p><h4>climate:</h4>{planet.climate}</p>
                            <p><h4>terrain:</h4>{planet.terrain}</p>
                            <p><h4>surface_water:</h4>{planet.surface_water}</p>
                            <p><h4>url:</h4>{planet.url}</p>
                            <p><h4>created:</h4>{planet.created}</p>
                            <p><h4>edited:</h4>{planet.edited}</p>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default Planets