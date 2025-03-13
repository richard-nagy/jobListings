import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJobsRecord } from "../selectors";

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

    return <div style={{
        padding: 40,
    }}>
        <Typography variant="h5">
            {job.title}
        </Typography>
        <Typography variant="body1">
            {job.description}
        </Typography>
    </div>;
    //#endregion
};

export default JobDetailsPage;
