import { Alert, Snackbar } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchJobsAction } from "../redux/jobsActionAndReducer";
import { AppDispatch, RootState } from "../redux/store";
import { clearEditUserErrorMessage, fetchUsersAction } from "../redux/usersActionAndReducer";
import LoginPage from "./LoginPage";

interface ContainerProps {
    children: ReactNode;
}
const Container: FC<ContainerProps> = (props: ContainerProps) => {
    //#region Props 
    const { children } = props;

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { activeUser, editUserErrorMessage: errorMessage } = useSelector((state: RootState) => state.users);
    //#endregion

    //#region UseEffects
    useEffect(() => {
        dispatch(fetchJobsAction());
        dispatch(fetchUsersAction());
    }, [dispatch]);

    useEffect(() => {
        if (activeUser === null) {
            navigate("/");
        }
    }, [activeUser, navigate]);
    //#endregion

    //#region Render
    if (activeUser === null) {
        return <LoginPage />;
    }

    return <>
        <Snackbar
            open={!!errorMessage}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={() => dispatch(clearEditUserErrorMessage())}
        >
            <Alert
                onClose={() => dispatch(clearEditUserErrorMessage())}
                severity="error"
                variant="filled"
            >
                {errorMessage}
            </Alert>
        </Snackbar>
        {children}
    </>;
    //#endregion
};

export default Container;
