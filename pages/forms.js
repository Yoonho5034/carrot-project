/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

const forms = () => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChageValue = (type, e) => {
    if (type === "text") {
      setUserName(e.target.value);
      return;
    }
    if (type === "email") {
      setEmail(e.target.value);
      return;
    }
    if (type === "password") {
      setPassword(e.target.value);
      return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName, email, password, "userName, email, password");
  };
  return (
    <form>
      <input
        value={userName}
        type="text"
        placeholder="UserName"
        onChange={(e) => onChageValue("text", e)}
        required
      />
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => onChageValue("email", e)}
        required
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => onChageValue("password", e)}
        required
      />

      <input type="submit" value="submit" onClick={onSubmit} />
    </form>
  );
};

export default forms;
