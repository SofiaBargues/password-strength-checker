import { useState } from "react";

function contain(str: string) {
  const containObj = {
    length: false,
    upper: false,
    lower: false,
    digit: false,
    special: false,
  };

  if (str.length >= 6) containObj.length = true;

  for (const char of str) {
    const charVal = char.charCodeAt(0);
    if (charVal >= "A".charCodeAt(0) && charVal <= "Z".charCodeAt(0)) {
      containObj["upper"] = true;
    } else if (charVal >= "a".charCodeAt(0) && charVal <= "z".charCodeAt(0)) {
      containObj["lower"] = true;
    } else if (charVal >= "0".charCodeAt(0) && charVal <= "9".charCodeAt(0)) {
      containObj["digit"] = true;
    } else {
      containObj["special"] = true;
    }
  }
  return containObj;
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

  const strengthLevel = strength(result);
  console.log(strength(result));
  console.log(inputVal);
  console.log(result);
  return (
    <div className="flex flex-col justify-center  items-center h-screen m-auto gap-4">
      <h1 className="font-bold text-2xl">Password strengthVal Checker</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="border w-52"
      ></input>
      <div>
        <div className="bg-slate-300 w-52 h-5 rounded-full">
          {strengthLevel <= 4 ? (
            <div className="bg-red-300 w-12 h-5 rounded-full"> </div>
          ) : strengthLevel > 4 && strengthLevel <= 8 ? (
            <div className="bg-orange-300 w-24 h-5 rounded-full"> </div>
          ) : (
            <div className="bg-green-300 w-52 h-5 rounded-full"> </div>
          )}
        </div>
      </div>

      <ul className="text-xs h-16">
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
      <div className="text-xs">
        Srength of your password is {strengthLevel} out of 10.
      </div>
    </div>
  );
}

export default App;
