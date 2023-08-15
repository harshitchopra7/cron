import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const menuListStyles = {
  padding: "8px 16px",

  color: "#333",
  width: "200px",
  // borderBottom: '1px solid #eee',
};

export default function DropdownSelect({
  label,
  menuItem,
  menuItemContainsObject,
  value,
  handleChange,
  disabled,

  ...rest
}) {
  if (menuItemContainsObject)
    return (
      <FormControl size="small" {...rest}>
        <InputLabel id="demo-select-small-label">{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={handleChange}
          //   className={classes.select}
        >
          {menuItem?.map((item, i) => {
            return (
              <MenuItem key={i} value={item.value} sx={menuListStyles}>
                {item.name || item.Name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  return (
    <FormControl size="small" {...rest}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        disabled={disabled}
        // className={classes.select}
      >
        {menuItem?.map((value, i) => {
          return (
            <MenuItem
              key={i}
              value={value.Id || value.Name || value}
              disabled={disabled}
              style={menuListStyles}
            >
              {value.Name ? value.Name : value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
