import CloseIcon from '@mui/icons-material/Close';
import { Alert, Button, IconButton, Paper, TextField, Theme, Typography, useTheme } from '@mui/material';
import { FC, ReactElement, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clearLoginErrorMessage, loginUser } from '../redux/usersActionAndReducer';

const LoginPage: FC = (): ReactElement => {
    //#region Props and States
    const theme = useTheme<Theme>();
    const dispatch = useDispatch();

    const { loginErrorMessage: errorMessage } = useSelector((state: RootState) => state.users);

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

    const onEnterDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e?.key === "Enter") {
            handleLogin();
        }
    }, [handleLogin]);
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
            width: 350,
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
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={onEnterDown}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={onEnterDown}
            />
            <Button onClick={handleLogin}>
                Login
            </Button>
            {
                errorMessage &&
                <Alert
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            size="small"
                            onClick={() => dispatch(clearLoginErrorMessage())}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    style={{
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    {errorMessage}
                </Alert>
            }
        </Paper>
    </div>;
    //#endregion
};

export default LoginPage;
