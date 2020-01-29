import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header(props) {
  return (
    <div>
      <div className="Header">
        Meu projeto
        <Link to="/">Home</Link>
      </div>

      <hr />
    </div>
  );
}
