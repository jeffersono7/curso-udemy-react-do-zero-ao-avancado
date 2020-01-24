import React, { Component } from "react";

import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textoFrase: ""
    };

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    const indice = Math.floor(Math.random() * this.frases.length);
    const textoFrase = `" ${this.frases[indice]} "`;

    this.setState({textoFrase});
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={require("./assets/biscoito.png")} />

        <Botao nome="Abrir Biscoito" acaoBtn={this.quebrarBiscoito} />

        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button className="abrir" onClick={this.props.acaoBtn}>
          {this.props.nome}
        </button>
      </div>
    );
  }
}
