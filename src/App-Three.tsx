import { useState } from "react";

function contain(str: string) {

  
  const result: [number, boolean, boolean, boolean, boolean] = [
    str.length,
    false,
    false,
    false,
    false,
  ];
  if (str.length >= 3) {
    for (const char of str) {
      const charVal = char.charCodeAt(0);
      if (charVal >= "A".charCodeAt(0) && charVal <= "Z".charCodeAt(0)) {
        result[1] = true;
      } else if (charVal >= "a".charCodeAt(0) && charVal <= "z".charCodeAt(0)) {
        result[2] = true;
      } else if (charVal >= "0".charCodeAt(0) && charVal <= "9".charCodeAt(0)) {
        result[3] = true;
      } else {
        result[4] = true;
      }
    }
  }
  return result;
}

function strength(result: [number, boolean, boolean, boolean, boolean]) {
  let total = 0;
  let isLongerThanThree = false;
  if (result[0] >= 6 && !isLongerThanThree) {
    total += 2;
    isLongerThanThree = true;
  }
  if (result[1]) total += 2;
  if (result[2]) total += 2;
  if (result[3]) total += 2;
  if (result[4]) total += 2;

  return total;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const containArr = contain(inputValue);
  const totalStrength = strength(containArr);

  console.log(inputValue);
  console.log(containArr);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="flex items-center h-screen gap-10 justify-center   flex-col">
        <div className="font-semibold text-2xl">
          Password strengthVal Checker
        </div>
        <input
          id="passwordInput"
          type="text"
          // type="password"
          value={inputValue}
          onChange={handleInputChange}
          className="border w-52 "
        ></input>
        <div>
          <div className="h-5 w-52 bg-gray-300 rounded-full">
            {inputValue.length == 0 ? null : totalStrength <= 4 ? (
              <div className="h-5 w-12 bg-red-300 rounded-full"></div>
            ) : totalStrength <= 8 ? (
              <div className="h-5 w-36 bg-orange-300 rounded-full"></div>
            ) : (
              <div className="h-5 w-52 bg-green-300 rounded-full"></div>
            )}
          </div>
        </div>
        <ul className="list-disc h-36">
          {containArr[0] < 6 ? (
            <li>
              <div>Password must 6 y 32 characters.</div>
            </li>
          ) : (
            ""
          )}
          {!containArr[1] ? (
            <li>
              <div>Password must have at least 1 uppercase.</div>
            </li>
          ) : (
            ""
          )}
          {!containArr[2] ? (
            <li>
              <div>Password must have at least 1 lowercase.</div>
            </li>
          ) : (
            ""
          )}
          {!containArr[3] ? (
            <li>
              <div>Password must have at least 1 digit.</div>
            </li>
          ) : (
            ""
          )}
          {!containArr[4] ? (
            <li>
              <div>Password must have at least 1 special character.</div>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div>Srength of your password is ({totalStrength} out of 10)</div>
      </div>
    </>
  );
}

export default App;
