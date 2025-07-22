import { useState } from "react";

function contain(str: string) {
  const obj = {
    length: false,
    upper: false,
    lower: false,
    digit: false,
    special: false,
  };

  if (str.length >= 6) obj.length = true;
  for (const char of str) {
    const num = char.charCodeAt(0);
    if (num >= "A".charCodeAt(0) && num <= "Z".charCodeAt(0)) {
      obj.upper = true;
    } else if (num >= "a".charCodeAt(0) && num <= "z".charCodeAt(0)) {
      obj.lower = true;
    } else if (num >= "0".charCodeAt(0) && num <= "9".charCodeAt(0)) {
      obj.digit = true;
    } else {
      obj.special = true;
    }
  }

  return obj;
}

function strength(obj: {
  length: boolean;
  upper: boolean;
  lower: boolean;
  digit: boolean;
  special: boolean;
}) {
  let total = 0;
  if (obj.length) total += 2;
  if (obj.upper) total += 2;
  if (obj.lower) total += 2;
  if (obj.digit) total += 2;
  if (obj.special) total += 2;
  return total;
}

function App() {
  const [inputVal, setInputVal] = useState("");
  const result = contain(inputVal);
  const strengthTotal = strength(result);

  console.log(inputVal);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6">
      <h1 className="font-medium text-2xl">Password strengthVal Checker</h1>
      <input
        className="border"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        type=""
        placeholder="Write here"
      ></input>
      <div className="bg-slate-300 w-52 h-5 rounded-full">
        {strengthTotal <= 4 && inputVal.length != 0 ? (
          <div className="bg-red-300 w-12 h-5 rounded-full"></div>
        ) : (
          ""
        )}
        {strengthTotal > 4 && strengthTotal <= 8 && inputVal.length != 0 ? (
          <div className="bg-orange-300 w-32 h-5 rounded-full"></div>
        ) : (
          ""
        )}
        {strengthTotal > 8 && inputVal.length != 0 ? (
          <div className="bg-green-300 w-52 h-5 rounded-full"></div>
        ) : (
          ""
        )}
      </div>
      <ul className="h-44">
        {result.length ? "" : <li>Password must 6 y 32 characters.</li>}
        {result.upper ? "" : <li>Password must have at least 1 uppercase.</li>}
        {result.lower ? "" : <li>Password must have at least 1 lowercase.</li>}
        {result.digit ? "" : <li>Password must have at least 1 digit.</li>}
        {result.special ? (
          ""
        ) : (
          <li>Password must have at least 1 special character.</li>
        )}
      </ul>
      <div>Strength of your password is {strengthTotal} out of 10.</div>
    </div>
  );
}

export default App;
