import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import style from "./btn.module.css";

export default function DeleteBtn({ ID }) {
  const deleteHandler = (e) => {};
  return (
    <>
      <Button
        className={style.btnDelete}
        size="small"
        color="secondary"
        onClick={deleteHandler}
        id={ID}
      >
        <DeleteIcon />
      </Button>
    </>
  );
}
