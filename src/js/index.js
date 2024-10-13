//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";

let seconds = 0;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<SecondsCounter counter={seconds}/>);

let randomColor = () => {
    const colorBase = "0123456789ABCDEF";
    let newColor = "#";

    for (let i=0; i<6; i++) {
        newColor = newColor + colorBase[Math.floor(Math.random()*colorBase.length)];
    }
    return newColor;
}

setInterval(() => {
    let color = randomColor();
    seconds++;
    app.render(<SecondsCounter counter={seconds} anyColor={color}/>);
    console.log(color);
}, 1000);