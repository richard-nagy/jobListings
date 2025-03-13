import { Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { newGuid } from "../common/common";
import JobItem from "./JobItem";

const JobListPage = () => {
    //#region Render
    return (
        <Container>
            <h2>Job Listings</h2>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <JobItem
                        title="Software Engineer"
                        description="Develop and maintain software applications."
                        id={newGuid()}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <JobItem
                        title="Product Manager"
                        description="Oversee product development and strategy."
                        id={newGuid()}
                    />
                </Grid>
            </Grid>
        </Container>
    );
    //#endregion
};

export default JobListPage;
