import React from "react";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function ProfileDetails(props) {
  const profile = props.profile
  const title = props.title

  return (
    <Box width={400} p={2} sx={{ border: '1px solid  #d0d4d4', borderRadius: 10 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2>{title}</h2>
        </Grid>

        <Grid item xs={6}>
          <h3>Name:</h3>
          <span>{profile.name}</span>
        </Grid>
        <Grid item xs={6}>
          <h3>Email: {profile.email}</h3>
        </Grid>

        <Grid item xs={6}>
          <h3>Level: {profile.selectLevel}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Location: {profile.location}</h3>
        </Grid>

        <Grid item xs={6}>
          <h3>Time: {profile.time}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Training: {profile.training ? 'Yes' : 'No'}</h3>
          <h3>Pickup: {profile.pickup ? 'Yes' : 'No'}</h3>
        </Grid>
      </Grid>
    </Box>
  )
}

export { ProfileDetails }
