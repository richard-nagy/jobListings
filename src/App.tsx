import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import JobDetailsPage from "./components/JobDetailsPage";
import JobListPage from "./components/JobListPage";
import theme from "./theme";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<JobListPage />} />
                    <Route path="/job/:id" element={<JobDetailsPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </Provider>;
};

export default App;
