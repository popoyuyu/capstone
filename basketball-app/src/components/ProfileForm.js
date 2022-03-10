import React from 'react'
import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { setProfile } from '../firebase'


function ProfileForm(props) {
  const userId = props.userId
  const setProfileState = props.setProfileState

  const onSubmit = e => {
    e.preventDefault()
    const target = e.target
    const profileData = {
      name: target.name.value,
      email: target.email.value,
      selectLevel: target.selectLevel.value,
      time: target.time.value,
      location: target.location.value,
      training: target.training.checked,
      pickup: target.pickup.checked,
    }
    setProfile(userId, profileData)
    setProfileState(profileData)
  }

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <form onSubmit={onSubmit}>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Enter your name' />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <select name="selectLevel" id="selectLevel">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select name="time" id="time">
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="night">Night</option>
          </select>
          <select name="location" id="location">
            <option value="seattle">Seattle</option>
            <option value="bellevue">Bellevue</option>
            <option value="renton">Renton</option>
          </select>
          <input type="checkbox" id="training" name="training" value="training" />
          <label for="training">Training Buddy</label>
          <input type="checkbox" id="pickup" name="pickup" value="pickup" />
          <label for="pickup">Pickup Team</label>

          <button type="submit">Submit</button>
        </form>
      </Grid>
    </Grid >
  )
}

export { ProfileForm }
