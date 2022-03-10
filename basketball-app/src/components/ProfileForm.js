import React from 'react'

function ProfileForm(props) {

  return (
    <React.Fragment>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter your name' />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
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

      </form>
    </React.Fragment>
  )
}

export { ProfileForm }
