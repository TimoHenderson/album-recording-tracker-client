import { createTheme } from "@mui/material";



const themeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#000000',
            default: '#1f1f1f',
        },
    },
};

export const darkTheme = createTheme(themeOptions);

