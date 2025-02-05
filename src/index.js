import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Avatar component

function Avatar() {
  return (
    <div>
      <img src="./profile.jpg" alt="profile picture" className="avatar" />
    </div>
  );
}

function Data() {
  return (
    <div className="data">
      <h1>Abdessamad Zahidi</h1>
      <p>
        Aspiring web developer . When not coding or reading a book, I like to
        play board games, to cook (and eat), or to just enjoy the Moroccan sun
        at the beach.
      </p>
      <ul className="skill-list">
        <Skill name="JavaScript" emoji="✊" color="orange" />
        <Skill name="Html " emoji="✊" color="gray" />
        <Skill name="CSS" emoji="✊" color="green" />
      </ul>
    </div>
  );
}

// skill

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </li>
  );
}

//
function App() {
  return (
    <body className="center">
      <div className="card">
        <Avatar />
        <Data />
      </div>
    </body>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
