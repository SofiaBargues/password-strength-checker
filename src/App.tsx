import { useState } from "react";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;

    if (password.length >= 6 && password.length <= 32) {
      setErrorMessage("");
    } else {
      setErrorMessage("password must 6 y 32");
    }
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
        <p>{errorMessage}</p>
        <p>Strength of your password (out of 10) is IO</p>
      </div>
    </>
  );
}

export default App;
