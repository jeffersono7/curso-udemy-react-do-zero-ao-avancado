import React, { Component } from "react";
import "./style.css";

const cronometroImg = require("./assets/cronometro.png");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      botao: "VAI"
    };

    this.timer = null;

    this.handleVai = this.handleVai.bind(this);
    this.handleLimpar = this.handleLimpar.bind(this);
  }

  handleVai() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({ botao: "VAI" });

      return;
    }

    this.setState({ botao: "PAUSAR" });

    this.timer = setInterval(
      () => this.setState({ numero: this.state.numero + 0.1 }),
      100
    );
  }

  handleLimpar() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({ numero: 0, botao: "VAI" });
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={cronometroImg} />

        <a className="timer">{this.state.numero.toFixed(1)}</a>

        <div className="areaBtn">
          <a className="button" onClick={this.handleVai}>
            {this.state.botao}
          </a>
          <a className="button" onClick={this.handleLimpar}>
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
