import { Button, TextField, Typography } from '@mui/material';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { editUserDataAction } from '../redux/usersActionAndReducer';

const ProfilePage: FC = (): ReactElement => {

    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.users.activeUser);

    const [username, setUsername] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    //#region Handlers
    const handleSave = () => {
        if (user) {
            dispatch(editUserDataAction({ id: user?.id, username, name, email, password }));
        }
    };
    //#endregion

    //#region UseEffects
    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
        }
    }, [user]);
    //#endregion

    //#region Render
    return <div style={{
        height: "100%",
        width: "100%",
        padding: 40,
        gap: 4,
        display: 'flex',
        alignItems: "start",
        flexDirection: "column",
    }}>
        <Typography
            variant="caption"
            color="error"
            style={{
                marginBottom: 20,
            }}
        >
            (This is a dummy page, the data will not be saved)
        </Typography>
        <TextField
            label="Username"
            value={username}
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
            label="Name"
            value={name}
            margin="normal"
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
            label="Email"
            value={email}
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
        >
            Save
        </Button>
    </div>;
};

export default ProfilePage;
