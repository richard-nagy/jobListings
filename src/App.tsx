import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import JobDetailsPage from "./components/Jobs/JobDetailsPage";
import JobListPage from "./components/Jobs/JobListPage";
import ProfilePage from "./components/ProfilePage";
import { store } from "./redux/store";
import theme from "./theme";

const App = () => {
    //#region Render
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Container>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<JobListPage />}
                        />
                        <Route
                            path="/job/:id"
                            element={<JobDetailsPage />}
                        />
                        <Route
                            path="/profile"
                            element={<ProfilePage />}
                        />
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    </Provider >;
    //#endregion
};

export default App;
