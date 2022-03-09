
import React from 'react'

export const Form = ({ title, onSetEmail, onSetPassword, onSubmit, buttonText }) => {
  return (
    <div>
      <h3>{title}</h3>
      <input placeholder='Email...'
        onChange={(event) => {
          onSetEmail(event.target.value);
        }}
      />
      <input type="password" placeholder='Password...'
        onChange={(event) => {
          onSetPassword(event.target.value);
        }}
      />

      <button onClick={onSubmit}>{buttonText}</button>
    </div>
  )
}