import React from 'react';
import './ListItems.css';
const Listitem = (props) => {
  const { items } = props;
  const ListItems = items.map((item) => {
    return (
      <li key={item.id}>
        <span>{item.desc}</span>
        <span>
          <i class="fa-solid fa-highlighter"></i>
        </span>
        <span>
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
        <span>
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
      </li>
    );
  });
  return (
    <div>
      <ul>{ListItems}</ul>
    </div>
  );
};

export default Listitem;
