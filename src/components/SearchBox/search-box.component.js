import './search-box.style.css'
const SearchBox = (props) =>{
    const { placeholder, monsterSearch, className } = props;
    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className={ `search-box ${className}`}
          onChange={monsterSearch}
        />
      </div>
    );
  }
export default SearchBox;
