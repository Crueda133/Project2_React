import React from "react";
import "../styles/DropdownLists.css";

function SearchFormLists({ data, onItemClick, title, listType }) {
  return (
    <div className="dropdown-list">
      <h3>{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => onItemClick(item)}
              className={`dropdown-item ${listType}-item`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFormLists;
