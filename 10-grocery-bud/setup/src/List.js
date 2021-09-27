import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ listItems, delItem, editItem }) => {
  return (
    <div className="grocery-list">
      {listItems.map((listItem) => {
          const { id, title } = listItem;
          return (
            <article key={id} className="grocery-item">
              <p className="title">
                {title}
              </p>
              <div className="btn-container">
                <button type='button' className="edit-btn" onClick={() => editItem(id)}>
                  <FaEdit /> 
                </button>
                <button type='button' className="delete-btn" onClick={() => delItem(id)}>
                  <FaTrash />
                </button>
              </div>
            </article>
          )
        })}
    </div>
  ); 
}

export default List;
