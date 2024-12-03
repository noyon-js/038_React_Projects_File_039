import React, { useState } from "react";

export default function Ragistration2() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">E-mail:</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br />
        <label className="phoneNumber-input" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <br />
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
