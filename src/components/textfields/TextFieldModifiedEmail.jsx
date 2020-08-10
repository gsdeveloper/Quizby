import React from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectFormReducer } from '../../slices/formSlice';

export default function TextFieldEmail() {
  const { errorExistsEmail } = useSelector(selectFormReducer);

  return (
    <TextField
      error={errorExistsEmail.errorExists}
      helperText={errorExistsEmail.errorDesc}
      id="outlined-basic"
      label="Email"
      variant="outlined"
      type="Email"
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
