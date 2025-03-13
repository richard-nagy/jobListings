import { FC, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, fetchJobsAction } from "../store";

interface ContainerProps {
    children: ReactNode;
}
const Container: FC<ContainerProps> = (props: ContainerProps) => {
    //#region Props
    const { children } = props;

    const dispatch = useDispatch<AppDispatch>();
    //#endregion

    //#region UseEffects
    useEffect(() => {
        dispatch(fetchJobsAction());
    }, [dispatch]);
    //#endregion

    //#region Render
    return children;
    //#endregion
};

export default Container;
