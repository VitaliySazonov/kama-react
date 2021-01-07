import React, { Component } from "react";

const Technologies = () => {
  let new_name = "Item part";
  let list = (
    <ul className={`menu_list_all`}>
      <li className={`item active`} data-res={`ancore`}>
        Go for it {new_name}
      </li>
      <li className={`item`}>2</li>
      <li className={`item`}>3</li>
    </ul>
  );
  return <div className={`menu`}>{list}</div>;
};

export default Technologies;