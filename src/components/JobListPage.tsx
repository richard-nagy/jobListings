import { Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGuid } from "../common/common";
import { AppDispatch, fetchJobsAction, RootState } from "../store";
import JobItem from "./JobItem";

const JobListPage = () => {
    //#region Props and States
    const dispatch = useDispatch<AppDispatch>();

    const { jobs, loading, error } = useSelector((state: RootState) => state.jobs);

    console.log(jobs);
    //#endregion

    //#region UseEffects
    useEffect(() => {
        dispatch(fetchJobsAction());
    }, [dispatch]);
    //#endregion

    //#region 
    if (loading) {
        return <div>
            Loading...
        </div>;
    }

    if (error) {
        return <div>
            Error: {error}
        </div>;
    }

    return <Container>
        <h2>Job Listings</h2>
        <Grid container spacing={2}>
            {
                jobs.map(job =>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <JobItem
                            title={job.title}
                            description={job.description}
                            id={newGuid()}
                        />
                    </Grid>
                )
            }
        </Grid>
    </Container>;
    //#endregion
};

export default JobListPage;
