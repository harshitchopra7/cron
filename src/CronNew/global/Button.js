import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";

// theme
import { theme } from "config/theme";
import { FONTS } from "theme/theme";
import { FONT_SIZE } from "theme/types.ts";

const CommonButton = ({
  variant,
  color,
  onClick,
  buttonText,
  autoFocus = false,
  type = "primary",
  disabled = false,
  ...props
}) => {
  const isPrimaryButton = useMemo(() => {
    return type === "primary";
  }, [type]);

  const backgroundColor = useMemo(() => {
    if (disabled) {
      return theme.button.disabledBackgroundColor;
    } else if (isPrimaryButton) {
      return theme.button.backgroundColor;
    } else {
      return theme.button.textColor;
    }
  }, [isPrimaryButton, disabled]);

  const textColor = useMemo(() => {
    if (disabled) {
      return theme.button.disabledTextColor;
    } else if (isPrimaryButton) {
      return theme.button.textColor;
    } else {
      return theme.button.backgroundColor;
    }
  }, [isPrimaryButton, disabled]);

  return (
    <div>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        autoFocus={autoFocus}
        size="small"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          border:
            !isPrimaryButton && `1px solid ${theme.button.backgroundColor}`,
          fontSize: FONTS[FONT_SIZE.DESCRIPTION].size,
          fontWeight: FONTS[FONT_SIZE.TITLE].weight,
          marginBottom: "10px",
        }}
        {...props}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CommonButton;
