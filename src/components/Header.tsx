import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router";

const Header: FC = () => {
    //#region Hooks
    const navigate = useNavigate();
    //#endregion

    //#region Handlers
    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, []);
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
                    onClick={handleHomeClick}
                >
                    Home
                </Button>
                <IconButton
                    color="inherit"
                    sx={{ marginLeft: 'auto' }}
                // onClick={ } // todo: Implement this method
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
    //#endregion
};

export default Header;
