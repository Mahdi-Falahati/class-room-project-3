import React from "react";
import Button from "@mui/material/Button";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

export default function CheckBtn({ ID }) {
  return (
    <>
      {/* ------------------------ show grade */}
      <ListItemText
        secondary={
          <>
            <Typography
              sx={{
                display: "inline",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "16px",
                color: "#666",
                paddingLeft: "5px",
              }}
              component="span"
              variant="overline"
              color="text.primary"
            >
              12
            </Typography>
          </>
        }
      />
      {/* --------------------------------- end show grade */}
      {/* --------------------------------- check btn */}
      <Button
        sx={{
          display: "flex",
          lineHeight: "30px",
          borderBottom: "1px solid",
          borderRadius: "0px",
          marginRight: "3px",
        }}
        size="small"
        endIcon={<CheckBoxIcon />}
        color="success"
        id={ID}
      ></Button>
      {/* ---------------------------------end check btn */}
    </>
  );
}
