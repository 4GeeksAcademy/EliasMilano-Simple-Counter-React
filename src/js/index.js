//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";


let randomColor = () => {
    const colorBase = "0123456789ABCDEF";
    let newColor = "#";

    for (let i=0; i<6; i++) {
        newColor = newColor + colorBase[Math.floor(Math.random()*colorBase.length)];
    }
    return newColor;
}

let seconds = 0;
let intervalo;
let sentido = true;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<SecondsCounter counter={seconds}/>);

const renderSecondsCounter = () => {
    let color = randomColor();
    if (sentido) {
        seconds++;
    } else {
        seconds--;
    };
    app.render(<>
        <SecondsCounter counter={seconds} anyColor={color}/>
        <div className="">
            <input id="inputSeconds" onChange={(event) => {
                 seconds = event.target.value;
            }
        } placeholder="Ingrese la cantidad de segundos deseada" type="number" className="col-12 my-2 rounded bg-dark text-white"/>

            <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
                {/* Botón Detener */}
                <button onClick={() => {
                        clearInterval(intervalo);
                    }
                } type="button" className="btn btn-dark m-1 text-danger rounded"><strong>Detener</strong></button>

                {/* Botón Reanudar */}
                <button onClick={() => {
                        intervalo = setInterval(renderSecondsCounter,1000);
                    }
                } type="button" className="btn btn-dark m-1 text-success rounded"><strong>Reanudar</strong></button>

                {/* Botón Reiniciar */}
                <button onClick={() => {
                        seconds = 0;
                        document.querySelector("#inputSeconds").value = undefined;
                    }
                } type="button" className="btn btn-dark m-1 text-primary rounded "><strong>Reiniciar</strong></button>
            </div>

            <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
                {/* Botón Cambio de sentido de avance */}
                <button onClick={() => {
                        sentido = !sentido;
                    }
                } type="button" className="btn btn-dark m-1 text-warning rounded"><strong>{(sentido) ? "Hacer click para cuenta regresiva" : "Hacer click para cuenta progresiva"}</strong></button>
            </div>

        </div>
    </>);

    if (seconds <= 0) {
        alert("Fin de cuenta regresiva!!")
        clearInterval(intervalo);
    };
}

intervalo = setInterval(renderSecondsCounter, 1000);

