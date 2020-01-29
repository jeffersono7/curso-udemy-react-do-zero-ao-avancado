import React, { Component } from "react";
import "./style.css";

export default class TodoItems extends Component {
  deletar(key) {
    this.props.deletar(key);
  }

  render() {
    const { lista } = this.props;

    return (
      <div className="container">
        <ul className="container">
          {lista.map(item => (
            <li
              className="Item"
              onClick={this.deletar.bind(this, item.key)}
              key={item.key}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
