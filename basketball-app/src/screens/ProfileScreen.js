import React, { useEffect, useState } from 'react'
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
      <>
        <ProfileDetails title='User details' profileState={profileState} />
        <button onClick={clearProfileState}>Edit</button>
        <SearchForm />
      </>
    )
  } else {
    return <ProfileForm userId={user?.uid} setProfileState={setProfileState} />
  }
}

export { ProfileScreen }
