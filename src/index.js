import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "", items: [] };
  }

  handleData(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault(e);
    //validacion
    if (this.state.text.length <= 0) {
      return alert("No puedes dejar esto vacio");
    }

    const newItem = {
      text: this.state.text
    };

    this.setState({
      items: this.state.items.concat(newItem)
    });
  }

  removeItem(index, e) {
    //les paso posicion..porque con la posicion creo el splice para sacar 1 elemento de la posicion
    const itemes = this.state.items;
    itemes.splice(index, 1);
    //alert(index);
    this.setState({ itemes });
  }

  render() {
    const list = this.state.items.map((item, index) => (
      <li key={index}>
        <button onClick={e => this.removeItem(index, e)}>X</button>
        {item.text}
      </li>
    ));

    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Tarea:</label>
          <input
            type="texto"
            value={this.state.text}
            onChange={e => this.handleData(e)}
            placeholder="Cosas por ser hechas"
          />
          <button className="btn btn-success">
            Add {this.state.items.length + 1}
          </button>
        </form>
        <h4>Tareas: </h4> <br />
        <ul>{list}</ul>
        <p>items por borrar {this.state.items.length}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
