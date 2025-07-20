import { useState } from "react";

function kindOfChar(char: string) {
  const charCode = char.charCodeAt(0);
  console.log(charCode);
  if (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))
    return "digit";
  else if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0))
    return "lowercase letter";
  else if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
    return "uppercase letter";
  else return "special character";
}

function contain(inputValue: string) {
  let length = false;
  let uppercase = false;
  let lowercase = false;
  let digit = false;
  let special = false;
  let strengthVal = 0;
  if (inputValue.length <= 3) {
    strengthVal = 0;
  } else {
    strengthVal += 2;
    length = true;
    for (const char of inputValue) {
      if (kindOfChar(char) === "digit" && digit === false) {
        strengthVal += 2;
        digit = true;
      } else if (
        kindOfChar(char) === "special character" &&
        special === false
      ) {
        strengthVal += 2;
        special = true;
      } else if (
        kindOfChar(char) === "lowercase letter" &&
        lowercase === false
      ) {
        strengthVal += 2;
        lowercase = true;
      } else if (
        kindOfChar(char) === "uppercase letter" &&
        uppercase === false
      ) {
        strengthVal += 2;
        uppercase = true;
      }
    }
  }
  return { strengthVal, length, uppercase, lowercase, digit, special };
}

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  let strengthKind = "";

  const { strengthVal, length, uppercase, lowercase, digit, special } = contain(inputValue);

  if (strengthVal > 3 && strengthVal <= 6) strengthKind = "Weak";
  else if (strengthVal > 6 && strengthVal <= 8) strengthKind = "Medium";
  else if (strengthVal > 8) strengthKind = "Strong";

  return (
    <div className="flex flex-col justify-center  items-center h-screen m-auto gap-4">
      <h1 className="font-bold text-2xl">Password strengthVal Checker</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border w-52 "
      ></input>
      <div>
        <div className="bg-slate-300 w-52 h-5 rounded-full">
          <div
            className={
              "h-5 rounded-full justify-start flex  " +
              (strengthKind === "Weak"
                ? "bg-red-600 w-12"
                : strengthKind === "Medium"
                ? "  bg-orange-600  w-32"
                : strengthKind === "Strong"
                ? "bg-green-600  w-52"
                : "")
            }
          ></div>
        </div>
      </div>

      <div className="text-xs">
        {!length ? <li>Password must 6 y 32 characters.</li> : ""}
        {length && !uppercase ? (
          <li>Password must have at least 1 uppercase.</li>
        ) : (
          ""
        )}
        {length && !lowercase ? (
          <li>Password must have at least 1 lowercase.</li>
        ) : (
          ""
        )}
        {length && !digit ? <li>Password must have at least 1 digit.</li> : ""}
        {length && !special ? (
          <li>Password must have at least 1 special character.</li>
        ) : (
          ""
        )}
      </div>
      <div className="text-xs">
        Srength of your password ({strengthVal} out of 10) is .
      </div>
    </div>
  );
}

export default App;
