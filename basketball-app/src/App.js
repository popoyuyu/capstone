import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import { AuthenticationScreen, ProfileScreen } from './screens'

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const logout = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <>
        <h4>User Logged In: </h4>
        {user?.email}

        <button onClick={logout}> Sign Out</button>
        <ProfileScreen />
      </>
    )
  } else {
    return <AuthenticationScreen setUser={setUser} />
  }

}

export default App;