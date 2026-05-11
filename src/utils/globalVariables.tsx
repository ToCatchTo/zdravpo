import { createTheme } from "@mui/material";

export const colors = {
    background: '#FFFFFF',
    primary: '#0EAC60',
    secondary: '#FFFFFF',
    text: '#313131',
    black: '#000000',
    button: '#EDE9E2',
}

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1780,
        },
    },
});

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}