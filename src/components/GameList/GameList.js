import React from "react";
import { Link } from "react-router-dom";

export default function GameList() {
  return (
    <div>
      <div>
        <Link to={"/method-overload/"}>method overload</Link>
      </div>
      <div>{/* <Link to="/">game 2</Link> */}</div>
    </div>
  );
}
