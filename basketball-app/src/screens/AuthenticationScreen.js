import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import '../App.css';
import { auth } from '../firebase';
import { Form } from '../components'

function AuthenticationScreen() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
      <Form title='Register User' onSetEmail={setRegisterEmail} onSetPassword={setRegisterPassword} onSubmit={register} buttonText='Create User' />
      <Form title='Login' onSetEmail={setLoginEmail} onSetPassword={setLoginPassword} onSubmit={login} buttonText='Login' />

      <h4>User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out</button>
    </div>
  );
}

export { AuthenticationScreen }
