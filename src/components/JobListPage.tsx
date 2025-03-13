import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import JobItem from "./JobItem";

const JobListPage = () => {
    //#region Props and States
    const { jobs, loading, error } = useSelector((state: RootState) => state.jobs);
    //#endregion

    //#region Renders
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
        <Grid
            container
            spacing={2}
            padding={4}
        >
            {
                jobs.map(job =>
                    <Grid
                        key={job.id}
                        size={{ xs: 12, sm: 6, md: 4 }}
                    >
                        <JobItem
                            title={job.title}
                            description={job.description}
                            id={job.id}
                        />
                    </Grid>
                )
            }
        </Grid>
    </Container>;
    //#endregion
};

export default JobListPage;
