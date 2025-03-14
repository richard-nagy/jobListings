import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../redux/usersActionAndReducer";

const Header: FC = () => {
    //#region Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //#endregion

    //#region Handlers
    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const handleProfileClick = useCallback(() => {
        navigate("/profile");
    }, [navigate]);

    const handleLogOutClick = useCallback(() => {
        navigate("/");
        dispatch(logoutUser());
    }, [dispatch, navigate]);
    //#endregion

    //#region Render
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ mr: 4 }}
                >
                    Job Listings
                </Typography>
                <Button
                    color="inherit"
                    startIcon={<HomeIcon />}
                    sx={{ mr: 2 }}
                    onClick={handleHomeClick}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    startIcon={<PersonIcon />}
                    onClick={handleProfileClick}
                >
                    Profile
                </Button>
                <IconButton
                    color="inherit"
                    sx={{ marginLeft: 'auto' }}
                    onClick={handleLogOutClick}
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
    //#endregion
};

export default Header;
