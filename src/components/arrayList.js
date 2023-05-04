import React from "react";
import "./arrayList.css";

const Array = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

const List = () => {
  const items = ["Home", "Products", "Info", "Contact"];

  return (
    <div>
      <a href={"#"}>
        <h1>Logo</h1>
      </a>
      <Array items={items} />
    </div>
  );
};

export default List;
