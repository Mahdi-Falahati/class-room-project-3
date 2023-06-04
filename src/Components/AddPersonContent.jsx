import React, { Component } from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AddPeronContent({ ID }) {
  const deleteHandler = (e) => {};
  return (
    <>
      {/* -------------------------------------------- username */}
      <TextField
        // value={data.userName}
        // onChange={userNameHandler}
        required
        fullWidth
        // error={error.username}
        id="UserName"
        label="UserName"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
      {/* -------------------------------------------- password */}
      <TextField
        // onChange={passwordHandler}
        required
        fullWidth
        // error={error.password}
        // value={data.password}
        id="Password"
        label="Password"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <PasswordIcon />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
      {/*-------------------------------------------- confirm pasword */}
      <TextField
        // onChange={confirmPasswordHandler}
        required
        fullWidth
        // error={error.password}
        // value={data.password}
        id="Password"
        label="ConfirmPassword"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <PasswordIcon />
        //     </InputAdornment>
        //   ),
        // }}
        variant="standard"
      />
    </>
  );
}
