import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getJobsRecord } from "../selectors";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const JobDetailsPage = () => {
    //#region Props and States
    const jobsRecord = useSelector(getJobsRecord);
    const { id } = useParams<{ id: string }>();

    const job = useMemo(() => {
        if (id) {
            return jobsRecord[id];
        }
    }, [jobsRecord, id]);
    //#endregion

    //#region Render
    if (!job) {
        return <Typography
            variant="h6"
            color="error"
        >
            This job cant be found. {id}
        </Typography>;
    }

    return <Container>
        <Typography variant="h5">
            {job.title}
        </Typography>
        <Typography variant="body1">
            {job.description}
        </Typography>
    </Container>;
    //#endregion
};

export default JobDetailsPage;
