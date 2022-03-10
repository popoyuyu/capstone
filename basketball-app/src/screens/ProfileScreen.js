import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { ProfileForm, ProfileDetails, SearchForm } from '../components'
import { getProfile } from '../firebase'

function ProfileScreen({ user }) {
  const [profileState, setProfileState] = useState(null)

  const clearProfileState = () => {
    setProfileState(null)
  }

  useEffect(() => {
    getProfile(user?.uid).then(p => {
      if (!!p) {
        setProfileState(p)
      }
    })
  }, [user])

  if (profileState) {
    return (
      <Box>
        <Box my={2}>
          <ProfileDetails title='User details' profile={profileState} />
          <button onClick={clearProfileState}>Edit</button>
        </Box>

        <Divider />

        <SearchForm />

      </Box>
    )
  } else {
    return <ProfileForm userId={user?.uid} setProfileState={setProfileState} />
  }
}

export { ProfileScreen }
