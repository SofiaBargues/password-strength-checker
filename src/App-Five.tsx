import { useState } from "react";

function result(str: string) {
  const result = {
    length: false,
    upper: false,
    lower: false,
    digit: false,
    special: false,
  };

  if (str.length >= 6) result.length = true;

  for (const char of str) {
    const num = char.charCodeAt(0);
    if (num >= "A".charCodeAt(0) && num <= "Z".charCodeAt(0))
      result.upper = true;
    else if (num >= "a".charCodeAt(0) && num <= "z".charCodeAt(0))
      result.lower = true;
    else if (num >= "0".charCodeAt(0) && num <= "9".charCodeAt(0))
      result.digit = true;
    else result.special = true;
  }
  return result;
}

function strength(result: {
  length: boolean;
  upper: boolean;
  lower: boolean;
  digit: boolean;
  special: boolean;
}) {
  let total = 0;
  if (result.length) total += 2;
  if (result.upper) total += 2;
  if (result.lower) total += 2;
  if (result.digit) total += 2;
  if (result.special) total += 2;

  return total;
}

function App() {
  const [inputVal, setInputVal] = useState("");
  const contain = result(inputVal);
  const strengthTotal = strength(contain);

  console.log(inputVal);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6">
      <>
        <h1>Password strengthVal Checker</h1>
        <input
          className="border"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        ></input>
        <div className="bg-slate-300 w-52 h-5 rounded-full">
          {strengthTotal <= 4 && inputVal.length != 0 ? (
            <div className="bg-red-300 w-12 h-5 rounded-full"></div>
          ) : strengthTotal <= 8 && inputVal.length != 0 ? (
            <div className="bg-orange-300 w-40 h-5 rounded-full"></div>
          ) : strengthTotal > 8 && inputVal.length != 0 ? (
            <div className="bg-green-300 w-52 h-5 rounded-full"></div>
          ) : (
            ""
          )}
        </div>
      </>
      <ul className=" h-44">
        {contain.length ? "" : <li>Password must 6 y 32 characters.</li>}
        {contain.upper ? "" : <li>Password must have at least 1 uppercase.</li>}
        {contain.lower ? "" : <li>Password must have at least 1 lowercase.</li>}
        {contain.digit ? "" : <li>Password must have at least 1 digit.</li>}
        {contain.special ? (
          ""
        ) : (
          <li>Password must have at least 1 special character.</li>
        )}

        <div>Strength of your password is {strengthTotal} out of 10.</div>
      </ul>
    </div>
  );
}

export default App;
