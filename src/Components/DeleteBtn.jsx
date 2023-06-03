import React, { Component } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteBtn({ ID }) {
  const deleteHandler = (e) => {};
  return (
    <>
      <Button
        sx={{
          display: "flex",
          lineHeight: "30px",
          borderBottom: "1px solid",
          borderRadius: "0px",
          marginRight: "3px",
        }}
        size="small"
        endIcon={<DeleteIcon />}
        color="secondary"
        onClick={deleteHandler}
        id={ID}
      >
        Delete
      </Button>
    </>
  );
}
