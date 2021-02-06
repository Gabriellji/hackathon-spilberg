import "./style.css";

const SearchPanel = ({ onClick, value, onChange }) => {

  return (
    <div className="search_wrap">
      <div className="search-inner_wrap">
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Employee name ..."
          value={value}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchPanel;
