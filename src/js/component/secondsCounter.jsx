import React from "react";

const Digit = (props) => {
    return (
        <div className="card bg-dark m-1" style={{color:props.color}}>
            <div className="card-body d-flex justify-content-center">
                <h2 className="card-title">{props.number}</h2>
            </div> 
        </div>
    )
}

const SecondsCounter = (props) => {
    return (
        <div className="" style={{marginTop:"20vh"}}>
            <div className="d-flex justify-content-center mb-2">
                <h1>Simple Counter!! 🕒</h1>
            </div>
            <div className="d-flex ">
                <div className="card text-bg-dark m-1" >
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="card-title"><i className="fa-regular fa-clock"></i></h2>
                    </div>
                </div>
                <Digit number={Math.floor((props.counter/100000) %10)} color={props.anyColor}/>
                <Digit number={Math.floor((props.counter/10000) %10)} color={props.anyColor}/>
                <Digit number={Math.floor((props.counter/1000) %10)} color={props.anyColor}/>
                <Digit number={Math.floor((props.counter/100) %10)} color={props.anyColor}/>
                <Digit number={Math.floor((props.counter/10) %10)} color={props.anyColor}/>
                <Digit number={props.counter % 10} color={props.anyColor}/>
            </div>
        </div>
    )
}

export default SecondsCounter;

