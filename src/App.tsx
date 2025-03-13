import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import JobDetailsPage from "./components/JobDetailsPage";
import JobListPage from "./components/JobListPage";
import { store } from "./store";
import theme from "./theme";
import Container from "./components/Container";

const App = () => {
    //#region Render
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Router>
                    <Routes>
                        <Route path="/" element={<JobListPage />} />
                        <Route path="/job/:id" element={<JobDetailsPage />} />
                    </Routes>
                </Router>
            </Container>
        </ThemeProvider>
    </Provider>;
    //#endregion
};

export default App;
