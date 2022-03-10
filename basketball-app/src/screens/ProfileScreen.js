import React from 'react'
import { ProfileForm } from '../components/ProfileForm'

function ProfileScreen({ user }) {
  return <ProfileForm userId={user?.id} />
}

export { ProfileScreen }
