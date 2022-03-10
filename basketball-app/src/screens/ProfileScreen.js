import React, { useEffect, useState } from 'react'
import { ProfileForm } from '../components/ProfileForm'

function ProfileScreen(props) {
  const [profile, setProfile] = useState({})

  const pullProfile = () => {
    // call firebase, get profile based on userId
    // if profile exists, setProfile()
  }

  useEffect(() => {
    pullProfile()
  }, [profile])

  if (!profile) {
    return (
      <ProfileForm />
    )
  } else {
    return (<></>)
  }
}

export { ProfileScreen }
