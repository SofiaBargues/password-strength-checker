import { useState } from "react";

const mayusculas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const minusculas = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const caracteresEspeciales = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  "|",
  "\\",
  "`",
  "~",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [nivelDeSeguridad, setNivelDeSeguridad] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;
    let seguridad = 0;
    const passwordLength = password.length;

    if (passwordLength >= 6 && passwordLength <= 32) {
      // if (){
      seguridad = seguridad + Math.floor(passwordLength / 3);
      // }
      for (let i = 0; i < password.length; i++) {
        if (minusculas.includes(password[i])) {
          seguridad = seguridad + 1;
          break;
        }
      }
      for (let i = 0; i < password.length; i++) {
        if (mayusculas.includes(password[i])) {
          seguridad = seguridad + 1;
          break;
        }
      }
      for (let i = 0; i < password.length; i++) {
        if (caracteresEspeciales.includes(password[i])) {
          seguridad = seguridad + 1;
          break;
        }
      }
      for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
          seguridad = seguridad + 1;
          break;
        }
      }
      setNivelDeSeguridad(seguridad);
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
        <p>{nivelDeSeguridad}</p>

        <p>Strength of your password (out of 10) is IO</p>
      </div>
    </>
  );
}

export default App;
