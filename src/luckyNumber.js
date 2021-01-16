import React, { useEffect, useState } from "react";

const LuckyNumber = () => {
  const [birthday, setBirthday] = useState();
  const [lucky, setLucky] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    let sum = 0;
    if (birthday && lucky) {
      let dateStr = birthday.match(/[0-9]/g);
      for (let str of dateStr) {
        sum += parseInt(str, 10);
      }
      if (sum % lucky === 0) {
        setResult("Your Birthday is Lucky!");
      } else setResult("Sorry!...Your Birthday is Unlucky.");
    }
    if (lucky === "") {
      setResult("");
    }
  }, [birthday, lucky]);

  return (
    <div>
      <h3>Find if your birthday is lucky!</h3>
      <label>Birthday: </label>
      <input onChange={(e) => setBirthday(e.target.value)} type="date" />
      <br /> <br />
      <label>Lucky Number: </label>
      <input
        placeholder="Enter Lucky Number"
        onChange={(e) => setLucky(e.target.value)}
        type="number"
      />
      <br /> <br />
      <strong>{result}</strong>
    </div>
  );
};

export default LuckyNumber;
