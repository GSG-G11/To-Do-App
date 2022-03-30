import React from 'react';
import './ListItems.css';
const Listitem = (props) => {
  const { items, deleteItem, editItem, markItem, removeMark } = props;
  const ListItems = items.length ? (
    items.map((item, i) => {
      return (
        <li key={item.id}>
          <input
            onClick={() => {
              removeMark(i);
            }}
            id={item.id}
            style={{
              textDecoration: item.Done ? 'line-through ' : 'none',
            }}
            type="text"
            value={item.desc}
          />
          <span className="icons">
            <span onClick={() => markItem(i)}>
              <i className="fa-solid fa-marker"></i>
            </span>
            <span onClick={() => deleteItem(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </span>
            <span onClick={() => editItem(i)}>
              <i className="fa-solid fa-edit"></i>
            </span>
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
