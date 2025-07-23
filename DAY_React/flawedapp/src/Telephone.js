import React, { useState, useEffect } from "react";

const Telephone = () => {
  const [value, setValue] = useState("");
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    let digits = "";
    for (const ch of value) {
      if (ch >= "0" && ch <= "9") digits += ch;
    }

    let part = "";
    if (digits.length <= 3) {
      part = digits;
    } else if (digits.length <= 6) {
      part = "(" + digits.slice(0, 3) + ") " + digits.slice(3);
    } else {
      part =
        "(" +
        digits.slice(0, 3) +
        ") " +
        digits.slice(3, 6) +
        "-" +
        digits.slice(6, 10);
    }

    setFormatted(part);
  }, [value]);

  return (
    <div>
      <input
        type="tel"
        placeholder="Enter phone"
        value={formatted}
        onChange={(e) => setValue(e.target.value)}
        maxLength={14}
      />
    </div>
  );
};

export default Telephone;