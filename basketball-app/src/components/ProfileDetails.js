import React from "react";

function ProfileDetails(props) {

  const profileState = props.profileState

  return (
    <React.Fragment>
      <h1>User Detail</h1>
      <h3>Name: {profileState.name}</h3>
      <h3>Email: {profileState.email}</h3>
      <h3>Level: {profileState.selectLevel}</h3>
      <h3>Location: {profileState.location}</h3>
      <h3>Time: {profileState.time}</h3>
      <h3>Training: {profileState.training ? 'Yes' : 'No'}</h3>
      <h3>Pickup: {profileState.pickup ? 'Yes' : 'No'}</h3>
    </React.Fragment>
  )
}

export { ProfileDetails }
