import { useState } from "react";

function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <h1>Password Strength Checker</h1>
      <div className="card">
        <input onChange={handleChange} className="border border-1"></input>
        <div className="h-3 w-44 bg-slate-300">
          <div
            className="h-3 bg-lime-500"
            style={{
              width: "90%",
            }}
          ></div>
        </div>
        <p>Strength of your password (out of 10) is IO</p>
      </div>
    </>
  );
}

export default App;
