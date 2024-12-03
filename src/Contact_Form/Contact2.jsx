import React, { useState } from "react";

export default function Contact2() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label htmlFor="name">FullName:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name" placeholder="Enter Your FullName"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          name="email"
          id="email" placeholder="Enter Your Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          type="text"
          name="message"
          id="message" placeholder="Enter Your Message"
          value={user.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
