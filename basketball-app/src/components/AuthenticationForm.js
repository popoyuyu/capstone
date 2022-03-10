import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function AuthenticationForm({ title, onSetEmail, onSetPassword, onSubmit, buttonText }) {
  return (
    <Box display='flex' justifyContent='center'>
      <Box display='flex' flexDirection='column' width={600}>
        <h3>{title}</h3>
        <TextField
          label='Email address'
          type='email'
          onChange={(event) => {
            onSetEmail(event.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(event) => {
            onSetPassword(event.target.value);
          }}
        />

        <Button onClick={onSubmit} variant='contained' type='submit'>
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}
export { AuthenticationForm }
