import { ThemeProvider } from "@mui/material";

const AppThemeProvider = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default AppThemeProvider;