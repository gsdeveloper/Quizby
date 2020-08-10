import React from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectFormReducer } from '../../slices/formSlice';

export default function TextFieldUsername() {
  const { errorExistsUsername, usernameExists } = useSelector(
    selectFormReducer
  );

  return (
    <TextField
      error={errorExistsUsername.errorExists || usernameExists}
      helperText={errorExistsUsername.errorDesc}
      id="outlined-basic"
      label="Username"
      variant="outlined"
      type="Username"
      margin="normal"
      FormHelperTextProps={{
        style: {
          fontSize: '12px',
          lineHeight: '1.55',
        },
      }}
    />
  );
}
