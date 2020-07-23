import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue } from '../../slices/formSlice';

export default function TextFieldUsername() {
  const dispatch = useDispatch();
  const data = useSelector((selectorData) => selectorData.formReducer);
  const { errorExistsUsername, usernameExists } = data;

  return (
    <TextField
      error={errorExistsUsername.errorExists || usernameExists}
      helperText={errorExistsUsername.errorDesc}
      id="outlined-basic"
      label="Username"
      variant="outlined"
      onChange={(e) => {
        const { value } = e.target;
        dispatch(setFieldValue({ label: 'Username', value }));
      }}
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