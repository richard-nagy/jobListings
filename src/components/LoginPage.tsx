import { Button, Paper, TextField, Theme, Typography, useTheme } from '@mui/material';
import { FC, ReactElement, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/usersActionAndReducer';

const LoginPage: FC = (): ReactElement => {
    //#region Props and States
    const theme = useTheme<Theme>();
    const dispatch = useDispatch();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    //#endregion

    //#region Handlers
    const handleLogin = useCallback(() => {
        dispatch(loginUser({
            username: username,
            password: password,
        }));
    }, [dispatch, username, password]);
    //#endregion

    //#region Render
    return <div style={{
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Typography
            variant="h4"
            style={{
                color: "#ffffff",
                marginBottom: 32,
            }}
        >
            Jobs Listing
        </Typography>
        <Paper sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            alignItems: "end",
            gap: 2,
        }}>
            <Typography
                variant="h4"
                width="100%"
            >
                Login
            </Typography>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>
                Login
            </Button>
        </Paper>
    </div>;
    //#endregion
};

export default LoginPage;
