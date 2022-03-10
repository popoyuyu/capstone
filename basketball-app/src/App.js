import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome: {user.email}
              </Typography>
              <Button onClick={logout} color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box mx={5}>
          <ProfileScreen user={user} />
        </Box>
      </Box>
    )
  } else {
    return <AuthenticationScreen setUser={setUser} />
  }

}

export default App;