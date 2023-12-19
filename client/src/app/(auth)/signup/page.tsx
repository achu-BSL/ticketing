"use client"

import axios from "axios";
import { FormEvent, useState } from "react";


export default function signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    const response = await axios.post('/api/users/signup', {email, password});

    console.log(response.data);
  }

  return (
    <div>
      <h1>SignUP</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" id="password" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
