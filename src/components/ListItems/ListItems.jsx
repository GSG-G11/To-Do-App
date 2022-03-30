import React from 'react';
import './ListItems.css';
const Listitem = (props) => {
  const { items, deleteItem } = props;
  const ListItems = items.length ? (
    items.map((item) => {
      return (
        <li key={item.id}>
          <span>{item.desc}</span>
          <span>
            <i className="fa-solid fa-highlighter"></i>
          </span>
          <span onClick={() => deleteItem(item.id)}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <span>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </li>
      );
    })
  ) : (
    <p>No ToDo Item</p>
  );
  return (
    <div>
      <ul>{ListItems}</ul>
    </div>
  );
};

export default Listitem;
