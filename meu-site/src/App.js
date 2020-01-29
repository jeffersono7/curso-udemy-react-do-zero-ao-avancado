import React, { Component } from "react";

import "./styles.css";

const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ nutri: response }))
  }

  render() {
    return (
      <div className="container">
        <header>
          <strong>React Nutri</strong>
        </header>

        {this.state.nutri.map(item => (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} className="capa" />

            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href="#">
              Acessar
            </a>
          </article>
        ))}
      </div>
    );
  }
}
