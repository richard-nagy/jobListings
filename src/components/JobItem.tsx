import { Button, Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface JobItemProps {
    id: string;
    title: string;
    description: string;
}
const JobItem: FC<JobItemProps> = (props: JobItemProps) => {
    //#region Props and States
    const { title, description, id } = props;

    const navigate = useNavigate();
    //#endregion

    //#region Handlers
    const handleViewDetails = () => {
        navigate(`/job/${id}`);
    };
    //#endregion

    //#region Render
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {description}
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    onClick={handleViewDetails}
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
    //#endregion
};

export default JobItem;
