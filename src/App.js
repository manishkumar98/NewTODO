import "./styles.css";
import React from "react";
import "react-dropdown/style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      newItemType: "",
      list: [],
      list1: [],
      list2: [],
      list3: []
      // type: []
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      type: this.state.newItemType
    };

    // copy current list of items
    const list = [...this.state.list];
    const list1 = [...this.state.list1];
    const list2 = [...this.state.list2];
    const list3 = [...this.state.list3];
    if (newItem.type === "personal") list1.push(newItem);
    if (newItem.type === "office") list2.push(newItem);
    if (newItem.type === "shopping") list3.push(newItem);
    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      list1,
      list2,
      list3,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  deleteItem1(id) {
    // copy current list of items
    const list1 = [...this.state.list1];
    // filter out the item being deleted
    const updatedList = list1.filter((item) => item.id !== id);

    this.setState({ list1: updatedList });
  }
  deleteItem2(id) {
    // copy current list of items
    const list2 = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list2.filter((item) => item.id !== id);

    this.setState({ list2: updatedList });
  }
  deleteItem3(id) {
    // copy current list of items
    const list3 = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list3.filter((item) => item.id !== id);

    this.setState({ list3: updatedList });
  }

  render() {
    return (
      <div>
        <h1 className="app-title">MY LIST</h1>

        <div className="container">
          <div
            style={{
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto"
            }}
          >
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <label>
              <select
                name="type"
                value={this.state.newItemType}
                onChange={(e) =>
                  this.updateInput("newItemType", e.target.value)
                }
              >
                <option value="personal">Personal</option>
                <option value="office">Office</option>
                <option value="shopping">Shopping</option>
              </select>
            </label>
            <button
              className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons"> + </i>
            </button>
            <br /> <br />
            <div>
              <h2>ALL</h2>
              <ul>
                {this.state.list.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.value} {item.type}
                      <button
                        className="btn btn-floating"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <i class="material-icons">x</i>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>Personal</h2>
              <ul>
                {this.state.list1.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.value} {item.type}
                      <button
                        className="btn btn-floating"
                        onClick={() => this.deleteItem1(item.id)}
                      >
                        <i class="material-icons">x</i>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>Office</h2>
              <ul>
                {this.state.list2.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.value} {item.type}
                      <button
                        className="btn btn-floating"
                        onClick={() => this.deleteItem2(item.id)}
                      >
                        <i class="material-icons">x</i>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>Shopping</h2>
              <ul>
                {this.state.list3.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.value} {item.type}
                      <button
                        className="btn btn-floating"
                        onClick={() => this.deleteItem3(item.id)}
                      >
                        <i class="material-icons">x</i>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
