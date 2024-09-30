"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #FFFFFF4D",
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#0A0A0A",
            },
            "&:hover fieldset": {
              borderColor: "#0A0A0A",
              borderWidth: "1px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0A0A0A",
              borderWidth: "1px",
            },
          },
          ".MuiAutocomplete-inputRoot": {
            color: "#ffffff",
            backgroundColor: "#0A0A0A",
            borderRadius: "8px",
            "& .MuiAutocomplete-input": {
              padding: "0",
            },
          },
          ".MuiAutocomplete-tag": {
            backgroundColor: "#444444",
            borderRadius: "8px",
            padding: "2px 4px",
            border: "1px solid #444444",
            "&:hover": {
              borderColor: "#444444",
            },
            "& .MuiChip-label": {
              color: "#ffffff",
            },
            "& .MuiChip-labelMedium": {
              color: "#ffffff",
            },
          },
          ".MuiAutocomplete-popupIndicator": {
            color: "#999999",
          },
          ".MuiAutocomplete-clearIndicator": {
            color: "#999999",
          },
        },
        paper: {
          backgroundColor: "#000000",
          color: "#ffffff",
          border: "1px solid #0A0A0A",
        },
        option: {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderBottom: "1px solid #FFFFFF4D",
          "&:hover": {
            backgroundColor: "#222222",
            borderBottom: "1px solid #222222",
          },
          "&.Mui-focused": {
            backgroundColor: "#0A0A0A",
            borderBottom: "1px solid #0A0A0A",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
          borderBottom: "1px solid #FFFFFF4D",
          padding: "8px 14px",
          "&:hover": {
            backgroundColor: "#222222",
            borderBottom: "1px solid #222222",
          },
          "&.Mui-focused": {
            backgroundColor: "#0A0A0A",
            borderBottom: "1px solid #0A0A0A",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.04)",
          },
        },
        text: {
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.04)",
          },
        },
        sizeSmall: {
          padding: "4px 8px",
          fontSize: "0.875rem",
        },
        sizeMedium: {
          padding: "8px 16px",
          fontSize: "1rem",
        },
        sizeLarge: {
          padding: "12px 24px",
          fontSize: "1.125rem",
        },
      },
    },
  },
});
