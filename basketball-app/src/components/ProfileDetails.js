import React from "react";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function ProfileDetails(props) {
  const profileState = props.profileState
  const title = props.title

  return (
    <Box width={600}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2>{title}</h2>
        </Grid>

        <Grid item xs={6}>
          <h3>Name: {profileState.name}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Email: {profileState.email}</h3>
        </Grid>

        <Grid item xs={6}>
          <h3>Level: {profileState.selectLevel}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Location: {profileState.location}</h3>
        </Grid>

        <Grid item xs={6}>
          <h3>Time: {profileState.time}</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Training: {profileState.training ? 'Yes' : 'No'}</h3>
          <h3>Pickup: {profileState.pickup ? 'Yes' : 'No'}</h3>
        </Grid>
      </Grid>
    </Box>
  )
}

export { ProfileDetails }
