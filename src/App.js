import React from 'react';
import ListItem from './components/ListItems/ListItems';
import './App.css';
import AddItem from './components/Additem/Additem';
class App extends React.Component {
  state = {
    items: [
      { id: 1, desc: 'Reading Books', Done: false },
      { id: 15, desc: 'Writing HomeWork', Done: false },
    ],
  };

  deleteItemHandle = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Date.now();
    item.Done = false;
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  editItem = (id, desc) => {
    const { items } = this.state;
    let item = items[id];
    item.desc = desc;
    this.setState({
      items,
    });
  };
  markItem = (id) => {
    this.setState((prevStat) => {
      prevStat.items[id].Done = true;
      return prevStat;
    });
  };
  removeMark = (id) => {
    this.setState((prevStat) => {
      prevStat.items[id].Done = false;
      return prevStat;
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <AddItem addItem={this.addItem} />
        <ListItem
          items={items}
          deleteItem={this.deleteItemHandle}
          editItem={this.editItem}
          markItem={this.markItem}
          removeMark={this.removeMark}
        />
      </div>
    );
  }
}

export default App;
