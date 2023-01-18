import { selectRegions } from "./selectRegions"

export const Filter = (props) => {
    const {style, filterRegion, onChange} = props
    return (
        <div>
            <select style={style} className='region-select' name="region" id='region' value={filterRegion} onChange={onChange}> 
            {selectRegions}
            </select>
        </div>
        
    )
}