import React from "react";
import StarRating from "./StarRating";

const Search = ({ searchValue, handelSearch,searchrate,handelRate }) => {
  return (
    <div className="header">
      <h1>GMC BoxOffice</h1>
      <div className="header">
        <form>
          <input type="text" className="inp" value={searchValue} onChange={handelSearch} />
          <StarRating  rate={searchrate} handlerate={handelRate}/>
        </form>
      </div>
    </div>
  );
};

export default Search;
