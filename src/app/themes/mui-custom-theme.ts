// theme.js
import { createTheme } from '@mui/material/styles';

export const MuiTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingLeft: '0 !important',
          paddingTop: '0 !important',
        },
      },
    },
  },
});

