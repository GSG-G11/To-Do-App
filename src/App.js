import React from 'react';
import Listitem from './components/ListItems/ListItems';
import './App.css';
import Additem from './components/Additem/Additem';
class App extends React.Component {
  state = {
    items: [
      { id: 1, desc: 'hello World1' },
      { id: 2, desc: 'hello World2' },
      { id: 3, desc: 'hello World3' },
      { id: 4, desc: 'hello World4' },
    ],
  };

  deleteItemHandle = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  addItem=(item)=>{
    let items=this.state.items
    items.push(item)
    this.setState({ items })

  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <Additem addItem={this.addItem} />
        <Listitem items={items} deleteItem={this.deleteItemHandle} />
        
      </div>
    );
  }
}

export default App;
