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
  const [quality, setQuality] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;
    let seguridad = 0;
    const passwordLength = password.length;

    if (passwordLength >= 6 && passwordLength <= 32) {
      if (passwordLength <= 18) {
        seguridad = seguridad + Math.floor(passwordLength / 3);
      } else {
        seguridad = seguridad + 6;
      }
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
      setNivelDeSeguridad(0);
      setQuality("");
    }

    if (nivelDeSeguridad < 3 && nivelDeSeguridad <= 6) {
      setQuality("weak");
    } else if (nivelDeSeguridad < 6 && nivelDeSeguridad <= 8) {
      setQuality("moderate");
    } else if (nivelDeSeguridad > 8) {
      setQuality("strong");
    }
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-12">
      <h1 className="font-semibold text-5xl">Password Strength Checker</h1>
      <div className="flex flex-col  gap-6">
        <input
          onChange={handleChange}
          className="border border-1 min-w-96"
        ></input>
        <div className="h-6 rounded-full bg-slate-300">
          <div
            className={` h-6 rounded-full  transition-all duration-500 ${
              quality === "weak"
                ? " bg-red-600"
                : quality === "moderate"
                ? "bg-orange-500"
                : " bg-lime-500"
            } `}
            style={{
              width: nivelDeSeguridad + "0%",
            }}
          ></div>
        </div>
        <p>{errorMessage}</p>

        <p>
          Strength of your password ({nivelDeSeguridad} out of 10) is {quality}.
        </p>
      </div>
    </div>
  );
}

export default App;
