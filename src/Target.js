import React, { useState } from 'react';


const Target = (props) => {
  const [state, setState] = useState(false);
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id')

    const card = document.getElementById(card_id);
    // setState(true)
    card.style.display = 'block';
    e.target.appendChild(card);
  }
  const dragOver = e => {
    e.preventDefault()
  }
  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {state || props.children}
    </div>
  );
};

export default Target;
