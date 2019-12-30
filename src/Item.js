import React from 'react';

const Item = props => {
const dragStart = e => {
  const target = e.target;
  e.dataTransfer.setData('card_id', target.id);
}

const dragOver = e => {
  e.stopPropagation()
}
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.i && props.i.id}
    </div>
  );
};

export default Item;

