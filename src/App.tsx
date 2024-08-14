import { useState } from "react";

function App() {
  return (
    <>
      <h1>Password Strength Checker</h1>
      <div className="card">
        <input></input>
        <div className="h-3 w-20 text-red-600">se</div>
        <p>Strength of your password (out of 10) is IO</p>
      </div>
    </>
  );
}

export default App;
