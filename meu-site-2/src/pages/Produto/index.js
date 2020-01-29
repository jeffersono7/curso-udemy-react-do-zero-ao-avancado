import React, { Component } from "react";

export default class Produto extends Component {
  //   state = {
  //     id: ""
  //   };

  //   componentDidMount() {
  //     const { id } = this.props.match.params;

  //     this.setState({ id });
  //   }

  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>Produto {id}</h1>
      </div>
    );
  }
}
