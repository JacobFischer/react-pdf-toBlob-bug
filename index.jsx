import React from 'react';
import ReactDOM from 'react-dom';
import * as all from "./components.jsx";

const components = Object.entries(all)
    .filter(([, thing]) => typeof thing === "function");

const App = () => (
    <div>
        Hello world! Let's see some blobs to download...
        {components.map(([key, Component]) => (
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
