import React from 'react';
import ReactDOM from 'react-dom';
import * as components from "./components.jsx";

const App = () => (
  <div>
    Hello world! Let's see some blobs to download...
    {Object.entries(components).map(([key, Component]) => (
      <div key={key}>
        <hr />
        {key}: <Component />
      </div>
    ))}
  </div>
);

const div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(<App />, div);
