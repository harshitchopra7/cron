import React from "react";
import { TextField as TxtField, Typography } from "@mui/material";

function TextField({
  id = "outlined-basic",
  variant = "outlined",
  label,
  type,
  value,
  onChange,
  width = "100%",
  ...props
}) {
  return (
    <TxtField
      id={id}
      label={<Typography>{label}</Typography>}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      size="small"
      sx={{
        width: width,
        margin: "10px 0",
      }}
      {...props}
    />
  );
}

export default TextField;
