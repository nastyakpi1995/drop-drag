import React from 'react';
import Item from './Item';
import Target from './Target';
import './App.css'
class App extends React.Component {
  state = {
    items: [
      {
        id: 1, name: 'Item 1',
      },
      {
        id: 2, name: 'Item 2',
      },
      {
        id: 3, name: 'Item 3',
      },
      {
        id: 4, name: 'Item 4',
      },
    ],
  }

  render() {
    return (
      <div className="App">
        <main className="flexbox">
        <Target id="board-1" className="board">
        {this.state.items.map((i,index) =>
           <Item 
              id={`card-${i.id}`} 
              className="card" 
              draggable="true" 
              i={i} 
              key={index}
            />
           )} 
      </Target>
        <Target id="board-1" className="board">
        {this.state.items.map((i,index) =>
           <Item 
              id={`card-${i.id}`} 
              className="card" 
              draggable="true" 
              i={i} 
              key={index}
            />
           )} 
      </Target>
      </main>
      </div>
    );
  }
}

export default App
