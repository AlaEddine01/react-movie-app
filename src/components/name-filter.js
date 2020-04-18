import React from "react";
const FilterName = ({ search }) => {
  return (
    <input className="form-control" onChange={(e) => search(e.target.value)} placeholder="Search..." />
  );
};
export default FilterName;
