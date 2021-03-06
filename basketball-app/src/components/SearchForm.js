import React, { useState } from "react";
import Grid from '@mui/material/Grid'
import { searchProfiles } from '../firebase'
import { ProfileDetails } from './ProfileDetails'

function SearchForm() {
  const [searchResult, setSearchResult] = useState([])

  const onSubmit = async e => {
    e.preventDefault()
    const target = e.target
    const query = {
      beginner: target.beginner.checked,
      intermediate: target.intermediate.checked,
      advanced: target.advanced.checked,
      morning: target.morning.checked,
      afternoon: target.afternoon.checked,
      night: target.night.checked,
      seattle: target.seattle.checked,
      renton: target.renton.checked,
      bellevue: target.bellevue.checked,
      training: target.training.checked,
      pickup: target.pickup.checked,
    }
    const results = await searchProfiles(query)
    setSearchResult(results)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h2>Filter by:</h2>
        <form onSubmit={onSubmit}>
          <h4>Select Levels:</h4>
          <input type="checkbox" id="beginner" name="beginner" value="beginner" />
          <label for="beginner">Beginner</label>
          <input type="checkbox" id="intermediate" name="intermediate" value="intermediate" />
          <label for="intermediate">Intermediate</label>
          <input type="checkbox" id="advanced" name="advanced" value="advanced" />
          <label for="advanced">Advanced</label>

          <h4>Select Times:</h4>
          <input type="checkbox" id="morning" name="morning" value="morning" />
          <label for="morning">Morning</label>
          <input type="checkbox" id="afternoon" name="afternoon" value="afternoon" />
          <label for="afternoon">Afternoon</label>
          <input type="checkbox" id="night" name="night" value="night" />
          <label for="night">Night</label>

          <h4>Select Locations:</h4>
          <input type="checkbox" id="seattle" name="seattle" value="seattle" />
          <label for="seattle">Seattle</label>
          <input type="checkbox" id="bellevue" name="bellevue" value="bellevue" />
          <label for="bellevue">Bellevue</label>
          <input type="checkbox" id="renton" name="renton" value="renton" />
          <label for="renton">Renton</label>

          <h4>Select Preference:</h4>
          <input type="checkbox" id="training" name="training" value="training" />
          <label for="training">Training Buddy</label>
          <input type="checkbox" id="pickup" name="pickup" value="pickup" />
          <label for="pickup">Pickup Team</label>

          <button type="submit">Search!</button>
        </form>
      </Grid>
      <Grid item xs={8}>
        <h2>Results</h2>
        <Grid container spacing={1}>
          {searchResult.map(profile => (
            <Grid item xs={6}>
              <ProfileDetails profile={profile} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export { SearchForm }