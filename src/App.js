import AppRoutes from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
