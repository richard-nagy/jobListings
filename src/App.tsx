import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const App = () => {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>JobListing</h1>
    </ThemeProvider>;
};

export default App;
