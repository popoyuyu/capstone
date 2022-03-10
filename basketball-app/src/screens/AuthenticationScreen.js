import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import '../App.css';
import { auth } from '../firebase';
import { AuthenticationForm } from '../components'

function AuthenticationScreen() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  return (
    <div className="App">
      <AuthenticationForm title='Register User' onSetEmail={setRegisterEmail} onSetPassword={setRegisterPassword} onSubmit={register} buttonText='Create User' />
      <AuthenticationForm title='Login' onSetEmail={setLoginEmail} onSetPassword={setLoginPassword} onSubmit={login} buttonText='Login' />
    </div>
  );
}

export { AuthenticationScreen }
