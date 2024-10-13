import React from "react";

const Digit = () => {
    return (
        <div className="card text-bg-dark m-1" >
            <div className="card-body d-flex justify-content-center">
                <h3 className="card-title">9</h3>
            </div>
        </div>
    )
}

const SecondsCounter = () => {
    return (
        <div className="" style={{marginTop:"20vh"}}>
            <div className="d-flex justify-content-center mb-2">
                <h1>Simple Counter!! 🕒</h1>
            </div>
            <div className="d-flex ">
                <div className="card text-bg-dark m-1" >
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h3 className="card-title"><i className="fa-regular fa-clock"></i></h3>
                    </div>
                </div>
                <Digit/>
                <Digit/>
                <Digit/>
                <Digit/>
                <Digit/>
                <Digit/>
            </div>
        </div>
    )
}

export default SecondsCounter;

