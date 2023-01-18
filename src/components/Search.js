export const Search = (props) => {
    const {style, searchCountry, onChange} = props
    return (
        <div>
            <input style={style} className="searchBar" type="search" placeholder='Search for a country...' value={searchCountry} 
            onChange={onChange}></input>
        </div>
    )
}