import React, { useEffect, useState } from 'react'
import { ProfileForm, ProfileDetails } from '../components'
import { getProfile, searchProfiles } from '../firebase'

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

  const search = async () => {
    const query = {
      beginner: true,
      intermediate: true,
      seattle: true,
      pickup: true,
    }
    const result = await searchProfiles(query)
    console.log({ result })
  }

  if (profileState) {
    return (
      <>
        <ProfileDetails profileState={profileState} />
        <button onClick={clearProfileState}>Edit</button>
        <button onClick={search}>test search</button>

      </>
    )
  } else {
    return <ProfileForm userId={user?.uid} setProfileState={setProfileState} />
  }
}

export { ProfileScreen }
