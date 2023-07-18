import { useSelector } from "react-redux"
import { IRootState } from "../../redux/store"

const Films = ()=>{
    const filmList = useSelector((state:IRootState)=>state.filmStateData.list)
    console.log("filmList", filmList)
    return (
        <h1>film here</h1>
    )
}
export default Films