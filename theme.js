import { createTheme } from '@mantine/core'

const theme = createTheme({
  fontFamily: 'Avenir Next Condensed, Montserrat, Trebuchet, Verdana, sans-serif',
  fontFamilyMonospace: 'Avenir Next Condensed, Montserrat, Trebuchet, Monaco, Courier, monospace',
  headings: { fontFamily: 'Italiana, Avenir Next Condensed, Montserrat, Trebuchet, Greycliff CF, sans-serif' },
  palette: {
    primary: {
      light: "#35C37D",
      main: "#35C37D",
      dark: "#35C37D"
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#35C37D",
      main: "#35C37D",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#35C37D"
    }
    // error: will use the default color
  },
  overrides: {
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: "rgba(53, 195, 125, 100)",
        borderRadius: 0,
        border: 0,
        colorInherit: "#fff",
        color: "white",
        height: 40,
        padding: "0 30px",
        boxShadow: "4px 9px 26px 0 rgba(16,124,71,0.10)",
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#35C37D",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#35C37D"
          }
        }
      },
      textPrimary: {
        color: "#fff"
      },
      textSecondary: {
        color: "#fff"
      },
      contained: {
        color: "#fff"
      },
      outlined: {
        "&:hover": {
          backgroundColor: "#35C37D"
        }
      },
      containedPrimary: {
        color: "#fff"
      },

      containedSecondary: {
        color: "#fff"
      },

      raised: {
        color: "#fff"
      },

      colorInherit: {
        color: "#fff"
      }
    }
  },
  typography: {
    fontFamily: "azo-sans-web",
    // The default font size of the Material Specification.
    fontSize: 14, // px
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: 16
  }

})

export default theme