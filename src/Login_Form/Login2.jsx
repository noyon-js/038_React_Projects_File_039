import React, { useState } from "react";

export default function Login2() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };

  //! Wrong Practice Code //
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const getData = {
  //     email,
  //     password,
  //   };
  //   console.log(getData);
  //   setEmail('');
  //   setPassword('');
  // };
  //! Worng Practice Code //

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={user.email}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={user.password}
          required
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
