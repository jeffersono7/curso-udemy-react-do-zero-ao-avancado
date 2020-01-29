import React, { Component } from "react";
import TodoItems from "../TodoItems";
import "./style.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefa: "",
      items: []
    };
  }

  adicionarItem = e => {
    e.preventDefault();

    const { value: valueTarefaInput } = this._tarefaInput;

    if (valueTarefaInput) {
      const newItem = {
        text: valueTarefaInput,
        key: Date.now()
      };

      this.setState(state => ({ items: [...state.items, newItem] }));

      this.limparInput();
    }
  };

  limparInput = () => {
    this.setState(() => ({ tarefa: "" }));

    this._tarefaInput.focus();
  };

  deletarItem = key => {
    this.setState(state => {
      const itemsWithoutItemDeleted = state.items.filter(
        item => item.key !== key
      );

      return { items: itemsWithoutItemDeleted };
    });
  };

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.adicionarItem}>
          <input
            type="text"
            placeholder="Nova Tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={e => this.setState({ tarefa: e.target.value })}
            ref={e => (this._tarefaInput = e)}
          />

          <button type="submit">Adicionar</button>
        </form>

        <hr />

        <TodoItems lista={this.state.items} deletar={this.deletarItem} />
      </div>
    );
  }
}
