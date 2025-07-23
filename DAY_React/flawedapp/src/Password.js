import { useState } from "react";

const Password = () => {
  const [pass, setPass] = useState('');
  const Symbols = ['@', '$', '_', '#', '*'];

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  for (let char of pass) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 'a' && char <= 'z') hasLower = true;
    else if (char >= '0' && char <= '9') hasNumber = true;
    else if (Symbols.includes(char)) hasSymbol = true;
  }

  return (
    <div className="container mt-4">
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter Password"
        name="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      {pass.length < 8 && <p className="text-danger"> Password must be at least 8 characters</p>}
      {!hasUpper && <p className="text-danger">At least one Uppercase letter required</p>}
      {!hasLower && <p className="text-danger">At least one Lowercase letter required</p>}
      {!hasNumber && <p className="text-danger">At least one Number required</p>}
      {!hasSymbol && <p className="text-danger">At least one Symbol required (@, $, _, #, *)</p>}

    </div>
  );
};


 
export default Password;