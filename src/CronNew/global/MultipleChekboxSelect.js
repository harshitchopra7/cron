// deps
import * as React from "react";

// mui deps
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

export default function MultipleChekboxSelect({
  label,
  menuItem,
  menuItemContainsObject,
  value,
  handleChange,
  disabled,
  handleCheckboxChange,
  selectedList,
  ...rest
}) {
  return (
    <Box
      sx={{ minWidth: 90 }}
      {...rest}
      style={{
        border: "2px solid #1976D2",
        padding: "4px",
        marginRight: "10px",
        borderRadius: "8px",
      }}
    >
      <div style={{ height: "100px", overflowY: "scroll", paddingTop: "10px" }}>
        {menuItem?.map((value, i) => {
          return (
            <div className="flex items-center" style={{ marginTop: "-15px" }}>
              <Checkbox
                size="small"
                checked={selectedList.includes(value)}
                onChange={(e) => handleCheckboxChange(value)}
              />
              <p>{menuItemContainsObject ? value.Name : value}</p>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
