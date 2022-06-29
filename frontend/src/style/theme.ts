import { createTheme } from "@mui/material"

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        accentColor: { main: string };
    }

    interface PaletteOptions {
        accentColor?: { main: string };
    }
}


export const theme = createTheme({
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#42a5f5'
        },
        accentColor: {
            main: '#d81b60'
        }

    }
})